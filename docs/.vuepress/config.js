module.exports = {
  base:'/', //css 에러방지
  locales:{// 언어설정
    '/': {
      lang: 'ko-KR' //한국어
    }
  },
  title: "kore3lab 기술블로그",//블로그 제목
  description: 'Hello, I am kore3lab techblog', //로딩중 뜨는 문장
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: '게시판', link: '/notice/', /*icon: 'reco-tongzhi'*/},
      { text: '블로그', link: '/blog/', /*icon: 'reco-document'*/},
      { text: '타임라인', link: '/timeline/', /*icon: 'reco-date'*/ },
      { text: '깃허브', link: 'https://github.com/kore3lab', icon: 'reco-github' }
    ],
    subSidebar:'auto', //오른쪽에 하위 사이드바 생성
    sidebar: require("./sidebar"),  
    
    //type: 'blog', //블로그 타입
    // 블로그설정
    blogConfig: {
      tag: {
        location: 2, // 네비게이션 메뉴에서 차지하는 위치, 왼쪽에서 4번째 
        text: '태그' // 기본 "태그"
      },
      category: {
        location: 4, // 네비게이션 메뉴에서 차지하는 위치, 왼쪽에서 2번째
        text: '작성자' // 기본 "카테고리"
      }
    },
    /*friendLink: [ //blog 타입일 때 표시됨
      {
        title: '',
        desc: '',
        email: '',
        link: ''
      },
    ],*/
    logo: '/logo.png', //네비게이션 로고
    noFoundPageByTencent: false, // 404 에러이미지 비활성화
    // 검색설정
    search: true,
    searchMaxSuggestions: 10,
    // sidebar: 'auto', //단일페이지 sidebar 자동생성 
    lastUpdated: 'Last Updated',// 마지막 업데이트 시간
    author: 'acornsoft', //기본작성자
    //authorAvatar: 'images/avatar.png', //작성자 프로필 이미지, 블로그 타입시 표시
    record: 'xxxx',//등록번호(footer)
    startYear: '2022'//프로젝트 기간(footer)

    /* 암호 (if your blog is private) // 블로그 비공개시 사용 
     keyPage: {
       keys: ['your password'],
       color: '#42b983',
       lineColor: '#42b983'
     },
    */
  },
  markdown: {
    lineNumbers: true // 코드에 번호붙음
  },
  plugins:[
    'vuepress-plugin-code-copy' // code 복사 플러그인
  ]
}  
