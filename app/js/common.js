$(function() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    nav: true
  })

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

  var featuredTabs = $('.featured__products .wrap__products'); 
  
  featuredTabs.hide().filter(':first').show(); 
    
    // Клики по вкладкам.
    $('.featured__products .tabs__list a').click(function(){
      featuredTabs.fadeIn(1000).hide(); 
      featuredTabs.filter(this.hash).show(); 
        $('.featured__products .tabs__list a').removeClass('activeTabs');
        $(this).addClass('activeTabs');
        return false;
    }).filter(':first').click();

    var widgetTabs = $('.widget__products .widget__wrap-products'); 
  
    widgetTabs.hide().filter(':first').show(); 
      
      // Клики по вкладкам.
      $('.widget__products .tabs__list a').click(function(){
        widgetTabs.fadeIn(1000).hide(); 
        widgetTabs.filter(this.hash).show(); 
          $('.widget__products .tabs__list a').removeClass('activeTabs');
          $(this).addClass('activeTabs');
          return false;
      }).filter(':first').click();

    let widgetItems = $('.widget');

    console.log(widgetItems.length);
    

    if (widgetItems.length < 3) {
      widgetItems.css({
        width: '30%'
      });
    } else if (widgetItems.length < 2) {
      widgetItems.css({
        width: '49%'
      });
    }

    // Клики по якорным ссылкам.
    // $('.tabs-target').click(function(){
    //     $('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();

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