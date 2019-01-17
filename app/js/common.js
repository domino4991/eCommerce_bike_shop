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
// tabs
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

  var wrapTabs = $('.wrap-tabs .catalog__wrap-products'); 

  wrapTabs.hide().filter(':first').show(); 
    
    // Клики по вкладкам.
    $('.catalog__views a').click(function(){
      wrapTabs.fadeIn(1000).hide(); 
      wrapTabs.filter(this.hash).show(); 
        $('.catalog__views a').removeClass('activeViews');
        $(this).addClass('activeViews');
        return false;
    }).filter(':first').click();
    

  var productInfoTab = $('.product__info .info-item');
  productInfoTab.hide().filter(':first').show();

  $('.product__info .info-list a').click(function(){
    productInfoTab.fadeIn(1000).hide(); 
    productInfoTab.filter(this.hash).show(); 
      $('.product__info .info-list a').removeClass('activeTab');
      $(this).addClass('activeTab');
      return false;
  }).filter(':first').click();

// tabs end

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

  $('.product__acc .product__category').on('click', function() {
    $('.product__acc .product__list').not($(this).next()).slideUp();
    $(this).next().slideToggle();
  })

  $('.catalog__acc .acc__caption').on('click', function() {
    $(this).next().slideToggle();
  })

// rating
  function rating(elem) {
    let ratingLine = $('.wrap-modelRating .rating__item');
    ratingLine.removeClass('activeStar');
    elem.addClass('activeStar');
    for(let i = 0, rLen = ratingLine.length; i < rLen; i++) {
      if($(ratingLine[i]).hasClass('activeStar')){
        break;
      } else {
        $(ratingLine[i]).addClass('activeStar');
      }
    }
  }

  $('.wrap-modelRating .rating__item').click(function(){
    let cur = $(this),
        ratingLine = $('.wrap-modelRating .rating__item');
    ratingLine.removeClass('click-activeStar');
    rating(cur);
    cur.addClass('click-activeStar');
  })

  $('.wrap-modelRating .rating__item')
      .mouseover(function(){
        let cur = $(this);
        rating(cur);
        cur.addClass('activeStar');
      })
      .mouseout(function(){
        let ratingLine = $('.wrap-modelRating .rating__item');
        ratingLine.addClass('activeStar');
        for(let i = 5; i > 0; i--) {
          if($(ratingLine[i]).hasClass('click-activeStar')) {
            break;
          } else {
            $(ratingLine[i]).removeClass('activeStar');
          }
        }
      })
// End

// Выбор цвета продукта
  $('.selected-color').on('click', function() {
    let attrSelectedColor = $('.selected-color');
    $(this).toggleClass('activeSelect--click')
    $('.select-color__list').toggleClass('activeSelect');
  })

  $('.select-color__item').on('click', function() {
    let delHtml = $('.selected-color'),
        attrColor = $(this).attr('data-color');
    delHtml.empty();
    $(this).clone().appendTo(delHtml);
    $('.selected-color').attr('data-color-selected', attrColor);
    $('.select-color__list').removeClass('activeSelect');
    delHtml.removeClass('activeSelect--click');
  })
  
// End

// Кнопки количества товаров
  var count = $('.qty__count').val();
  $('.qty__plus').on('click', function() {
    count++;
    $('.qty__count').val(count);
  })
  $('.qty__minus').on('click', function() {
    if(count == 1) {
      $('.qty__minus').attr('disabled');
    } else {
      count--;
      $('.qty__count').val(count);
    }
  })


// End
  $('.filter__inp').ionRangeSlider({
    type: 'double',
    min: 0,
    max: 10000,
    prefix: '$'
  });
});