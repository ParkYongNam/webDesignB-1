$(function(){
 
  setInterval(
    function(){
        $(".swiper-slide").animate(
            {marginTop:"-300px"},
            400,
            function(){
        $(".swiper-slide img:first-child").appendTo($(".swiper-slide"))
        $(".swiper-slide").css("marginTop",0)
        }
        )
    },
  3000);


    // $(".tabli").click(function(){
    //     $(this).addClass("active").siblings().removeClass("active");
    // })


    $('.notice li:first').click(function(){
        $('.modal').addClass("active");
      });
      $('.btn').click(function(){
        $('.modal').removeClass("active");
      });
})
