function add2_1Click(){
    //他の種類の問題の画面表示を消す
    document.getElementById("Sl").style.display = "none";
    document.getElementById("Cb").style.display = "none";
    document.getElementById("Bd").style.display = "none";
    document.getElementById("De").style.display = "none";

    //画面への表示
    document.getElementById("Tf").style.display = "block";

    target = document.getElementById("txt2_0");
    target.innerHTML = "○×問題";

    //配点
    target = document.getElementById("txt2_1");
    target.innerHTML = "配点";
    var box2_1 = document.getElementById("txtbox2_1");
    box2_1.style.display = "block";

    //完了ボタン
    var button2_1 = document.getElementById("end2Button");
    button2_1.style.display = "block";

    //戻るボタン
    var button2_2 = document.getElementById("return2Button");
    button2_2.style.display = "block";
}

function add2_2Click(){//ラベルをどうするか。完了を押した後に問題を消した場合。Idのずれが発生する。
    //完了ボタンを押すとテキストエリアに入力され、入力クリア、ディスプレイ非表示。
    let inputPoint2 = document.getElementById("txtbox2_1").value;
    Textarea.value += "[{Tf;;" + Id + ";" + inputPoint2;
    txtbox2_1.value = '';
    Textarea.value += "}]";
    Id++;
    document.getElementById("Tf").style.display = "none";
}

function add2_3Click(){
    document.getElementById("Tf").style.display = "none";
}