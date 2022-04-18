---
title: 댓글기능 추가하기
date: 2022-04-13
tags:
 - 커스터마이징
author: kore3
categories: kore3
---
utterance는 깃허브 계정만 있으면 댓글을 달 수 있으며, 댓글은 모두 연결된 github issue에 저장된다.

## 설치

### repo에 utterances 연동
블로그 계정에 utterances를 연동시킨다.
(vuepress의 경우 `utterances 설치하기`의 스크립트를 변형해서 사용해야 한다.)
- [계정에 연결시키기](https://github.com/apps/utterances)
- [utterances 설치하기](https://utteranc.es/?installation_id=23803856&setup_action=install)


### 댓글 컴포넌트 추가하기
.vuepress/components에 Comment.vue파일을 추가하고 아래의 코드를 작성한다.
```vue {16}
<template>
  <div ref="comment"></div>
</template>
<script>
export default {
  mounted() {
    // script tag 생성
    const utterances = document.createElement('script');
    utterances.type = 'text/javascript';
    utterances.async = true;
    utterances.crossorigin = 'anonymous';
    utterances.src = 'https://utteranc.es/client.js';
    
    utterances.setAttribute('issue-term', 'pathname'); // pathname|url|title|og:title 중 택 1
    utterances.setAttribute('theme','github-light'); // theme 설정
    utterances.setAttribute('repo','GuSubeen/GuSubeen.github.io'); // 사용할 repository

    // script tag 삽입
    this.$refs.comment.appendChild(utterances);
  }
}
</script>
```
### vuepress에 댓글 넣기
- 방법1: 하나하나 넣기  
  post마다 원하는 위치에(일반적으로 하단에) `<Comment />`를 기입한다.
  ```md
  # 포스트

  ## 포스트 소제목

  <Comment />
    ```

- 방법2: 모든 곳에 한번에 댓글 넣기  
.vuepress/theme 폴더 안에 Layout.vue 파일을 생성한다.
```vue
<template>
    <ParentLayout >
        <Comment slot="page-bottom" class="content"/>
    </ParentLayout>
</template>

<script>
    import ParentLayout from '@parent-theme/layouts/Layout.vue'
    import Comment from '../components/Comment'
    export default {
        components: {
            ParentLayout,
            Comment
        }
    }
</script>
```

## 문제발생
- **방법1의 경우...**   
  포스트 작성할 때마다 `<Comment />`를 표시해야 하는 불편함이 있다.  
  그러나 각 포스트에 달린 댓글은 독립적이다.
- **방법2의 경우...**   
  모든 포스트에 동일한 댓글이 표시된다.

<br><br>

### 출처
---
- [기억보다 기록을 : vuepress + utterances (블로그에 github 댓글 추가하기)](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-github-comment/#utterances-%E1%84%85%E1%85%B5%E1%86%BC%E1%84%8F%E1%85%B3-%E1%84%80%E1%85%A5%E1%86%AF-%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%86%B8-%E1%84%85%E1%85%B5%E1%84%91%E1%85%A9-%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC)
- [limdongjin : 뷰프레스 Disqus 댓글기능 구현하기 + layout 확장하기](https://limdongjin.github.io/vuejs/vuepress/layout-extend.html#disqus-%E1%84%83%E1%85%A2%E1%86%BA%E1%84%80%E1%85%B3%E1%86%AF-%E1%84%80%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC%E1%84%8B%E1%85%B3%E1%86%AF-component%E1%84%85%E1%85%A9-%E1%84%80%E1%85%AE%E1%84%92%E1%85%A7%E1%86%AB%E1%84%92%E1%85%A2%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A1)

<comment/>