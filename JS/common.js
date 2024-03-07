$(function(){
 
  setInterval(
    function(){
        $(".swiper-slide").animate(
            {marginLeft:"-1200px"},
            400,
            function(){
        $(".swiper-slide img:first-child").appendTo($(".swiper-slide"))
        $(".swiper-slide").css("marginLeft",0)
        }
        )
    },
  3000);


    $(".tabli").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })


    $('.notice li:first').click(function(){
        $('.modal').addClass("active");
      });
      $('.btn').click(function(){
        $('.modal').removeClass("active");
      });
})
