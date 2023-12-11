function add5_1Click(){
      //他の種類の問題の画面表示を消す
      document.getElementById("Sl").style.display = "none";
      document.getElementById("Tf").style.display = "none";
      document.getElementById("Cb").style.display = "none";
      document.getElementById("Bd").style.display = "none";

    //画面への表示
    document.getElementById("De").style.display = "block";

    target = document.getElementById("txt5_0");
    target.innerHTML = "記述問題";

    //配点
    target = document.getElementById("txt5_1");
    target.innerHTML = "配点";
    var box5_1 = document.getElementById("txtbox5_1");
    box5_1.style.display = "block";

    //完了ボタン
    var button5_1 = document.getElementById("end5Button");
    button5_1.style.display = "block";

    //戻るボタン
    var button5_2 = document.getElementById("return5Button");
    button5_2.style.display = "block";
}

function add5_2Click(){
    //完了ボタンを押すとテキストエリアに入力され、入力クリア、ディスプレイ非表示。
    let inputPoint5 = document.getElementById("txtbox5_1").value;
    Textarea.value += "[{De;;" + Id + ";" + inputPoint5;
    txtbox5_1.value = '';
    Textarea.value += "}]";
    Id++;
    document.getElementById("De").style.display = "none";
}

function add5_3Click(){
    document.getElementById("De").style.display = "none";
}