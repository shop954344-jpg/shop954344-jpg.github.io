var posts=["uncategorized/懶人包下載專區/","uncategorized/更新歷程/","遊戲設置/遊戲設置/","uncategorized/遊戲特色/","uncategorized/武器介紹/","uncategorized/防具介紹/","uncategorized/娃娃介紹/","uncategorized/道具介紹/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };