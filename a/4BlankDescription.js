function add4_1Click(){
    //他の種類の問題の画面表示を消す
    document.getElementById("Sl").style.display = "none";
    document.getElementById("Tf").style.display = "none";
    document.getElementById("Cb").style.display = "none";
    document.getElementById("De").style.display = "none";

    //画面への表示
    document.getElementById("Bd").style.display = "block";

    target = document.getElementById("txt4_0");
    target.innerHTML = "空欄記述問題";

    //配点
    target = document.getElementById("txt4_1");
    target.innerHTML = "配点";
    var box4_1 = document.getElementById("txtbox4_1");
    box4_1.style.display = "block";

    //完了ボタン  
    var button4_1 = document.getElementById("end4Button");
    button4_1.style.display = "block";

    //戻るボタン
    var button4_2 = document.getElementById("return4Button");
    button4_2.style.display = "block";
}

function add4_2Click(){
    //完了ボタンを押すとテキストエリアに入力され、入力クリア、ディスプレイ非表示。
    let inputPoint4 = document.getElementById("txtbox4_1").value;
    Textarea.value += "[{Bd;;" + Id + ";" + inputPoint4;
    txtbox4_1.value = '';
    Textarea.value += "}]";
    Id++;
    document.getElementById("Bd").style.display = "none";
}

function add4_3Click(){
    document.getElementById("Bd").style.display = "none";
}