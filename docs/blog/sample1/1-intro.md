---
title: Vupress 소개
date: 2022-03-20
tags:
 - vuepress
author: kore3
categories: kore3
---
## Vuepress란?
Vuepress란 "Vue를 기반으로 하는 정적 사이트 생성기"이다.

### 정적사이트(Static Site)
정적사이트(Static Site)란 HTML, CSS, Javascript로만 만들어진 사이트를 의미한다. 서버(Web Server)는 사용자의 요청(Request)에 해당하는 **미리 저장된 파일**(HTML, 이미지, Javascript 등)을 그대로 전달하기 때문에 작성/수정/삭제 등은 불가능하며 페이지조회만 가능하다. 
대표적인 정적사이트로 `Github Page`가 있으며 Github Page는 github에 올라온 파일(HTML, CSS, Javascript)을 기반으로 작동한다.  


### 정적사이트 생성기(Static Site Generator)
SSG란 정적사이트를 만들어주는 도구로 콘텐츠와 파일을 읽어 이를 HTML로 변환시키는 역할을 한다.  
대표적인 SSG로는 Ruby 기반의 `Jekyll`과 Go 기반의 `Hugo`, Vue 기반의 `Vuepress` 등이 있다.

<br>

## Vuepress 설치하기
Vuepress를 시작하려면 사전에 npm이나 yarn을 설치해야 한다.  
필자는 npm을 이용해 yarn을 설치하였다.

### yarn 설치하기
1. 파워쉘에서 아래의 코드를 입력한다.
```Bash
$ npm -v                # npm이 설치되어 있는지 확인
$ npm install -g yarn   # yarn 설치
$ yarn -v               # yarn이 잘 설치되었나 확인
```  

2. Myblog라는 이름의 폴더를 생성하여 폴더에서 터미널을 열어 yarn init 명령어를 입력한다.
```Bash
$ yarn init
```

### Vuepress Quick start 방식으로 프로젝트 생성 
create-vuepress-site generator를 사용해 프로젝트를 생성한다. 이 패키지는 vuepress site에 필요한 기본 디렉토리 및 파일들을 생성한다.  
```Bash
$ yarn create vuepress-site [optionalDirectoryName]
```
명령을 실행하고 vuepress site의 metatdata를 입력하면 프로젝트가 완성된다.
이때, DirectoryName을 입력하지 않으면 docs로 기본생성된다.

```bash
project name
description
maintainer email
maintainer name
repository url
```

### package.json 파일에 scripts 추가

```json{12,13,14}
{
  "name": "practice_Vuepress",
  "homepage": ".",
  "version": "0.0.1",
  "description": "Vuepress 블로그 생성을 위한 샘플입니다.",
  "main": "index.js",
  "authors": {
    "name": "구수빈",
    "email": "rntnqls9@naver.com"
  },
  "repository": "/GuSubeen.github.io/",
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src",
    "deploy": "bash deploy.sh",
    "eject": "vuepress eject"
  },
  "license": "MIT",
  "devDependencies": {
    "@vuepress/plugin-back-to-top": "^1.9.7",
    "@vuepress/plugin-last-updated": "^1.9.7",
    "@vuepress/theme-default": "^1.9.7",
    "vuepress": "^1.5.3",
    "vuepress-plugin-authors": "^0.0.2",
    "vuepress-plugin-fulltext-search": "^2.2.1"
  },
  "dependencies": {
    "next-redux-wrapper": "^7.0.5"
  }
}

```

### yarn dev 하기 전에 yarn install부터 해야한다.
안그러면 'vuepress'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다. 라는 오류 발생함.(yarn dev시)

### 내 디렉토리 구조
현재 default-theme의 구조이니 다른 테마의 경우 구조가 다를 수 있다.
```
docs
├── node_modules
├── package.json
├── yarn.lock
└── src 
    ├── .vuepress 
    │   ├── components 
    │   ├── theme
    │   │  └── Layout.vue 
    │   ├── public
    │   │  └── images  
    │   ├── styles
    │   │  ├── index.styl 
    │   │  └── palette.styl 
    │   ├── config.js
    │   └── enhanceApp.js
    └── index.md
```

### 실행 및 빌드
- 개발모드로 실행
```bash
cd docs
# yarn install
yarn dev
```
개발모드로 실행하는 경우 localhost:8080로 접속한다.

- 빌드(Build)  
build와 deploy는 다음 포스트에 자세히 설명한다.
```bash
cd docs
yarn build
```
빌드를 하면 dist폴더가 갱신되며 이를 github에 올려 블로그를 생성한다.

## default-theme 확장하기
- default-theme 패키지를 설치한다.  
- .vuepress 밑에 theme 폴더를 만들고 index.js를 만들어 다음과 같이 작성한다. 
```js
// .vuepress/theme/index.js
module.exports = {
    extend: '@vuepress/theme-default'
};
```
.vuepress 밑에 theme폴더를 만들어 필요한 폴더와 파일을 작성하면 자동으로 덮어씌워진다.

:::warning
모든 폴더에는 README.md가 존재해야 한다. 없으면 404에러가 발생한다.
:::

<br><br>

### 출처
---
- [vuepress.org](https://vuepress.vuejs.org/guide/getting-started.html#prerequisites)  
- [Titus '열정의 공간: 정적인 페이지와 동적인 페이지의 차이점이란?](https://titus94.tistory.com/4)
- [개발자 황준일의 TIL 블로그: Vuepress 시작하기](https://junilhwang.github.io/TIL/Vuepress/Starter/#%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%A8-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3-dynamic-site)  
- [날마다 새롭게 또 날마다 새롭게: Vuepress 시작하기](https://muyu.tistory.com/entry/Vuepress-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)  

<comment/>