const fs = require("fs"); //파일시스템 처리를 위한 fs 모듈
const path = require("path"); // 파일의 경로를 다루기 위한 path 모듈

//사이드바 목록 자동화
function getSidebar(folder) {
    const extension = [".md"];
  
    const files = fs
      .readdirSync(path.join(`${__dirname}/../${folder}`))
      .filter(
        (item) =>
          item.toLowerCase() != "readme.md" &&
          fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
          extension.includes(path.extname(item))
      );   
  // 상위경로(blog) 제거
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

module.exports = getSidebar;