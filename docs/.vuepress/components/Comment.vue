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
    
    utterances.setAttribute('issue-term', 'pathname'); 
    utterances.setAttribute('theme','github-light'); // theme 설정
    utterances.setAttribute('repo','kore3lab/kore3lab.github.io'); // 사용할 repository

    // script tag 삽입
    this.$refs.comment.appendChild(utterances);
  }
}
</script>

<style>
.utterances {
    max-width: 100% !important;
}
</style>