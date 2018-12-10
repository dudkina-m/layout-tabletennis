$(document).ready(function () {
  var touch = $('#touch-navbox'),
    nav = $('.nav'),
    touchCatalog = $('#touch-catalog-box'),
    catalog = $('.catalog');
  $(touch).on('click', function (e) {
    e.preventDefault();
    nav.slideToggle();
  });
  $(touchCatalog).on('click', function (e) {
    e.preventDefault();
    catalog.slideToggle();
  });
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 1199 && nav.is(':hidden')) {
      nav.removeAttr('style');
    }
    if (w > 1199 && catalog.is(':hidden')) {
      catalog.removeAttr('style');
    }
  });

  if ($('.basket__next').length > 0) {
    basketBtns();
  }

  $('#mobTabs').change(function (e) {
    $('.tab-pane').removeClass('in active');
    $(e.target.value).addClass('in active');
  });

  $('#editPersonal').click(function () {
    $(this).parents('.personal__content').toggleClass('edit');
    if ($(this).text() === 'Сохранить') {
      $(this).text('Изменить данные');
    } else {
      $(this).text('Сохранить');
    }
  });

  $('.inc').click(function () {
    const curr = $($(this).siblings('input')[0]);
    let val = curr.val();
    curr.val(+val + 1);
  });

  $('.dec').click(function () {
    const curr = $($(this).siblings('input')[0]);
    let val = curr.val();
    if (+val > 1)
      curr.val(+val - 1);
  });

  $('.menu li a').click(function () {
    $(this).parent().siblings().removeClass('active').find('ul').hide(300);
    if ($(this).next('ul').is(':hidden')) {
      $(this).next('ul').show(300).parent().addClass('active');
    } else {
      $(this).next('ul').hide(300).parent().removeClass('active');
    }
    if ($(this).siblings().length) {
      return false;
    }
  });

  $('.slider').owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    navText: [],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    //loop: true,
    smartSpeed: 400
  });

  $('.products-carousel[data-items="4"]').owlCarousel({
    items: 4,
    nav: false,
    dots: true,
    navText: [],
    autoplay: false,
    autoplayHoverPause: true,
    loop: true,
    smartSpeed: 400,
    responsive: {
      0: {
        items: 1
      },
      580: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  $('.basket__next').click(function () {
    //$(active).parent('.active').addClass('completed');
    let active = $('.basket__steps li.active + li a')[0];
    $('.basket__steps li').removeClass('active');
    $(active).parent('li').addClass('active');
    basketBtns();
  });

  $('.products-carousel[data-items="3"]').owlCarousel({
    items: 3,
    nav: false,
    dots: true,
    navText: [],
    autoplay: false,
    autoplayHoverPause: true,
    loop: true,
    smartSpeed: 400,
    responsive: {
      0: {
        items: 1
      },
      580: {
        items: 2
      },
      992: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });

  $('.fotoblock__thumbnails').owlCarousel({
    items: 5,
    nav: false,
    dots: false
  });

  $('.stock__slider').owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    loop: true,
    smartSpeed: 1000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoHeight: true,
    transitionStyle: 'fade',
    autoplay: true
  });

  $('.brands').owlCarousel({
    items: 6,
    nav: false,
    dots: false,
    loop: true,
    smartSpeed: 1000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoHeight: true,
    transitionStyle: 'fade',
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true
      },
      768: {
        items: 4,
        nav: true
      },
      1000: {
        items: 6,
        nav: true,
        loop: false
      }
    }
  });

  $('.fotoblock__link').click(function () {
    const src = $(this).attr('data-src');
    $('.single_image').attr('href', src);
    $('.single_image img').attr('src', src);
  });

  $('.fotoblock > a').fancybox({
    padding: 5,
    width: 'auto',
    height: 'auto',
    autoSize: false,
    loop: false,
    nextEffect: 'elastic',
    prevEffect: 'elastic'
  });

  $('.tab-box').eq($('ul.tabs-menu li.active').index()).show();
  $('ul.tabs-menu').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active').parent().parent().find('.tab-box').eq($(this).index()).fadeIn(150).siblings('.tab-box').hide();
  });

  var btnToggle = '<div class=\'btn btn-sm btn-blue btn-toggle\'>Развернуть</div>';
  if ($('.tab-box').find('.news').length > 3) {
    $('.tab-box').find('.news:gt(1)').hide();
    $('.tab-box').append(btnToggle);
  }

  $('.btn-toggle').click(function () {
    if ($(this).hasClass('toggleUp')) {
      $(this).removeClass('toggleUp').text('Развернуть').parents('.tab-box').find('.news:gt(1)').slideUp(150);
    } else {
      $(this).addClass('toggleUp').text('Свернуть').parents('.tab-box').find('.news').slideDown(150);
    }
  });

  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 100000,
    values: [0, 100000],
    slide: function (event, ui) {
      $('#amount').val(+ui.values[0]);
      $('#amount2').val(+ui.values[1]);
    }
  });

  $('#amount').val(+$('#slider-range').slider('values', 0));

  $('#amount2').val(+$('#slider-range').slider('values', 1));

});
$(window).load(function () {
  h2 = 100;
  $('.products-carousel .shk-item').each(function (index, el) {
    h1 = $(el).innerHeight();
    if (h2 < h1) {
      h2 = h1;
    }
  });
  $('.products-carousel .shk-item').innerHeight(h2);
  $('.products-carousel .shk-item-text').css({
    'position': 'absolute',
    'bottom': '1px',
    'width': '193px'
  });
  h2 = 100;
  $('#products .shk-item').each(function (index, el) {
    h1 = $(el).innerHeight();
    if (h2 < h1) {
      h2 = h1;
    }
  });
  $('#products .shk-item').innerHeight(h2);
  $('#products .shk-item-text').css({
    'position': 'absolute',
    'bottom': '1px',
    'width': '193px'
  });
  $('.price_left .shk-price').each(function (index, el) {
    h1 = $(el).text();
    h1 = h1.length;
    if (h1 == '7') {
      $(el).parent().css('float', 'left');
      $(el).parent().parent().addClass('hrte');
    }
  });
  $('.price_left .shk-price').each(function (index, el) {
    h1 = $(el).text();
    h1 = h1.length;
    if (h1 == '7') {
      $(el).parent().css('float', 'left');
      $(el).parent().parent().addClass('hrte');
    }
  });
  $('html').animate({
    opacity: 1
  }, 1000);
});

function basketBtns() {
  let active = $('.basket__steps li.active a')[0];
  const id = $(active).attr('href');
  switch (id) {
    case '#basket': {
      $('.basket__next').hide();
      $('#toDelivery').show();

      break;
    }
    case '#delivery': {
      $('.basket__next').hide();
      $('#toContacts').show();
      break;
    }
    case '#contacts': {
      $('.basket__next').hide();
      $('#toPays').show();
      break;
    }
    case '#pay': {
      $('.basket__next').hide();
      $('#order').show();
      break;
    }
  }
}