/*
 * main.js : ターミナルを再現
 */
var terminal = null;					// ターミナル画面をtextareaタグで再現

/*
 * 起動時の処理
 */
window.addEventListener("load", function(){
	// textareaのDOM取得
	terminal = document.getElementById("terminal");
	
	// ターミナル（textareaタグ）にフォーカス ==>カーソルが点滅する
	terminal.focus();
});