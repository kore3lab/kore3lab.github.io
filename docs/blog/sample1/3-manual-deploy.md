---
title: 깃허브에 배포하기
date: 2022-03-20
tags:
 - 태그2
author: 양세모
categories: 양세모
---
## 배포과정 설명
웹브라우저는 HTML, CSS, JS 언어만 이해할 수 있기 때문에 Vue로 만든 사이트를 배포하기 위해서는 .vue파일이 아닌 빌드를 통해 .vue파일을 브라우저 친화적인 HTML, CSS, JS로 이루어진 build용 파일을 만들어 그 파일을 올려야한다.  

즉, github에 배포하기 위해서는 deploy.sh를 작성해야한다.
1) 문서 빌드
2) 빌드된 문서를 git init -> add -> commit
3) github에 push

## jekyll과의 차이
jekyll의 경우 vscode에서 작성하고 저장하고 push하면 자동빌드가 되어 블로그가 생성되었지만, vueprss의 경우 build과정이 필요하여 이 과정에서 생성된 html로 이루어진 dist폴더를 push해야한다.  
즉, ***build -> dist만 add -> commit -> push*** 해야하는데 매우 번거롭다.  
그래서 이 과정을 쉘 스크립트 문서를 통해 한번에 진행하기로 했다. **deploy.sh**와 **commit.sh**라는 쉘 스크립트를 작성하여 배포파일인 dist는 github의 main에 push하고 전체 문서파일은 develop 브랜치에 push할 것이다.  
스크립트 파일의 위치도 중요한데 docs 밑에 추가한다. (package.json과 같은 위치에 추가하면 된다.)

## deploy.sh 작성
- deploy.sh 작성하기 
  (개발자 황준일님의 TIL 블로그를 참고하였으며 링크는 참고부분에 있다.)
    ```sh
    #!/usr/bin/env sh

    # 오류 발생시 중단한다.
    set -e

    # 문서를 build하여 html로 만든다
    yarn build

    # build가 output된 폴더로 이동한다.
    cd src/.vuepress/dist

    # git clone
    # 각자의 깃허브 주소를 넣어야 한다.
    git clone https://github.com/GuSubeen/GuSubeen.github.io.git/

    # .git의 내용을 복사한 후 clone은 삭제한다.
    cp -rf GuSubeen.github.io/.git ./.git
    rm -rf GuSubeen.github.io

    # add + commit + push를 차례대로 실행한다.
    # git init
    git add .
    git commit -m "$1"
    git push origin main


    cd -
    ```
- deploy.sh 사용하기  
스크립트 파일을 사용하기 위해서는 powershell이 아닌 git bash에서 사용해야 한다.
  ```bash
  sh deploy.sh "commit msg"
  ```

## commit.sh 작성
deploy.sh로만 build + add + commit + push를 하면 dist 폴더만 push가 되어 블로그는 생성되나 추후에 수정이 필요한 경우나 다른 사람과 협업을 하는 경우라면 곤란해지게 된다.  
이를 해결하기 위해 commit.sh를 이용해서 전체문서 파일이 배포파일과 다른 브랜치에 저장되도록 한다.
- commit.sh 작성하기
  (개발자 황준일님의 TIL 블로그를 참고하였으며 링크는 참고부분에 있다.)
    ```sh
    #!/usr/bin/env sh

    # abort on errors
    set -e

    git add .
    git commit -m "$1"
    git push origin develop

    sh deploy.sh "$1"
    ```
- commit.sh 사용하기  
    ```sh
    sh commit.sh "commit msg"
    ```
참고로 commit.sh를 사용한다면 sh deploy.sh "commit msg"은 할 필요없다.

<br><br>

### 참고
- [개발자 황준일의 TIL : github page에 배포하기](https://junilhwang.github.io/TIL/Vuepress/Deploy/#_1-%E1%84%87%E1%85%A2%E1%84%91%E1%85%A9-%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%BC-%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)
- [coding apple : 만든 Vue 사이트 build & Github Pages로 배포하려면](https://codingapple.com/unit/vue-build-and-deploy-with-github-pages/)

<comment/>