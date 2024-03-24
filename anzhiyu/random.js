var posts=["2024/03/24/角动量简介/","2023/12/31/一道外国不等式/","2024/03/20/如何提高你的注意力/","2024/03/23/双曲正弦函数/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };