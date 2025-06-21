// btnというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const Text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
  Text.textContent = 'ボタンをクリックしました';
});