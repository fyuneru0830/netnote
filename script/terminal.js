/*
 * main.js : ターミナルを再現
 */
var terminal = null;					// ターミナル画面をtextareaタグで再現
var screenWidth, screenHeight;	// ターミナルの幅と高さ（ブラウザの幅と高さ取得用）

/*
 * ターミナルのサイズをブラウザ画面いっぱいに設定する関数
 */
function setTerminal(){
	// ブラウザのウインドウサイズを取得
	let innerWidth =  window.innerWidth;
	let innerHeight = window.innerHeight;
	
	// textareaのサイズをウインドウにフィットさせる
	terminal.style.innerWidth  = innerWidth + "px";
	terminal.style.innerHeight = innerHeight + "px";
}

/*
 * 起動時の処理
 */
window.addEventListener("load", function(){
	// textareaのDOM取得
	terminal = document.getElementById("terminal");

	// ターミナルのサイズをブラウザ画面いっぱいに設定
	setTerminal();
	
	// ターミナル（textareaタグ）にフォーカス ==>カーソルが点滅する
	terminal.focus();
});

/*
 * ブラウザ画面をリサイズした際に再度ターミナルのサイズをブラウザ画面いっぱいにする関数
 */
window.addEventListener("resize", function(){
	setTerminal();
});