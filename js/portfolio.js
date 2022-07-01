setTimeout(function(){
  alert('이 사이트는 크롬브라우저(1920x1000 해상도)에 최적화되어 있습니다.\n(This site is optimized for Chrome browser and 1920x1000 resolution.)');
},3400);

$(document).ready(function(){

  /* 스크롤 위치 표시 */
  $(window).scroll(function(){
    $("#txt1").text($(this).scrollTop());
  });

	var objDate = new Date();
	var year = objDate.getFullYear();
	var month = objDate.getMonth();
	var date = objDate.getDate();
	var day = objDate.getDay(); 
	var aryDay = ["일","월","화","수","목","금","토"]; 
	var fulldate = year + "." + (month+1) + "." + date + ".(" + aryDay[day] + ")";

	$(".header_date").text(fulldate);

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
      $(".top_button").css({display:"none"});

      if($(this).scrollTop()>250){
        $(".sd_design").stop(true,true).css({display:"block", transition:"all 0.3s easy-in"});
        $(".sd_design").removeClass("sd_active");
        $(".top_button").css({display:"block"});
      
        if($(this).scrollTop()>950){
      
          if($(this).scrollTop()>2100){

              if($(this).scrollTop()>3250){
          
                if($(this).scrollTop()>5650){

                  if($(this).scrollTop()>6800){

                    if($(this).scrollTop()>7950){
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
      $("html,body").stop(true,true).animate({scrollTop:"960"},"easeOutCirc");
    });
    $(".sd_d2").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"2110"},"easeOutCirc");
    });
    $(".sd_d3").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"3260"},"easeOutCirc");
    });
    $(".sd_d4").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"5560"},"easeOutCirc");
    });
    $(".sd_d5").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"6810"},"easeOutCirc");
    });
    $(".sd_d6").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"7960"},"easeOutCirc");
    });

    /* topbutton 스크롤 */
    $(".top_button").click(function(){
      $("html,body").stop(true,true).animate({scrollTop:"0"},800,"easeOutCirc");
    });


    /* 제목 스크롤 */

  $(window).scroll(function(){

    let wscroll= $(this).scrollTop();

    if(wscroll>=950){ 
      $("#main1 .main_title h2").css({"transform":"translateY(0px) scale(1.1)","opacity":"1"});
      $(".bottom_progress_in").css({"width":"15%"});
    }else{
      $("#main1 .main_title h2").css({"transform":"translateY(300%)","opacity":"0"});
      $(".bottom_progress_in").css({"width":"0%"});
    };

    if(wscroll>=2100){ 
      $("#main2 .main_title h2").css({"transform":"translateY(0px) scale(1.1)","opacity":"1"}); 
      $(".bottom_progress_in").css({"width":"30%"});
    }else{
      $("#main2 .main_title h2").css({"transform":"translateY(-300%)","opacity":"0"});
    };

    if(wscroll>=3250){ 
      $("#main3 .main_title h2").css({"transform":"translateX(0px) scale(1.1)","opacity":"1"}); 
      $(".bottom_progress_in").css({"width":"45%"});
    }else{
      $("#main3 .main_title h2").css({"transform":"translateX(150%)","opacity":"0"});
    };

    if(wscroll>=5650){ 
      $("#main4 .main_title h2").css({"transform":"translateX(0px) scale(1.1)","opacity":"1"});  
      $(".bottom_progress_in").css({"width":"60%"});
    }else{
      $("#main4 .main_title h2").css({"transform":"translateX(-150%)","opacity":"0"});
    };

    if(wscroll>=6800){ 
      $("#main5 .main_title").css({"transform":"translateY(0px) scale(1.1)","opacity":"1"}); 
      $(".bottom_progress_in").css({"width":"75%"});
    }else{
      $("#main5 .main_title").css({"transform":"translateY(300%)","opacity":"0"});
    };

    if(wscroll>=7950){ 
      $("#main6 .main_title h2").css({"transform":"translateY(0px) scale(1.1)","opacity":"1"}); 
      $(".bottom_progress_in").css({"width":"90%"});
    }else{
      $("#main6 .main_title h2").css({"transform":"translateY(-300%)","opacity":"0"});
    };

    if(wscroll>=8450){ 
      $(".bottom_progress_in").css({"width":"110%"});
    }else{
    };

    /*스크롤 시 컨텐츠 나타나는 효과*/ 
    /* main1 */
    if(wscroll>=1000){ 
        $("#main1 .profile_top").css({"transform":"translateX(0px)","opacity":"1"}); 
    }else{
        $("#main1 .profile_top").css({"transform":"translateX(100%)","opacity":"0"});
    };

    if(wscroll>=1200){ 
      $("#main1 .profile_bottom").css({"transform":"translateX(0px)","opacity":"1"});
      $("#main1 .skills_svg svg:nth-child(2) path").css({"display":"block"});
    }else{
      $("#main1 .profile_bottom").css({"transform":"translateX(-100%)","opacity":"0"});
      $("#main1 .skills_svg svg:nth-child(2) path").css({"display":"none"});
    };

     /* main2 */
    if(wscroll>=2150){ 
      $("#main2 .webdesign_tab_panel").css({"transform":"translateY(0px)","opacity":"1"});  
    }else{
      $("#main2 .webdesign_tab_panel").css({"transform":"translateY(200%)","opacity":"0"});
    };

    /* main4 */
    if(wscroll>=5700){ 
      $("#main4 .responsivepage").css({"opacity":"1"});  
    }else{
      $("#main4 .responsivepage").css({"opacity":"0"});
    };

     /* main5 */
    if(wscroll>=6850){ 
      $("#main5 .mobilepage, #main5 .page_info").css({"transform":"scale(1)","opacity":"1"});
    }else{
      $("#main5 .mobilepage, #main5 .page_info").css({"transform":"scale(0)","opacity":"0"});  
    };
  });


  /* 웹디자인 탭메뉴 */
 
  $(".webdesign_tab_panel>li:not(:first)").hide();

  $(".webdesign_tab>li").click(function(){
    $(".webdesign_tab>li").removeClass("webdesign_tab_selected"); 
    $(this).addClass("webdesign_tab_selected"); 
    $(".webdesign_tab_panel>li").hide(); 
    $($(this).find("a").attr("href")).stop(true,true).fadeIn(); 
  });

  $(".webdesign_tab>li:nth-of-type(1)").click(function(){
    $("#main2").stop(true,true).animate({backgroundColor:"rgba(106, 140, 105, 0.7)"},"easeOutCirc");
  });

  $(".webdesign_tab>li:nth-of-type(2)").click(function(){
    $("#main2").stop(true,true).animate({backgroundColor:"rgba(191, 103, 95, 0.6)"},"easeOutCirc");
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
  $("#main5 .mobilephone1 .page_visual_display, #webplanning_tab3_c4 .webplanning_content .page_visual_display").mouseenter(function(){
    $(this).css("background-position","100% 0");
  });
  $("#main5 .mobilephone1 .page_visual_display, #webplanning_tab3_c4 .webplanning_content .page_visual_display").mouseleave(function(){
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
    $(".responsive_mobile").stop(true,true).css({"transform":"scale(1.35)"},"easeOutCirc");
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
  $("#main5 .mobilepage .mobile_display .page_visual_display span a, #main5 .page_info .page_info_bottom .page_detail1 a, #webplanning_tab3_c4 .webplanning_content .page_visual_display span a, #webplanning_tab3_c4 .page_detail1 a").click(function(){
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

   let goldidx1=0; //기존이미지
   let gidx1=0; //선택되는 이미지
 
   function galleryImg(gidx1){ //gidx는 선택되는 이미지
     if(goldidx1!=gidx1){ //기존의 이미지와 선택된 이미지가 다를때...
       $("#webplanning_tab1 .thumbs li").eq(goldidx1).css({"opacity":0.3}); //기존의 썸네일 흐리게
       $("#webplanning_tab1 .thumbs li").eq(gidx1).css({"opacity":1}); //선택된 썸네일 선명하게
       $("#webplanning_tab1 .largeImg li").eq(goldidx1).css({"display":"none"}); //기존 이미지 사라짐
       $("#webplanning_tab1 .largeImg li").eq(gidx1).css({"display":"block"}); //선택된 이미지 나타남
     }
     goldidx1=gidx1; //선택된 이미지는 다시 기존이미지로 저장
   }
 
   //썸네일버튼 클릭시.....
   $("#webplanning_tab1 .thumbs li").click(function(){
     gidx1=$(this).index();
     galleryImg(gidx1);
   });
 
   //이전버튼 클릭시.....
   $("#webplanning_tab1 .left_btn").click(function(){
     gidx1--;
     if(gidx1<0){//선택한 이미지가 0일때 다시 맨뒤부터 다시 시작
       gidx1=8;
     }
     galleryImg(gidx1);
   });
 
   //다음버튼 클식시.....
   $("#webplanning_tab1 .right_btn").click(function(){
     gidx1++;
     if(gidx1>8){ // 선택한 이미지가 마지막일때 다시 맨처음부터 다시 시작
       gidx1=0;
     }
     galleryImg(gidx1);
   });


   let goldidx2=0; //기존이미지
   let gidx2=0; //선택되는 이미지
 
   function galleryImg2(gidx2){ //gidx는 선택되는 이미지
     if(goldidx2!=gidx2){ //기존의 이미지와 선택된 이미지가 다를때...
       $("#webplanning_tab2_c3 .thumbs li").eq(goldidx2).css({"opacity":0.3}); //기존의 썸네일 흐리게
       $("#webplanning_tab2_c3 .thumbs li").eq(gidx2).css({"opacity":1}); //선택된 썸네일 선명하게
       $("#webplanning_tab2_c3 .largeImg li").eq(goldidx2).css({"display":"none"}); //기존 이미지 사라짐
       $("#webplanning_tab2_c3 .largeImg li").eq(gidx2).css({"display":"block"}); //선택된 이미지 나타남
     }
     goldidx2=gidx2; //선택된 이미지는 다시 기존이미지로 저장
   }
 
   //썸네일버튼 클릭시.....
   $("#webplanning_tab2_c3 .thumbs li").click(function(){
     gidx2=$(this).index();
     galleryImg2(gidx2);
   });
 
   //이전버튼 클릭시.....
   $("#webplanning_tab2_c3 .left_btn").click(function(){
     gidx2--;
     if(gidx2<0){//선택한 이미지가 0일때 다시 맨뒤부터 다시 시작
       gidx2=11;
     }
     galleryImg2(gidx2);
   });
 
   //다음버튼 클식시.....
   $("#webplanning_tab2_c3 .right_btn").click(function(){
     gidx2++;
     if(gidx2>11){ // 선택한 이미지가 마지막일때 다시 맨처음부터 다시 시작
       gidx2=0;
     }
     galleryImg2(gidx2);
   });


   let goldidx3=0; //기존이미지
   let gidx3=0; //선택되는 이미지
 
   function galleryImg3(gidx3){ //gidx는 선택되는 이미지
     if(goldidx3!=gidx3){ //기존의 이미지와 선택된 이미지가 다를때...
       $("#webplanning_tab4_c1 .thumbs li").eq(goldidx3).css({"opacity":0.3}); //기존의 썸네일 흐리게
       $("#webplanning_tab4_c1 .thumbs li").eq(gidx3).css({"opacity":1}); //선택된 썸네일 선명하게
       $("#webplanning_tab4_c1 .largeImg li").eq(goldidx3).css({"display":"none"}); //기존 이미지 사라짐
       $("#webplanning_tab4_c1 .largeImg li").eq(gidx3).css({"display":"block"}); //선택된 이미지 나타남
     }
     goldidx3=gidx3; //선택된 이미지는 다시 기존이미지로 저장
   }
 
   //썸네일버튼 클릭시.....
   $("#webplanning_tab4_c1 .thumbs li").click(function(){
     gidx3=$(this).index();
     galleryImg3(gidx3);
   });
 
   //이전버튼 클릭시.....
   $("#webplanning_tab4_c1 .left_btn").click(function(){
     gidx3--;
     if(gidx3<0){//선택한 이미지가 0일때 다시 맨뒤부터 다시 시작
       gidx3=14;
     }
     galleryImg3(gidx3);
   });
 
   //다음버튼 클식시.....
   $("#webplanning_tab4_c1 .right_btn").click(function(){
     gidx3++;
     if(gidx3>14){ // 선택한 이미지가 마지막일때 다시 맨처음부터 다시 시작
       gidx3=0;
     }
     galleryImg3(gidx3);
   });


   let goldidx4=0; //기존이미지
   let gidx4=0; //선택되는 이미지
 
   function galleryImg4(gidx4){ //gidx는 선택되는 이미지
     if(goldidx4!=gidx4){ //기존의 이미지와 선택된 이미지가 다를때...
       $("#webplanning_tab3_c1 .thumbs li").eq(goldidx4).css({"opacity":0.3}); //기존의 썸네일 흐리게
       $("#webplanning_tab3_c1 .thumbs li").eq(gidx4).css({"opacity":1}); //선택된 썸네일 선명하게
       $("#webplanning_tab3_c1 .largeImg li").eq(goldidx4).css({"display":"none"}); //기존 이미지 사라짐
       $("#webplanning_tab3_c1 .largeImg li").eq(gidx4).css({"display":"block"}); //선택된 이미지 나타남
     }
     goldidx4=gidx4; //선택된 이미지는 다시 기존이미지로 저장
   }
 
   //썸네일버튼 클릭시.....
   $("#webplanning_tab3_c1 .thumbs li").click(function(){
     gidx4=$(this).index();
     galleryImg4(gidx4);
   });
 
   //이전버튼 클릭시.....
   $("#webplanning_tab3_c1 .left_btn").click(function(){
     gidx4--;
     if(gidx4<0){//선택한 이미지가 0일때 다시 맨뒤부터 다시 시작
       gidx4=11;
     }
     galleryImg4(gidx4);
   });
 
   //다음버튼 클식시.....
   $("#webplanning_tab3_c1 .right_btn").click(function(){
     gidx4++;
     if(gidx4>11){ // 선택한 이미지가 마지막일때 다시 맨처음부터 다시 시작
       gidx4=0;
     }
     galleryImg4(gidx4);
   });

   let goldidx5=0; //기존이미지
   let gidx5=0; //선택되는 이미지
 
   function galleryImg5(gidx5){ //gidx는 선택되는 이미지
     if(goldidx5!=gidx5){ //기존의 이미지와 선택된 이미지가 다를때...
       $("#webplanning_tab3_c3 .thumbs li").eq(goldidx5).css({"opacity":0.3}); //기존의 썸네일 흐리게
       $("#webplanning_tab3_c3 .thumbs li").eq(gidx5).css({"opacity":1}); //선택된 썸네일 선명하게
       $("#webplanning_tab3_c3 .largeImg li").eq(goldidx5).css({"display":"none"}); //기존 이미지 사라짐
       $("#webplanning_tab3_c3 .largeImg li").eq(gidx5).css({"display":"block"}); //선택된 이미지 나타남
     }
     goldidx5=gidx5; //선택된 이미지는 다시 기존이미지로 저장
   }
 
   //썸네일버튼 클릭시.....
   $("#webplanning_tab3_c3 .thumbs li").click(function(){
     gidx5=$(this).index();
     galleryImg5(gidx5);
   });
 
   //이전버튼 클릭시.....
   $("#webplanning_tab3_c3 .left_btn").click(function(){
     gidx5--;
     if(gidx5<0){//선택한 이미지가 0일때 다시 맨뒤부터 다시 시작
       gidx5=1;
     }
     galleryImg5(gidx5);
   });
 
   //다음버튼 클식시.....
   $("#webplanning_tab3_c3 .right_btn").click(function(){
     gidx5++;
     if(gidx5>1){ // 선택한 이미지가 마지막일때 다시 맨처음부터 다시 시작
       gidx5=0;
     }
     galleryImg5(gidx5);
   });


   let goldidx6=0; //기존이미지
   let gidx6=0; //선택되는 이미지
 
   function galleryImg6(gidx6){ //gidx는 선택되는 이미지
     if(goldidx6!=gidx6){ //기존의 이미지와 선택된 이미지가 다를때...
       $("#webplanning_tab3_c5 .thumbs li").eq(goldidx6).css({"opacity":0.3}); //기존의 썸네일 흐리게
       $("#webplanning_tab3_c5 .thumbs li").eq(gidx6).css({"opacity":1}); //선택된 썸네일 선명하게
       $("#webplanning_tab3_c5 .largeImg li").eq(goldidx6).css({"display":"none"}); //기존 이미지 사라짐
       $("#webplanning_tab3_c5 .largeImg li").eq(gidx6).css({"display":"block"}); //선택된 이미지 나타남
     }
     goldidx6=gidx6; //선택된 이미지는 다시 기존이미지로 저장
   }
 
   //썸네일버튼 클릭시.....
   $("#webplanning_tab3_c5 .thumbs li").click(function(){
     gidx6=$(this).index();
     galleryImg6(gidx6);
   });
 
   //이전버튼 클릭시.....
   $("#webplanning_tab3_c5 .left_btn").click(function(){
     gidx6--;
     if(gidx6<0){//선택한 이미지가 0일때 다시 맨뒤부터 다시 시작
       gidx6=11;
     }
     galleryImg6(gidx6);
   });
 
   //다음버튼 클식시.....
   $("#webplanning_tab3_c5 .right_btn").click(function(){
     gidx6++;
     if(gidx6>11){ // 선택한 이미지가 마지막일때 다시 맨처음부터 다시 시작
       gidx6=0;
     }
     galleryImg6(gidx6);
   });


     /* 웹기획 pdf*/
  //DETAIL 버튼 클릭시 모달창2 띄우기___________
  $("#webplanning_tab1_c1 .pdf_button a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".webplanning_tab1_c1_pdf").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });
  $("#webplanning_tab2_c1 .pdf_button a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".webplanning_tab2_c1_pdf").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });
  $("#webplanning_tab2_c2 .pdf_button a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".webplanning_tab2_c2_pdf").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });
  $("#webplanning_tab2_c3 .pdf_button a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".webplanning_tab2_c3_pdf").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });
  $("#webplanning_tab2_c4 .pdf_button a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".webplanning_tab2_c4_pdf").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });
  $("#webplanning_tab3_c1 .pdf_button a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".webplanning_tab3_c1_pdf").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });
  $("#webplanning_tab3_c2 .pdf_button a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".webplanning_tab3_c2_pdf").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });
  $("#webplanning_tab3_c3 .pdf_button a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".webplanning_tab3_c3_pdf").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });
  $("#webplanning_tab3_c5 .pdf_button a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".webplanning_tab3_c5_pdf").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });
  $("#webplanning_tab4_c1 .pdf_button a").click(function(){
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".webplanning_tab4_c1_pdf").fadeIn(); //w_pop index에 해당하는 팝업보이기
  });

  // 모바일 닫기
  $(".pdf_btn, .pdf_back").click(function(){
    $("html").css({overflowY:"scroll"});
    $(".webplanning_tab1_c1_pdf, .webplanning_tab2_c1_pdf, .webplanning_tab2_c2_pdf, .webplanning_tab2_c3_pdf, .webplanning_tab2_c4_pdf, .webplanning_tab3_c1_pdf, .webplanning_tab3_c2_pdf, .webplanning_tab3_c3_pdf, .webplanning_tab3_c5_pdf, .webplanning_tab4_c1_pdf").stop(true,true).fadeOut();
  });

  

  
  
});

