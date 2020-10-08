alert("JS정상동작중");
var categoryAry=new Array();
var num=4;
    categoryAry[0].value="기본";
    categoryAry[num-1].value="전체보기";

    function zz(){
        document.getElementById("ex").style.color="red";
        // 버튼 객체 생성
        var obj = document.createElement("<input type='button' value='동적버튼' />");
        // dv영역에 해당 객체 추가
        ex.appendChild(obj);    
    }
    /*
    function Create(){
        // 버튼 객체 생성
        var obj = document.createElement("<input type='button' value='확인"+cnt+" />");
        // 변수 증가
        cnt++;
        // dv영역에 해당 객체 추가
        dv.appendChild(obj);    }*/
    
    function plus_Bt_Click(){
        /* prompt(문자열, 초기값) */
        var input_value = prompt("추가할 카테고리 명을 입력해주세요.", "카테고리 명");
        /* if(name_value == true) else false */
        if(input_value) alert("추가된 카테고리는 "+input_value+"입니다.");
        else alert("카테고리 추가가 취소되었습니다.");

    }
    function arrangeBtn(array){

    }
/*
function createButton(context, func) {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "im a button";
    button.onclick = func;
    context.appendChild(button);
}

window.onload = function() {
    createButton(document.body, function() {
        highlight(this.parentNode.childNodes[1]);
        // Example of different context, copied function etc
        // createButton(this.parentNode, this.onclick);
    });
};*/