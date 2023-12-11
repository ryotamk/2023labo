function add1_1Click() {
    //他の種類の問題の画面表示を消す
    document.getElementById("Tf").style.display = "none";
    document.getElementById("Cb").style.display = "none";
    document.getElementById("Bd").style.display = "none";
    document.getElementById("De").style.display = "none";

    //画面への表示
    document.getElementById("Sl").style.display = "block";

    target = document.getElementById("txt1_0");
    target.innerHTML = "空欄選択問題";

    //配点
    target = document.getElementById("txt1_1");
    target.innerHTML = "配点";
    var box1_1 = document.getElementById("txtbox1_1");

    //正解の選択肢
    target = document.getElementById("txt1_2");
    target.innerHTML = "正解の選択肢";
    var box1_2 = document.getElementById("txtbox1_2");

    //惑わしの選択肢
    target = document.getElementById("txt1_3");
    target.innerHTML = "惑わしの選択肢";
    var box1_3 = document.getElementById("txtbox1_3");

    //追加ボタン
    var button1_1 = document.getElementById("add1Button");

    //完了ボタン
    var button1_2 = document.getElementById("end1Button");

    //戻るボタン
    var button1_3 = document.getElementById("return1Button");
}

function add1_2Click(){
    //惑わしのテキストエリアの追加
    var input1 = document.createElement('input');
    input1.id = "text1" + selectnum;
    input1.style = "width:75%";
    var parent1 = document.getElementById('txtbox1_3');
    parent1.appendChild(input1);
    selectnum++;
}

function add1_3Click(){//テキストエリアのクリア未完成、ラベルをどうするか。問題の消す場所によって、Idのずれが発生する。
    //完了ボタンを押すとテキストエリアに入力され、入力クリア、ディスプレイ非表示。
    let inputPoint1 = document.getElementById("txtbox1_1").value;
    let inputTrueText1 = document.getElementById("txtbox1_2").value;
    Textarea.value += "[{Sl;;" + Id + ";" + inputPoint1 + ";" + inputTrueText1;
    txtbox1_1.value = '', txtbox1_2.value = '';
    for(var j = 0; j < selectnum; j++){
        let inputFalseText1 = document.getElementById("text1" + j).value;
        if(j != selectnum){
            Textarea.value += ",";
        }
        Textarea.value += inputFalseText1;
    }
    Textarea.value += "}]";
    selectnum = 0, Id++;
    document.getElementById("Sl").style.display = "none";
}
function add1_4Click(){
    document.getElementById("Sl").style.display = "none";
}