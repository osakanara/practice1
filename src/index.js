import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div 生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // 完了ボタン押下時
  completeButton.addEventListener("click", () => {
    // 完了ボタンと削除ボタンを削除する
    completeButton.remove();
    deleteButton.remove();
    // 戻すボタンを作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    div.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(div);
  });

  // 削除ボタン押下時
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素（div)を未完了リストから削除する
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
