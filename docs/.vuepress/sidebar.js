const getSidebar = require("./readChildren.js")

module.exports={
'/blog/': [
    {
      title: "샘플1",
      children: getSidebar("blog/sample1")// 구조: 'folder/mdfile','folder/mdfile2'          
    },
    {
      title: "샘플2",
      children: getSidebar("blog/sample2")
    },
    {
      title: "샘플3",
      collapsable: false, // 사이드바 펼치기
      children: getSidebar("blog/sample3")
    }
  ]
}