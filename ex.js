/*alert("JS정상동작중");*/
const catArray= ["전체보기", "기본", "두번째내용", "세번째내용"];
var num=4;/*나중에는 배열크기로 num초기화 */
    catArray[0]="전체보기";/*맨마지막버튼 */
    catArray[1]="기본";/*맨첫번째버튼 */
    catArray[2]="두번째내용";
    catArray[3]="세번째내용";
    function btn_gen() {// 버튼 객체 생성
        //alert("bbb"+catArray[0].toString()+"배열끝");
        alert("배열크기=>"+catArray.length);
        
        // for(var i=0; i<catArray.length; i++){
        //     $("#kiki").append("<input type='button' value='동적버튼생성"+catArray[i].value+"'/>");
        // }    
    }

/*$(document).ready(function (){// 버튼 객체 생성
    for(var i=0; i<4; i++){//console.log(catArray[i]);
        var str = catArray[i];
        // alert();
        var str_gen = "<input type='button' value='동적버튼생성" + console.log(str) + "'/>";
        $("#kiki").append(str_gen); 
    }   
});*/

/*$(document).ready(function (){// 버튼 객체 생성
    alert("bbb");

    for(var i=0; i<num; i++){
        $("#kiki").append("<input type='button' value='동적버튼생성"+catArray[i].value+"'/>");
    }    

});*/

/*window.onload(function catBtnCreate(){// 버튼 객체 생성
    for(var i=0; i<catArray.length; i++){
        $("#kiki").append("<input type='button' value='동적버튼생성_"+catArray[i].value+"'/>");
    }   
});*/
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

function plus_Bt_Click(){
    /* prompt(문자열, 초기값) */
    var input_value = prompt("추가할 카테고리 명을 입력해주세요.", "카테고리 명");
    /* if(name_value == true) else false */
    if(input_value) alert("추가된 카테고리는 "+input_value+"입니다.");
    else alert("카테고리 추가가 취소되었습니다.");

}