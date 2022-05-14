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
  // button(戻す)タグ生成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";

  // 完了ボタン押下時
  completeButton.addEventListener("click", () => {
    // 完了ボタンと削除ボタンを削除する
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstChild.innerText;
    const li = document.createElement("li");
    li.innerText = text;

    //addTargetのdiv以下を初期化
    addTarget.textContent = null;
    // divタグの子要素に各要素を入れる
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // 完了リストに要素を追加する
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン押下時
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素（div)を未完了リストから削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // 戻すボタン押下時
  backButton.addEventListener("click", () => {
    // 完了リストから要素を削除する
    deleteFromeCompleteList(backButton.parentNode);
    // 未完了リストに追加する要素
    const backTarget = backButton.parentNode;
    const text = backTarget.firstChild.innerText;
    const li = document.createElement("li");
    li.innerText = text;
    // backTargetの初期化
    backTarget.textContent = null;
    // divの子要素に各要素を追加する
    backTarget.appendChild(li);
    backTarget.appendChild(completeButton);
    backTarget.appendChild(deleteButton);

    // 未完了リストに要素を追加する
    document.getElementById("incomplete-list").appendChild(backTarget);
  });

  // divタグの子要素に各要素を入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 完了リストから要素を削除する関数
const deleteFromeCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
