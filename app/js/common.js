$(function() {
  // $('.owl-carousel').owlCarousel({
    
  // })

  $('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.nav').toggleClass('nav-active');
    $('body').toggleClass('fixed');
  })

  $('.nav__link').on('click', function() {
    $('.hamburger').removeClass('is-active');
    $('.nav').removeClass('nav-active');
    $('body').removeClass('fixed');
  })

  $('.addWishlist').on('click', function(){
    $('.fa-wish').toggleClass('activeWish');
  })

  $('.tabs__link').on('click', function(){
    $(this).toggleClass('activeTabs');
  })

  $('.flowing-scroll').on( 'click', function(){ 
  let el = $(this);
  let dest = el.attr('href'); // получаем направление
  if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
          scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 1000 // скорость прокрутки
      );
  }
  return false;
  });

  // let target = $('.tour');
  // let targetPos = target.offset().top;
  // let winHeight = $(window).height();
  // let scrollToElem = targetPos - winHeight;
  // $(window).scroll(function(){
  //   var winScrollTop = $(this).scrollTop();
  //   if(winScrollTop > scrollToElem){
  //     $('.scroll-top').css({
  //       display: 'block'
  //     });
  //   } else {
  //     $('.scroll-top').css({
  //           display: 'none'
  //     });
  //   }
  // });
    
    // $("#phone").mask("+999 (999) 999-999");
    // new WOW().init();
});