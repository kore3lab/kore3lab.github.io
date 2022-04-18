---
title: 사이드바 항목 자동화시키기
date: 2022-04-10
tags:
 - 커스터마이징
author: 김철수
categories: 김철수
---
## 기존 Sidebar 방법
Vuepress에서 기본으로 제공하는 사이드바 작성 방법은 단순하지만 번거롭다.
리스트에 들어갈 파일과 순서를 정할 수 있으나 md 파일을 추가해도 사이드바에 자동으로 리스트 되지 않기 때문에 config.js에서 수동으로 리스트업 해 주어야 한다. 
```js
module.exports = {
  themeConfig: {
    sidebar: {
      '/blog/1-vue-start/': [
        '1-installation','2-deploy','3-plugin'
      ]
    }
}  
```

### 개선한 Sidebar 방법(1)
사이드바 항목을 자동적으로 추가시키기 위해 수많은 플러그인과 관련 코드들을 설치하고 적용해보았지만 만족스러운 결과를 보지 못했다. 그 중 가장 내가 생각했던 방향과 비슷한 결과를 도출하는 코드를 발견했고 이 코드를 참고해 보기로 했다.  
[techformist 블로그](https://techformist.com/automatic-dynamic-sidebar-vuepress/) 방법을 사용할 경우
```js
module.exports = {
  themeConfig: {
    sidebar:
    {
      '/blog/getting-vuepress/': getSideBar("blog/getting-vuepress","뷰프레스 만들기")
    },
}  
```
아쉽게도 이 코드 또한 내가 생각했던 부분을 100% 만족시켜주지는 못했는데 단순히 설정한 디렉토리의 리스트를 읽어 자동으로 리스트업 해주었지만, 각 디렉토리마다 하나의 페이지를 연결시켜 주어야 한다.   
즉, 블로그dir 안에 3개의 하위 dir가 있고 그 안에 관련 md 파일들이 있다면, 나는 nav바에서 블로그를 누르면 왼쪽 사이드바에 dir1 dir2 dir3 내용이 모두 표시되기를 바랬지만 이 코드는 한 페이지에 하나의 dir만 표시할 수 있기 때문에 블로그 nav에 3개의 하위 디렉토리에 대한 드롭다운을 만들어 줘야 했다.  
이렇게 되면 포스트를 읽으려면 관련 드롭다운을 타고 들어가야 하기 때문에 불편하고 또한, 각 하위 디렉토리에 있는 md파일 개수가 작을 경우 사이드바가 비어보이는 단점이 있었다.

### 최종 개선 방법
[위의 코드](https://techformist.com/automatic-dynamic-sidebar-vuepress/)의 아쉬운 점을 보완하여 blog 페이지에 파일을 모두 담을 수 있도록 하였다.  
1. 위의 코드를 단순히 파일을 읽고 리스트업하는 코드로 만들기 위해(=children 역할) title에 대한 코드를 삭제한다.
2. 파일은 ('sample1/1-config', 'sample2/2-home') 이런식으로 반환되어야 하므로 
   - 상위 디렉토리인 'blog'를 제거해야 한다.
   - 파일 이름 앞에 파일이 속한 폴더의 이름이 붙어야 한다. - 반복문으로 처리

- 최종 개선 코드
```js
//사이드바 목록 자동화
function getSideBar(folder) {
    const extension = [".md"];
  
    const files = fs
      .readdirSync(path.join(`${__dirname}/../${folder}`))
      .filter(
        (item) =>
          item.toLowerCase() != "readme.md" &&
          fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
          extension.includes(path.extname(item))
      );   
  // 상위경로 제거
  if(folder.includes("blog/")){
  var finalpath= folder.replace("blog/","");
}
  // files 앞에 folder 경로 붙이기  
  let a =[];
  for(var i=0; i<files.length; i++){
  a.push(finalpath+'/'+files[i])
  }
  return [ ...a];
  }

```
- config.js 파일
```js
module.exports = {
  // docs/.vuepress/config.js
  themeConfig: {
    sidebar:require("./sidebar"), //sidebar 모듈 불러오기
}  
```
- sidebar.js 파일
  이곳에서 사이드바의 헤더와 헤더에 대한 디렉토리를 지정하여 파일을 리스트업 한다.
```js
module.exports={
'/blog/': [
    //'',
    {
      title: "뷰프레스 시작하기",
      //collapsable: false,
      children: getSideBar("blog/sample1")
    },
    {
      title: "뷰프레스 꾸미기",
      //collapsable: false,
      children: getSideBar("blog/sample2")
    },
    {
      title: "기능 추가하기",
      collapsable: false,
      children: getSideBar("blog/sample3")
    },
    {
      title: "추가 작업들",
      collapsable: false,
      children: getSideBar("blog/sample4")
    },
  ]
}
```
### 추가 개선할 점
1. 상위 디렉토리 이름이 blog여야만 제거된다. -> 어떤 이름이더라도 지워지도록 개선 필요
2. 지금은 blog/dir1, blog/dir2 ... 이렇게 하나의 하위 디렉토리만 가능 -> 중첩 가능하도록 수정 필요

### 출처
- [techformist : Automatic Dynamic Sidebars in Vuepress](https://techformist.com/automatic-dynamic-sidebar-vuepress/)

<comment/>