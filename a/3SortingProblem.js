function add3_1Click(){
    //他の種類の問題の画面表示を消す
    document.getElementById("Sl").style.display = "none";
    document.getElementById("Tf").style.display = "none";
    document.getElementById("Bd").style.display = "none";
    document.getElementById("De").style.display = "none";

    //画面への表示
    document.getElementById("Cb").style.display = "block";

    target = document.getElementById("txt3_0");
    target.innerHTML = "並び替え問題";

    //配点
    target = document.getElementById("txt3_1");
    target.innerHTML = "配点";
    var box3_1 = document.getElementById("txtbox3_1");
    box3_1.style.display = "block";

    //並び替えの選択肢
    target = document.getElementById("txt3_2");
    target.innerHTML = "選択肢";
    var box3_2 = document.getElementById("txtbox3_2");
    box3_2.style.display = "block";
    
    //追加ボタン
    var button3_1 = document.getElementById("add3Button");
    button3_1.style.display = "block";

    //完了ボタン
    var button3_2 = document.getElementById("end3Button");
    button3_2.style.display = "block";

    //戻るボタン
    var button3_3 = document.getElementById("return3Button");
    button3_3.style.display = "block";
}

function add3_2Click(){
    //テキストエリアの追加
    var input3 = document.createElement('input');
    input3.id = 'text3' + selectnum;
    input3.style = "width:75%";
    var parent3 = document.getElementById('txtbox3_2');
    parent3.appendChild(input3);
    selectnum++;
}

function add3_3Click(){
    //完了ボタンを押すとテキストエリアに入力され、入力クリア、ディスプレイ非表示。
    let inputPoint3 = document.getElementById("txtbox3_1").value;
    Textarea.value += "[{Cb;;" + Id + ";" + inputPoint3 + ";";
    txtbox3_1.value = '';
    for(var j = 0; j < selectnum; j++){
        let inputText3 = document.getElementById("text3" + j).value;
        if(j != selectnum){
            Textarea.value += ",";
        }
        Textarea.value += inputText3;
        /*if(i = 0){
            inputFalseText.value = '';
        }*/ //ここを処理すると固まる
    }
    Textarea.value += "}]";
    selectnum = 0, Id++;
    document.getElementById("Cb").style.display = "none";
}

function add3_4Click(){
    document.getElementById("Cb").style.display = "none";
}