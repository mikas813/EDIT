//slider top
$(function(){

    $('.slider__inner').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        infinity: true,
        autoplaySpeed: 4000,

    });
    
  
}); 
//slider bottom
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

      //drop-down menu
    $('.mobile__menu').on('click', function(){
        $('.mobile__navigation').slideToggle();
    });
    $('.mobile__menu').on('click', function(){
        $('.mobile__navigation-max540').slideToggle();
    });
   
  $('.mobile__menu').on('click', function(){
    $('.menu__row').toggleClass('active');//by clicking add a 'class'

  });
  $('.mobile__menu').on('click', function(){
    $('..header .container .header__inner .mobile__menu .menu__row::after').toggleClass('active');//by clicking add a 'class'

  });


    //header search button
    $('.header__search-btn-img').on('click', function(){
      $('.search-area').toggleClass('text__area');
    });

    $('.header__search-btn-img').on('click', function(){
      $('.header__search-btn-img').toggleClass('active');//by clicking add a 'class'

    });
 


  });
  