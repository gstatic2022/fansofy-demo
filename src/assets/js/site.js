$(".dropdown-menu").click(function(event){
  event.stopPropagation(); 
});

$(document).ready(function(){
  $(".sign-in-btn").click(function(){
    $('.creater-popup').addClass("open-pop");
  });
  $(".close-creater").click(function(){
    $('.creater-popup').removeClass("open-pop");
  });
  
$(".update-profile").click(function(){
    $('.update-popup').addClass("open-pop");
  });
  $(".close-btn2").click(function(){
    $('.update-popup').removeClass("open-pop");
  });
  
  $(".add-wishlist").click(function(){
    $('.creater-popup').addClass("open-pop");
  });
  $(".cross-btn").click(function(){
    $('.creater-popup').removeClass("open-pop");
  });
  $(".add-wishlist1").click(function(){
    $('.creater-popup1').addClass("open-pop");
  });
  $(".cross-btn").click(function(){
    $('.creater-popup1').removeClass("open-pop");
  });

  $(".live-post").click(function(){
    $('.go-live-popup').addClass("open-pop");
  });
  $(".schedule-pd").click(function(){
    $('.schedule-popup').addClass("open-pop");
  });
  $(".cross-btn").click(function(){
    $('.go-live-popup').removeClass("open-pop");
  });
  $(".cross-btn").click(function(){
    $('.schedule-popup').removeClass("open-pop");
  });

   $(".add-new-po").click(function(){
    $('.creater-popup').addClass("open-pop");
  });
  $(".cross-btn").click(function(){
    $('.creater-popup').removeClass("open-pop");
  });

  $(".add-coins-pop").click(function(){
    $('.creater-popup').addClass("open-pop");
  });
  $(".cross-btn").click(function(){
    $('.creater-popup').removeClass("open-pop");
  });

$(".coins-popup").click(function(){
    $('.creater-popup').addClass("open-pop");
  });
  $(".close-btn").click(function(){
    $('.creater-popup').removeClass("open-pop");
  });
  
  $(".video-call").click(function(){
    $('.videocall-popup').addClass("open-pop");
  });
  $(".close-btn").click(function(){
    $('.videocall-popup').removeClass("open-pop");
  });
  
  $("#navigation").change(function()
{
    document.location.href = $(this).val();
});
  

  $(".attech-popup").click(function(){
    $('.attechment-popup').addClass("open-pop");
  });
  $(".close-btn").click(function(){
    $('.attechment-popup').removeClass("open-pop");
  });

  $(".error-popup").click(function(){
    $('.error-creater-popup').addClass("open-pop");
  });
  $(".cross-btn").click(function(){
    $('.error-creater-popup').removeClass("open-pop");
  });

  $(".success-popup").click(function(){
    $('.success-creater-popup').addClass("open-pop");
  });
  $(".cross-btn").click(function(){
    $('.success-creater-popup').removeClass("open-pop");
  });

  $(".request-call-popup").click(function(){
    $('.call-view-popup').addClass("open-pop");
  });
  $(".cross-btn").click(function(){
    $('.call-view-popup').removeClass("open-pop");
  });
  $(".paid-txt").click(function(){
    $('.setup-sub').addClass("to-right");
    $(this).addClass("active")
    $(".free-txt").removeClass("active");
    $('.setup-sub').removeClass("to-left");
  });
  $(".free-txt").click(function(){
    $('.setup-sub').addClass("to-left");
    $('.setup-sub').removeClass("to-right");
    $(this).addClass("active");
    $(".paid-txt").removeClass("active")
  });
  
  $(".sent-tip-open").click(function(){
    $('.send-tip-popup').addClass("open-pop");
  });
  $(".cross-btn").click(function(){
    $('.send-tip-popup').removeClass("open-pop");
  });
});

