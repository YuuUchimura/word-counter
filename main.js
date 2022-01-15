// 各idの取得
const sampleForm = document.getElementById("sampleForm");
const textCounter = document.getElementById("textCounter");
const resetBtn = document.getElementById("resetBtn");
const iniDel = document.getElementById("iniDel");
const endDel = document.getElementById("endDel");

// 変数宣言
let textarea;
let countMax = 400;

// textCounterの初期値設定
textCounter.textContent = `あと ${countMax - sampleForm.value.length} 文字`

// sampleFormの処理
// 文字を打った際にcoutMaxから残りの文字数を引いていく
sampleForm.addEventListener("keyup", () => {
    // countにcountMaxからsampleForm内の文字数を引いた数を代入する
    let count = countMax - sampleForm.value.length;
    // 残りの文字数をリアルタイムで表示する
    textCounter.textContent = `あと ${count} 文字`;
    // textareaにsampleFormの値を入れる
    textarea = sampleForm.value;
});

resetBtn.addEventListener("click", () => {
    textCounter.textContent = `あと ${countMax} 文字`;
    // textarea = "";
});

// 頭文字削除
iniDel.addEventListener("click", () => {
    // sampleForm.addに記述したtextareaの頭文字を削除という意味
    textarea = textarea.slice(1);
    // 上をsampleForm.valueに入れる
    sampleForm.value = textarea;
    // 上の数を表示する
    textCounter.textContent = `あと ${countMax - sampleForm.value.length} 文字`
});

// 末尾削除
endDel.addEventListener("click", () => {
    // sampleForm.addに記述したtextareaの頭文字を削除という意味
    textarea = textarea.slice(0, -1);
    // 上をsampleForm.valueに入れる
    sampleForm.value = textarea;
    // 上の数を表示する
    textCounter.textContent = `あと ${countMax - sampleForm.value.length} 文字`
});
