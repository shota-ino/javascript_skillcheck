function hover() {
  // console.log("マウスオーバーによる色彩変更機能を実装");（問題1で試しに記述）

  // 発火したい要素が複数のため、事前にすべての要素をquerySelectorAllを用いて取得
  const articles = document.querySelectorAll(".article");
  // 取得した複数の要素にforEachを用いて、すべての要素においてイベント発火ができるように
  articles.forEach((article) => {
    // マウスオーバーしたときのイベントハンドラー
    article.addEventListener('mouseover', () => {
      console.log("マウスオーバー");
    });
    // マウスアウトしたときのイベントハンドラー、mouseoutを用いて設定
    article.addEventListener('mouseout', () => {
      console.log("マウスアウト");
    });
  });
}

window.addEventListener('load', hover);