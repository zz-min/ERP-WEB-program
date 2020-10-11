/*alert("JS정상동작중");*/
const catArray= ["전체보기", "기본", "두번째내용", "세번째내용"];
var num=4;/*나중에는 배열크기로 num초기화 */
    catArray[0]="전체보기";/*맨마지막버튼 */
    catArray[1]="기본";/*맨첫번째버튼 */
    catArray[2]="두번째내용";
    catArray[3]="세번째내용";

    function btnStyle(str){
        str.style.backgroundColor="#008CBA";
        str.style.color="white";
        str.style.width="450px";
        str.style.padding="50px";
        str.style.margin="30px";
        str.style.fontSize="80px";
    }

    function btnCreate() {// 버튼 객체 생성
        //alert("bbb"+catArray[0].toString()+"배열끝");
        //alert("배열크기=>"+catArray.length);
        $(".btnNew").empty();
        for(var i=1; i<catArray.length; i++){
            var j=i+1;
             $(".btnNew").append("<input type='button' value='"+catArray[i].toString()+"' id='btn"+j+"' onclick='button_click("+j+");'/>");
             
            var str = document.getElementById("btn"+j);
            btnStyle(str);
         }    

         $(".btnNew").append("<input type='button' value='"+catArray[0].toString()+"' id='btn1' onclick='button_click(1);'/>");         
         btnStyle(btn1);
    }  
        function button_click(number){
            alert(number+"번째 버튼클릭함수작동중");
            //window.open('btn'+number+'_page.html');
            location.href='btn'+number+'_page.html';
        }

        //현재탭으로 열기  onClick="location.href='http://www.daum.net'"
        //새로운탭으로 열기 onClick="window.open('http://www.daum.net')"

    
    function plus_Bt_Click(){
        /* prompt(문자열, 초기값) */
        var input_value = prompt("추가할 카테고리 명을 입력해주세요.", "카테고리 명");
        /* if(name_value == true) else false 
        if(input_value) alert("추가된 카테고리는 "+input_value+"입니다.");
        else alert("카테고리 추가가 취소되었습니다.");*/

        var num=catArray.length;
        catArray[num]=input_value;
        btnCreate();
    }