$(function(){

    function sliderSet(slickfor,slicknav){
    slickfor.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor:slicknav,
        autoplay:true
    });
    slicknav.slick({
        slidesToShow: 4,
        slidesToScroll:1,
        focusOnSelect: true,
        dots: false,
        arrows:false,
        infinite:true,
        asNavFor: slickfor
    });
    }

    $('.slide-box').each(function(i,el){
    i+=1; 
    var slickfor = $(el).find('.slider-for').addClass('for'+ i)
    var slicknav = $(el).find('.slider-nav').addClass('nav'+ i)
    sliderSet(slickfor,slicknav);
    })

    })