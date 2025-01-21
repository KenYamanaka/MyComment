// 発表者の名前のリスト
let speakers = ['千田さん',
  '花田さん',
  '原田さん',
  '山中さん',
  '加地さん',
　'後藤さん',
  '相本さん',              
  '加納さん',
  '貴田さん',
  '中里さん',
  '尾張さん',
  '重松さん'];
// 表示済みの発表者のインデックスを格納する配列
let shownSpeakers = [];

// ボタンをクリックした時の処理
document.getElementById('button').addEventListener('click', function () {
  // まだ表示されていない発表者のリストを作成する
  var availableSpeakers = speakers.filter(function (speaker) {
    return shownSpeakers.indexOf(speaker) === -1;
  });
  // すべての発表者が表示された場合は、shownSpeakersをリセットする
  if (availableSpeakers.length === 0) {
    shownSpeakers = [];
    availableSpeakers = speakers.slice();
  }
  // ランダムな名前を選択する
  let index = Math.floor(Math.random() * availableSpeakers.length);
  let speaker = availableSpeakers[index];
  // 名前を表示する
  document.getElementById('speaker').textContent = speaker;
  // 表示済みの発表者を追加する
  shownSpeakers.push(speaker);
});

const buttonReset = document.getElementById("btnReset");
// Resetボタンが押された時の処理
buttonReset.addEventListener("click", () => {
  // ページをリロードする
  location.reload();
});


setInterval(function () {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(bubble);
  const size = Math.floor(Math.random() * 40) + 10; // 10から50までのランダムな値を取得
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
}, 100);
