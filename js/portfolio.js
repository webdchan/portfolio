$(document).ready(function(){

  /* 스크롤 위치 표시 */
  $(window).scroll(function(){
    $("#txt1").text($(this).scrollTop());
  });

  /* ===== 현재 날짜 ===== */
	// Date() 클래스의 인스턴스생성
	var objDate = new Date();
	
	// 년 구하기
	var year = objDate.getFullYear();

	// 월 구하기
	var month = objDate.getMonth(); // 0(1월)부터 11(12월)까지의 정수값

	// 일 구하기
	var date = objDate.getDate(); // 날짜(일)를 나타내는 1에서 31까지의 정수

	// 요일 구하기
	var day = objDate.getDay(); // 0(일)부터 6(토)까지의 정수값
	var aryDay = ["일","월","화","수","목","금","토"]; // 배열을 이용해서 1개 이상의 데이터를 저장

	// 년, 월, 일, 요일 출력
	var fulldate = year + "." + (month+1) + "." + date + ".(" + aryDay[day] + ")";

	// 현재날짜
	$(".header_date").text(fulldate);

  /* 메인 메뉴 클릭 시 슬라이드 효과 */
  var $root = $('html, body');

  $('.top_nav>ul>li>a').click(function() {
      $root.stop(true,true).animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top}, 700, "easeInOutCubic"
          );
      return false;
  });

    /* ----- 탑버튼 및사이드 사각도형 스크롤 시 색상 변경  */
    $(window).scroll(function(){
      $(".sd_design").stop(true,true).css({display:"none"});
      $(".top_button").stop(true,true).css({display:"none"});

      if($(this).scrollTop()>250){
        $(".sd_design").stop(true,true).css({display:"block", transition:"all 0.3s easy-in"});
        $(".sd_design").removeClass("sd_active");
        $(".top_button").stop(true,true).css({display:"block"});
      
        if($(this).scrollTop()>700){
      
          if($(this).scrollTop()>1700){

              if($(this).scrollTop()>2600){
          
                if($(this).scrollTop()>4850){

                  if($(this).scrollTop()>5800){

                    if($(this).scrollTop()>6750){
                      $(".sd_design").removeClass("sd_active");
                      $(".sd_d6").toggleClass("sd_active");
                    }else{
                      $(".sd_design").removeClass("sd_active");
                      $(".sd_d5").toggleClass("sd_active");
                    }
                  
                  }else{
                    $(".sd_design").removeClass("sd_active");
                    $(".sd_d4").toggleClass("sd_active");
                  }
            
                }else{
                  $(".sd_design").removeClass("sd_active");
                  $(".sd_d3").toggleClass("sd_active");
                } 

              }else{
                $(".sd_design").removeClass("sd_active");
                $(".sd_d2").toggleClass("sd_active");
              }

            }else{
              $(".sd_design").removeClass("sd_active");
              $(".sd_d1").toggleClass("sd_active");
            }

          }else{
          }

      }else{
      }
    });

    /* nav 클릭 시 스크롤 */ 
    $(".sd_d1").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"950"},"easeOutCirc");
    });
    $(".sd_d2").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"1900"},"easeOutCirc");
    });
    $(".sd_d3").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"2800"},"easeOutCirc");
    });
    $(".sd_d4").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"5050"},"easeOutCirc");
    });
    $(".sd_d5").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"6050"},"easeOutCirc");
    });
    $(".sd_d6").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"7000"},"easeOutCirc");
    });

    /* topbutton 스크롤 */
    $(".top_button").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"0"},800,"easeOutCirc");
    });


    /* 프로필 스크롤 */

  $(window).scroll(function(){

    let wscroll= $(this).scrollTop();

    /* 제목 스크롤 */
    if(wscroll>=700){ 
      $("#main1 .main_title h2").css({"transform":"translateY(0px) scale(1.1)","opacity":"1"});  //밀어놓은 위치 설정취소(none)
      $(".bottom_progress_in").css({"width":"15%"});
    }else{
      $("#main1 .main_title h2").css({"transform":"translateY(300%)","opacity":"0"});
      $(".bottom_progress_in").css({"width":"0%"});
    };

    if(wscroll>=1700){ 
      $("#main2 .main_title h2").css({"transform":"translateY(0px) scale(1.1)","opacity":"1"});  //밀어놓은 위치 설정취소(none)
      $(".bottom_progress_in").css({"width":"30%"});
    }else{
      $("#main2 .main_title h2").css({"transform":"translateY(-300%)","opacity":"0"});
    };

    if(wscroll>=2600){ 
      $("#main3 .main_title h2").css({"transform":"translateX(0px) scale(1.1)","opacity":"1"});  //밀어놓은 위치 설정취소(none)
      $(".bottom_progress_in").css({"width":"45%"});
    }else{
      $("#main3 .main_title h2").css({"transform":"translateX(150%)","opacity":"0"});
    };

    if(wscroll>=4850){ 
      $("#main4 .main_title h2").css({"transform":"translateX(0px) scale(1.1)","opacity":"1"});  //밀어놓은 위치 설정취소(none)
      $(".bottom_progress_in").css({"width":"60%"});
    }else{
      $("#main4 .main_title h2").css({"transform":"translateX(-150%)","opacity":"0"});
    };

    if(wscroll>=5800){ 
      $("#main5 .main_title").css({"transform":"translateY(0px) scale(1.1)","opacity":"1"});  //밀어놓은 위치 설정취소(none)
      $(".bottom_progress_in").css({"width":"75%"});
    }else{
      $("#main5 .main_title").css({"transform":"translateY(300%)","opacity":"0"});
    };

    if(wscroll>=6750){ 
      $("#main6 .main_title h2").css({"transform":"translateY(0px) scale(1.1)","opacity":"1"});  //밀어놓은 위치 설정취소(none)
      $(".bottom_progress_in").css({"width":"90%"});
    }else{
      $("#main6 .main_title h2").css({"transform":"translateY(-300%)","opacity":"0"});
    };

    if(wscroll>=7400){ 
      $(".bottom_progress_in").css({"width":"110%"});
    }else{

    };

    /*프로필(scrolls1),교육이수영역(scrolls2)*/ 

    if(wscroll>=500){ 
        $(".profile_top").css({"transform":"translateX(0px)","opacity":"1"});  //밀어놓은 위치 설정취소(none)
    }else{
        $(".profile_top").css({"transform":"translateX(100%)","opacity":"0"});
    };

    if(wscroll>=700){ 
      $(".profile_bottom").css({"transform":"translateX(0px)","opacity":"1"});  //밀어놓은 위치 설정취소(none)
    }else{
      $(".profile_bottom").css({"transform":"translateX(-100%)","opacity":"0"});
    };

    /* main2 tabmenu panel 효과 */
    if(wscroll>=1250){ 
      $(".webdesign_tab_panel").css({"transform":"translateY(0px)","opacity":"1"});  //밀어놓은 위치 설정취소(none)
    }else{
      $(".webdesign_tab_panel").css({"transform":"translateY(200%)","opacity":"1"});
    };

    // main5 모바일 컨텐츠 효과
    if(wscroll>=5900){ 
      $("#main5 .mobilepage, #main5 .page_info").css({"transform":"scale(1)","opacity":"1"});
    }else{
      $("#main5 .mobilepage, #main5 .page_info").css({"transform":"scale(0)","opacity":"0"});  
    };
  });


  /* 웹디자인 탭메뉴 */
 
  $(".webdesign_tab_panel>li:not(:first)").hide();
  //첫번째를 제외한 나머지 내용

  $(".webdesign_tab>li").click(function(){
    $(".webdesign_tab>li").removeClass("webdesign_tab_selected"); //기존선택된 selected 클래스 삭제
    $(this).addClass("webdesign_tab_selected"); //새로 선택된 selected 클래스 생성
    $(".webdesign_tab_panel>li").hide(); //기존의 보여진 내용 숨기기
    $($(this).find("a").attr("href")).stop(true,true).fadeIn(); //새로 선택된 내용 href 연결된 내용 보여주기
  });

  $(".webdesign_tab>li:nth-of-type(1)").click(function(){
    $("#main2").stop(true,true).animate({backgroundColor:"#6A8C69"},"easeOutCirc");
  });

  $(".webdesign_tab>li:nth-of-type(2)").click(function(){
    $("#main2").stop(true,true).animate({backgroundColor:"#BF665E"},"easeOutCirc");
  });

  

  //DETAIL 버튼 클릭시 모달창1 띄우기___________
  $(".webdsign_tab1_graphic>ul>li").click(function(){
    
    w_pop=$(this).index(); //Detail 버튼 부모의 index
    $(".w_page span:nth-child(1)").text(w_pop+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".w_pop>li").eq(w_pop).show(); //w_pop index에 해당하는 팝업보이기
    $("#w_popup").fadeIn(); //검정배경
  });

  /*오른쪽 상단 버튼-다음보기*/
  $(".w_btn .right_btn").click(function(){

    $("#w_popup").scrollTop(0); /*스크롤 상단으로 올리기*/      
    if(w_pop<9){
       $(".w_pop>li").eq(w_pop).stop(true,true).fadeOut(); 
       w_pop++;   

       $(".w_page span:nth-child(1)").text(w_pop+1); /*페이지 번호*/
       $(".w_pop>li").eq(w_pop).stop(true,true).fadeIn();         
    }
 });

  /*오른쪽 상단 버튼-이전보기*/
 $(".w_btn .left_btn").click(function(){

    $("#w_popup").scrollTop(0); /*스크롤 상단으로 올리기*/
    if(w_pop>0){
       $(".w_pop>li").eq(w_pop).stop(true,true).fadeOut();
       w_pop--;         

       $(".w_page span:nth-child(1)").text(w_pop+1); /*페이지번호*/
       $(".w_pop>li").eq(w_pop).stop(true,true).fadeIn();
    }
 });

  /*오른쪽 상단 버튼-닫기*/
 $(".w_btn_close, .w_back").click(function(){
    $("html").css({overflowY:"scroll"});
    $("#w_popup").stop(true,true).fadeOut();
    $(".w_pop>li").stop(true,true).hide();
 }); 

  //DETAIL 버튼 클릭시 모달창2 띄우기___________
  $(".webdsign_tab2_uiux>ul>li").click(function(){
    
    w_pop2=$(this).index(); //Detail 버튼 부모의 index
    $(".w_page2 span:nth-child(1)").text(w_pop2+1); //오른쪽 상단 페이지 넘버
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".w_pop2>li").eq(w_pop2).show(); //w_pop index에 해당하는 팝업보이기
    $("#w_popup2").fadeIn(); //검정배경
  });

  /*오른쪽 상단 버튼-다음보기*/
  $(".w_btn2 .right_btn2").click(function(){

    $("#w_popup2").scrollTop(0); /*스크롤 상단으로 올리기*/      
    if(w_pop2<7){
       $(".w_pop2>li").eq(w_pop2).stop(true,true).fadeOut(); 
       w_pop2++;   
       $(".w_page2 span:nth-child(1)").text(w_pop2+1); /*페이지 번호*/
       $(".w_pop2>li").eq(w_pop2).stop(true,true).fadeIn();         
    }
 });

  /*오른쪽 상단 버튼-이전보기*/
 $(".w_btn2 .left_btn2").click(function(){

    $("#w_popup2").scrollTop(0); /*스크롤 상단으로 올리기*/
    if(w_pop2>0){
       $(".w_pop2>li").eq(w_pop2).stop(true,true).fadeOut();
       w_pop2--;         
       $(".w_page2 span:nth-child(1)").text(w_pop2+1); /*페이지번호*/
       $(".w_pop2>li").eq(w_pop2).stop(true,true).fadeIn();
    }
 });

  /*오른쪽 상단 버튼-닫기*/
 $(".w_btn_close2, .w_back2").click(function(){
    $("html").css({overflowY:"scroll"});
    $("#w_popup2").stop(true,true).fadeOut();
    $(".w_pop2>li").stop(true,true).hide();
 }); 


  /* 웹퍼블리싱 */

  //화면(오버시 화면 올라가게)_____________
  $(".page_visual_display").mouseenter(function(){
    $(this).css("background-position","0 100%");
  });
  $(".page_visual_display").mouseleave(function(){
    $(this).css("background-position","0 0");
  });

  //화면(오버시 옆으로 가게)
  $("#main5 .mobilephone1 .page_visual_display").mouseenter(function(){
    $(this).css("background-position","100% 0");
  });
  $("#main5 .mobilephone1 .page_visual_display").mouseleave(function(){
    $(this).css("background-position","0 0");
  });

  /* 반응형웹 */

  // 장비 크기 전환
  $("#main4 .responsive_pc, #main4 .page_info .page_detail1 span a").mouseenter(function(){
    $(".responsive_pc").stop(true,true).css({"transform":"scale(1.3)"},"easeOutCirc");
    $(".responsive_mobile, .responsive_tablet").stop(true,true).css({"opacity":"0.3"},"easeOutCirc");
  });
  $("#main4 .responsive_pc, #main4 .page_info .page_detail1 span a").mouseleave(function(){
    $(".responsive_pc").stop(true,true).css({"transform":"scale(1)"},"easeOutCirc");
    $(".responsive_mobile, .responsive_tablet").stop(true,true).css({"opacity":"1"},"easeOutCirc");
  });
  $("#main4 .responsive_mobile, #main4 .page_info .page_detail2 span:nth-of-type(1) a").mouseenter(function(){
    $(".responsive_mobile").stop(true,true).css({"transform":"scale(1.45)"},"easeOutCirc");
    $(".responsive_pc, .responsive_tablet").stop(true,true).css({"opacity":"0.3"},"easeOutCirc");
  });
  $("#main4 .responsive_mobile, #main4 .page_info .page_detail2 span:nth-of-type(1) a").mouseleave(function(){
    $(".responsive_mobile").stop(true,true).css({"transform":"scale(1)"},"easeOutCirc");
    $(".responsive_pc, .responsive_tablet").stop(true,true).css({"opacity":"1"},"easeOutCirc");
  });
  $("#main4 .responsive_tablet, #main4 .page_info .page_detail2 span:nth-of-type(2) a").mouseenter(function(){
    $(".responsive_tablet").stop(true,true).css({"transform":"scale(1.4)"},"easeOutCirc");
    $(".responsive_mobile, .responsive_pc").stop(true,true).css({"opacity":"0.3"},"easeOutCirc");
  });
  $("#main4 .responsive_tablet, #main4 .page_info .page_detail2 span:nth-of-type(2) a").mouseleave(function(){
    $(".responsive_tablet").stop(true,true).css({"transform":"scale(1)"},"easeOutCirc");
    $(".responsive_mobile, .responsive_pc").stop(true,true).css({"opacity":"1"},"easeOutCirc");
  });

  /* 반응형 모바일 목업*/
  //DETAIL 버튼 클릭시 모달창2 띄우기___________
  $(".responsive_mobile .page_visual_display a, #main4 .page_info .page_detail2 span:nth-of-type(1) a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".mockup_mobile1").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });

  // 반응형 모바일 닫기
  $(".mockup_mobile1 .w_btn_close3, .mockup_mobile1 .w_back3").click(function(){
    $("html").css({overflowY:"scroll"});
    $(".mockup_mobile1").stop(true,true).fadeOut();
    $(".mockup_mobile1 .w_pop3>li").stop(true,true).hide();
 });

 /* 반응형 태블렛 목업*/
  //DETAIL 버튼 클릭시 모달창2 띄우기___________
  $(".responsive_tablet .page_visual_display a, #main4 .page_info .page_detail2 span:nth-of-type(2) a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".mockup_tablet").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });

  // 반응형 태블렛 닫기
  $(".mockup_tablet .w_btn_close4, .mockup_tablet .w_back4").click(function(){
    $("html").css({overflowY:"scroll"});
    $(".mockup_tablet").stop(true,true).fadeOut();
    $(".mockup_tablet .w_pop4>li").stop(true,true).hide();
 });

 /* main5 모바일 비주얼 */

   //자동으로 슬라이드 함수생성
   function bannerAuto(){

    $(".mobilepage .mobile_visual ul").stop().animate({marginLeft:"-=280px"},1200,function(){
      $(".mobilepage .mobile_visual ul li:first-child").appendTo(".mobilepage .mobile_visual ul"); //첫번째 이미지 맨뒤로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });

  }
  bauto=setInterval(bannerAuto,2400);


     //다음보기
    $(".mobile_visual_btn_right").click(function(){
      clearInterval(bauto);
      $(".mobilepage .mobile_visual ul").stop().animate({marginLeft:"-=280px"},1200,function(){
        $(".mobilepage .mobile_visual ul li:first-child").appendTo(".mobilepage .mobile_visual ul"); //첫번째 이미지 맨뒤로 이동
        $(this).css({marginLeft:"0px"}); //최종목적지
      });
      bauto=setInterval(bannerAuto,2400);
    });
  
    //이전보기
    $(".mobile_visual_btn_left").click(function(){
      clearInterval(bauto);
      $(".mobilepage .mobile_visual ul").stop().animate({marginLeft:"+=280px"},1200,function(){
        $(".mobilepage .mobile_visual ul li:last-child").prependTo(".mobilepage .mobile_visual ul"); //첫번째 이미지 맨뒤로 이동
        $(this).css({marginLeft:"0px"}); //최종목적지
      });
      bauto=setInterval(bannerAuto,2400);
    });

    //마우스를 올리면 슬라이드 자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행...
    $(".mobilepage .mobile_visual").hover(function(){
      clearInterval(bauto);
    },function(){
      bauto=setInterval(bannerAuto,2400);
    });

    /* 모바일 목업*/
  //DETAIL 버튼 클릭시 모달창2 띄우기___________
  $("#main5 .mobilepage .mobile_display .page_visual_display span a, #main5 .page_info .page_info_bottom .page_detail1 a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".mockup_mobile2").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });

  // 모바일 닫기
  $(".mockup_mobile2 .w_btn_close5, .mockup_mobile2 .w_back5").click(function(){
    $("html").css({overflowY:"scroll"});
    $(".mockup_mobile2").stop(true,true).fadeOut();
    $(".mockup_mobile2 .w_pop5>li").stop(true,true).hide();
  });

  /* 웹기획 탭메뉴 */
 
  $(".webplanning_tab_panel>li:not(:first)").hide();
  //첫번째를 제외한 나머지 내용

  $(".webplanning_tab>li").click(function(){
    $(".webplanning_tab>li").removeClass("webplanning_tab_selected"); //기존선택된 selected 클래스 삭제
    $(this).addClass("webplanning_tab_selected"); //새로 선택된 selected 클래스 생성
    $(".webplanning_tab_panel>li").hide(); //기존의 보여진 내용 숨기기
    $($(this).find("a").attr("href")).stop(true,true).fadeIn(); //새로 선택된 내용 href 연결된 내용 보여주기
  });
  

  $(".webplanning_tab2_c_panel>li:not(:first)").hide();
  //첫번째를 제외한 나머지 내용

  $(".webplanning_tab2_c>li").click(function(){
    $(".webplanning_tab2_c>li").removeClass("webplanning_tab2_c_selected"); //기존선택된 selected 클래스 삭제
    $(this).addClass("webplanning_tab2_c_selected"); //새로 선택된 selected 클래스 생성
    $(".webplanning_tab2_c_panel>li").hide(); //기존의 보여진 내용 숨기기
    $($(this).find("a").attr("href")).stop(true,true).fadeIn(); //새로 선택된 내용 href 연결된 내용 보여주기
  });

  $(".webplanning_tab3_c_panel>li:not(:first)").hide();
  //첫번째를 제외한 나머지 내용

  $(".webplanning_tab3_c>li").click(function(){
    $(".webplanning_tab3_c>li").removeClass("webplanning_tab3_c_selected"); //기존선택된 selected 클래스 삭제
    $(this).addClass("webplanning_tab3_c_selected"); //새로 선택된 selected 클래스 생성
    $(".webplanning_tab3_c_panel>li").hide(); //기존의 보여진 내용 숨기기
    $($(this).find("a").attr("href")).stop(true,true).fadeIn(); //새로 선택된 내용 href 연결된 내용 보여주기
  });

   //썸네일,큰이미지,설명텍스트가 바뀌는 함수 만들기

   let goldidx=0; //기존이미지
   let gidx=0; //선택되는 이미지
 
   function galleryImg(gidx){ //gidx는 선택되는 이미지
 
     if(goldidx!=gidx){ //기존의 이미지와 선택된 이미지가 다를때...
 
       $(".thumbs li").eq(goldidx).css({"opacity":0.3}); //기존의 썸네일 흐리게
       $(".thumbs li").eq(gidx).css({"opacity":1}); //선택된 썸네일 선명하게
       $(".largeImg li").eq(goldidx).css({"display":"none"}); //기존 이미지 사라짐
       $(".largeImg li").eq(gidx).css({"display":"block"}); //선택된 이미지 나타남
     }
 
     goldidx=gidx; //선택된 이미지는 다시 기존이미지로 저장
 
   }
 
   //썸네일버튼 클릭시.....
 
   $(".thumbs li").click(function(){
     gidx=$(this).index();
     galleryImg(gidx);
   });
 
   //이전버튼 클릭시.....
   $(".left_btn").click(function(){
     gidx--;
     if(gidx<0){//선택한 이미지가 0일때 다시 맨뒤부터 다시 시작
       gidx=8;
     }
     galleryImg(gidx);
   });
 
   //다음버튼 클식시.....
   $(".right_btn").click(function(){
     gidx++;
     if(gidx>8){ // 선택한 이미지가 마지막일때 다시 맨처음부터 다시 시작
       gidx=0;
 
     }
     galleryImg(gidx);
   });

   $("#webplanning_tab1_c1_gallery").mouseenter(function(){
    $(this).css("background-position","0 100%");
  });
  $("#webplanning_tab1_c1_gallery").mouseleave(function(){
    $(this).css("background-position","0 0");
  });

  

  
  
});

