---
title: Git Action으로 자동배포하기
date: 2022-04-08
tags:
 - 배포
author: 김네모
categories: 김네모
---
## Git Action이란?

## workflow 파일 작성
프로젝트의 루트 디렉토리에 `.github`폴더를 만들고 그 안에 `workflows`폴더를 만든 후 그 안에 `main.yml` 파일을 만들고 아래 스크립트를 넣는다.
```yaml
# .github/workflows/main.yml

name: Build and Deploy
on: [push] # push 이벤트 발생시

jobs: # 이 작업을 수행한다. 
  build-and-deploy: # 작업이름: build-and-deploy
    runs-on: ubuntu-latest # 일반적으로 우분투에서 실행되나 node환경도 추가가능

    steps: # 작업순서(단계적으로 동작)
    - name: Checkout
      uses: actions/checkout@v2 # 워크플로우에서 액세스할 수 있도록 저장소 체크아웃

    - name: Install and Build
      run: yarn && yarn build

    - name: Deploy # 작업이름
      uses: JamesIves/github-pages-deploy-action@releases/v3 
      with:
        branch: gh-pages
        folder: public
 
```

## 주의할 점
public(dist) 파일 지워야함. 
setting-pages에서 배포브랜치 gh-pages로 바꿔야함. 
로컬 gh-pages 만들필요 없음. 

### 참고
- [기억보다 기록을 : vuePress github actions로 자동배포하기](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-github-actions/#vuepress-github-actions%E1%84%85%E1%85%A9-%E1%84%8C%E1%85%A1%E1%84%83%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A2%E1%84%91%E1%85%A9%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)
- [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)

<comment/>