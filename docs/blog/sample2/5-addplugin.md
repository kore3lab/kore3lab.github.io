---
title: 플러그인 추가하기
date: 2022-04-10
tags:
 - 커스터마이징
author: 김철수
categories: 김철수
---
## 설치와 사용법
- 설치
  ```sh
  yarn add -D @vuepress/plugin-플러그인-이름
  ```

- 사용
  config.js 파일의 plugins에 다음과 같이 설치한 플러그인을 기재한다.
  ```js
  // docs/.vuepress/config.js
  module.exports = {
      //...
  plugins: [
    '@vuepress/back-to-top', //맨위로 버튼
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-code-copy', //코드 복사
    '@vuepress/last-updated', // 마지막 수정일 기재
    ]
  }
  ```

  
## 설치되어 있는 플러그인들
테마에 내장되어 있거나 블로그 작성에 유용하다고 생각되어 추가적으로 설치한 플러그인을 소개하겠다. 

### 1. back-to-top  
페이지 하단에서 맨위로 올라가는 버튼을 제공한다. 오른쪽 하단에 위치에 있다.

:::warning
짧은 페이지와 모바일에서는 버튼이 나타나지 않는다.
:::
### 2. last-updated
게시글의 맨 밑에 게시글의 마지막 수정일이 기재되며 `lastUpdated`값을 바꾸면 수정일을 임의로 바꿀 수 있다.
```js
  // docs/.vuepress/config.js
  module.exports = {
      themeConfig: {
          lastUpdated: "수정날짜"
      },
  plugins: [
    '@vuepress/last-updated', // 마지막 수정일 기재
    ]
  }
  ```
### 3. google-analytics
블로그의 유입량을 보여주는 기능을 한다.
```js
// docs/.vuepress/config.js
module.export = {
plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: UA-00000000-0
      }
    ]
  ]
}
```
:::tip
구글 애널리틱스 사이트에 들어가서 블로그를 등록하고 UA-XXXXXX 코드를 받아 GA 등록을 해야한다.
:::

### 4. code-copy
예시 코드 블럭을 복사할 수 있다.
:::tip
코드 블럭에 마우스를 가져다대면 블럭 오른쪽 하단에 복사버튼이 생긴다.
:::

### 5. vuepress-plugin-reading-progress
읽기 진행률 표시줄  
[링크](https://vuejsexamples.com/a-reading-progress-bar-plugin-for-vuepress/)
<br><br> 

### 참고
- [v1.vuepress.vuejs.org](https://v1.vuepress.vuejs.org/zh/plugin/)
- [limdongjin : Tutorial :: Vuepress로 기술문서 빠르게 만들어보자!](https://limdongjin.github.io/vuejs/vuepress/#install)
- [기억보다 기록을 : vuePress plugin 사용법](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-plugin/)

<comment/>