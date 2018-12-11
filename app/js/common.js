$(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    dotsContainer: '.dots',
    nav: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    items: 1,
    animateOut: 'zoomOut',
    animateIn: 'zoomIn',
    navSpeed: 2000,
    responsive: {
      800: {
        nav: true
      }
    }
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

  let target = $('.tour');
  let targetPos = target.offset().top;
  let winHeight = $(window).height();
  let scrollToElem = targetPos - winHeight;
  $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
      $('.scroll-top').css({
        display: 'block'
      });
    } else {
      $('.scroll-top').css({
            display: 'none'
      });
    }
  });
    let map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.842088, 74.621858],
            zoom: 16,
            dragging : true,
            touchZoom: true,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            geoclicker: false,
            zoomControl: true,
            fullscreenControl: true
        });

        DG.marker([42.842088, 74.621858]).addTo(map).bindPopup('Hiking Travel').bindLabel('Hiking Travel', {static: true});

    });
    
    $("#phone").mask("+999 (999) 999-999");
    new WOW().init();

    $('.events__item--front').on('click', function() {
      $(this).css({
        transform: 'rotateY(180deg)'
      });
      $(this).next().css({
        transform: 'rotateY(360deg)'
      })
    });

    $('.events__item--back').on('click', function() {
      $(this).css({
        transform: 'rotateY(180deg)'
      });
      $(this).prev().css({
        transform: 'rotateY(0deg)'
      })
    });
});