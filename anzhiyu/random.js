var posts=["2025/08/12/hello-world/","2025/08/12/天堂Original/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };