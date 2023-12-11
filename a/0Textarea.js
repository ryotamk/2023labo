//テキストエリアの自動高さ調整
window.addEventListener("DOMContentLoaded", () => {// textareaタグを全て取得
    const textareaEls = document.querySelectorAll("Textarea");
    textareaEls.forEach((textareaEl) => {// デフォルト値としてスタイル属性を付与
        textareaEl.setAttribute("style", `height: ${textareaEl.scrollHeight}px;`);// inputイベントが発生するたびに関数呼び出し
        textareaEl.addEventListener("input", setTextareaHeight);
    });
    function setTextareaHeight(){
        this.style.height = "auto";
        this.style.height = `${this.scrollHeight}px`;
    }
});
var Id = 1, selectnum = 0, Small = 1, Medium = 1 , Big = 2;