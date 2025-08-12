var posts=["2025/08/12/下載專區/","2025/08/12/天堂Original/","2025/08/12/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };