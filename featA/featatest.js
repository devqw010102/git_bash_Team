$(document).ready(function() {
    const tr_id = $('#id');  //아이디 입력창 지정
    const resultId = $('#resultId');  // 유효성 결과 표시부분
    const idReg = /^(?=.*[a-zA-Z])(?=.*\d)[a-z|A-Z\d]{5,20}$/; //id정규식
    function idCheck(){
      if(idReg.test(id.val())){
        resultId.html("");
        resultId.css("color", "");
        return true;
      } else {
        resultId.html("아이디는 영문자와 숫자포함 5자이상 20자 이내여야 합니다.");
        resultId.css("color", "#A50000");
        return false;
      }
    };
});