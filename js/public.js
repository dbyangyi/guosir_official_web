$(function(){
	$('.tab_head ul li').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $('.tab_head ul li').index($(this));
		$('.tab_content ul li.tab_content_li').eq(index).show().siblings().hide();
	});
	$('.tab_head1 ul li').hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $('.tab_head1 ul li').index($(this));
		$('.tab_content1 ul li.tab_content_li').eq(index).show().siblings().hide();
	});

	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		if(sct>500){
			$("#gotop").fadeIn();
		}else{
			$("#gotop").fadeOut();
		}
	});
	$("#gotop").click(function(){
		$("html,body").animate({scrollTop:"0px"},500);
	});
	
	//遍历bn
	$(".swiper-wrapper-bn .swiper-slide").each(function(){
	    var bg = $(this).find(".bnimg").data("background");
	    $(this).find(".bnimg").css({"background":'url('+bg+')'})
	});
	$(".whead i,.wapnavtop i").click(function(){
		$(".wapnav").toggleClass("wapnav_active");
		$(".wpnvbg").toggleClass("wpnvbg_active");
	})
	$(".wpnvbg").click(function(){
		$(".wapnav").removeClass("wapnav_active");
		$(".wpnvbg").removeClass("wpnvbg_active");
	})
	$(".wapprda").click(function(){
		$(this).siblings(".wpheadhide").slideToggle();
	})
	$(".wapprda1").click(function(){
		$(this).siblings(".wpheadhide1").slideToggle();
	})
	
	/*$(".fidbox_top").click(function(){
		$("html,body").animate({scrollTop:"0px"},500);
	});*/
	
	var swiper = new Swiper('.swiper-container-bn', {
		autoplay: true, 
      navigation: {
        nextEl: '.swiper-button-next-bn',
        prevEl: '.swiper-button-prev-bn',
      },
      //effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
    });
    var swiper = new Swiper('.swiper-container-pi3', {
      navigation: {
        nextEl: '.swiper-button-next-pi3',
        prevEl: '.swiper-button-prev-pi3',
      },
      loop: true,
    });
    
    if($(window).width() > 950){
		navPc();
	}else{
		navWap();
	}
	
	function navPc(){
		
	}
	
	function navWap(){
		
	}
	
})
