---
title: 홈페이지 수정하기
date: 2022-04-09
tags:
 - 커스터마이징
author: 김네모
categories: 김네모
---
## 수정방법
docs의 리드미파일로 블로그의 홈페이지를 커스터마이징 할 수 있다.
```sh
---
home: true
heroText: MY Blog
tagline: vuepress를 이용한 기술블로그 입니다.
heroImage: images/main_icon.png # 메인이미지
heroImageStyle: { # 메인이미지 스타일 수정
  #maxWidth: '600px',
  maxHeight: '280px',
  #width: '100%',
  display: block,
  margin: '3rem auto 1.5rem', #'9rem auto 2rem',
  background: '#fff',
  borderRadius: '1rem',
}
bgImageStyle: {
  height: '450px'
}
isShowTitleInHome: false
actionText: 눌러주세요 # 수정완료

actionLink: /blog/getting-vuepress/ # 수정완료
features:
- title: 안녕하세요!
  details: ㅇㅇㅇ입니다.
- title: Blog for Vuepress
  details: Vuepress를 이용해 기술블로그를 만드는 과정을 기록했습니다.
- title: Vuepress
  details: Vuepress로 작성하였습니다.
---
```
### 출처

<comment/>