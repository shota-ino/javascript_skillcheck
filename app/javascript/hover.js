function hover() {
  // console.log("マウスオーバーによる色彩変更機能を実装");（問題1で試しに記述）

  // 発火したい要素が複数のため、事前にすべての要素をquerySelectorAllを用いて取得
  const articles = document.querySelectorAll(".article");
  // 取得した複数の要素にforEachを用いて、すべての要素においてイベント発火ができるように
  articles.forEach((article) => {
    // マウスオーバーしたときのイベントハンドラー
    article.addEventListener('mouseover', () => {
      // console.log("マウスオーバー");（問題2で試しに記述）
      // 属性の追加
      article.setAttribute("style", "background-color:#F1940B;");
    });
    // マウスアウトしたときのイベントハンドラー
    article.addEventListener('mouseout', () => {
      // console.log("マウスアウト");（問題3で試しに記述）
      // 属性の削除
      article.removeAttribute("style", "background-color:#F1940B;");
    });
  });
}
// 非同期で投稿した要素へも適用されるように
// 「1秒に1回」、関数hoverが読み込まれるように
setInterval(hover, 1000);

// 「ページが読み込まれたら」ではなく
// window.addEventListener('load', hover);