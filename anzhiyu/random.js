var posts=["2025/08/12/懶人包下載專區/","2025/08/22/更新歷程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };