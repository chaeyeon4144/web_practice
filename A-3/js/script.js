$(document).ready(function () {
  // alert("제이쿼리 실행")
  //   메뉴 슬라이드
  $(".gnb > li").hover(
    function () {
      console.log(this);
      $(this).find(".depth2").stop().slideDown();
    },
    function () {
      $(this).find(".depth2").stop().slideUp();
    }
  );
  //   비주얼 슬라이드 영역
  // .siblings() 형제요소
  // 이미지1번만 보이게 하는 코드
  $(".slide-all > li").eq(0).siblings().hide();
  // console,log($(".slide-all > li"));
  var slideI = 0;

  // 변수 선언 (sliderI)=0 같음이 아니라 0을 담아놈
  setInterval(function () {
    //   setinterval=함수명 즉 동작어 해라
    if (slideI < 2) {
      slideI++;
      // slideI ++(더해라)
    } else {
      slideI = 0;
    }
    $(".slide-all > li").eq(slideI).siblings().fadeOut();
    $(".slide-all > li").eq(slideI).fadeIn();

    // if else > ()조건을이면 해라 else는 아니면 엑스
  }, 3000);
  //   공지사항 탭메뉴
  $(".c1 h4").click(function () {
    // console.log("click");
    $(".c1 h4 , .c1 ul").removeClass("on");
    $(this).addClass("on").next("ul").addClass("on");
  });
  //   모달창 close
  $(".close").click(function () {
    $("#modal").fadeOut();
  });
  //   모달창 open
  $(".popup").click(function () {
    // console.log("click");
    $("#modal").fadeIn();
  });
});
