$(function(){

    $('.slider__inner').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        infinity: true,
        autoplaySpeed: 4000,

    });
    
  
}); 
$(function(){
    $('.carousel__inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
              breakpoint: 1120,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4,
              }
            },
            {
                breakpoint: 1020,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 820,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 620,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 560,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1,
                }
              },
           
          ]
      });
      $('.mobile__menu').on('click', function(){
        $('.mobile__navigation').slideToggle();
    });
    $('.mobile__menu').on('click', function(){
        $('.mobile__navigation-max540').slideToggle();

    });

  });
  