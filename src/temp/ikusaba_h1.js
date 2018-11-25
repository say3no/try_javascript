//shuffle
window.addEventListener('load', init);
function init() {
  var effectList = [];
  var elementList = document.querySelectorAll('.page h1 em,.shuffle');

  for (var i = 0; i < elementList.length; i++) {

    var element = elementList[i];
    element.dataset.index = i;

    // マウスオーバー時に再生する
    element.addEventListener('mouseenter', function () {
      effectList[+this.dataset.index].start();
    });

    // マウスアウト時に再生する
    element.addEventListener('mouseleave', function () {
      effectList[+this.dataset.index].start();
    });

    // インスタンスを取得する
    effectList[i] = new ShuffleText(element);

    // 初回を再生する
    effectList[i].start();
  }
}


$(function(){

  $(window).bind("load", function() {
    //splash
    $('.splashtext').css({opacity:'1'});
    setTimeout(function() {
      $('.splashtext').stop().animate({opacity:'0'},1000,function(){
        $('.splashtext').remove();
      });
    },2000);
    setTimeout(function() {
      $('.splashbg').stop().animate({opacity:'0'},1000,function(){
        $('#AXZsplash').remove();
      });
    },3000);
  });//

  //chswitch
  $('.chswitch li').click(function() {
    var num = $('.chswitch li').index(this);
    $('.chimg li').hide();
    $('.chimg li').eq(num).fadeIn();
    $('.chswitch li').removeClass('active');
    $(this).addClass('active')
  });

  //drawer
  var switchDrawer = function () {
      $('main,.AXZnav_smart,footer,.menubtn').toggleClass('open');
      if ($('.overlay')[0]) {
          $('.overlay').remove();
      } else {
          $('main').append('<div class="overlay"></div>');
      }
      return false;
  };
  $('.menubtn').on('touchstart click', switchDrawer);
  $('main,footer').on('touchstart click', '.overlay', switchDrawer);

  //scroll to top
  $('.pagetopbtn').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'fast');
    return false;
  });

  //bg random position
  var pospx = [
  '0',
  '128',
  '256',
  '384',
  '512',
  '640',
  '768',
  '896',
  '1024',
  '1152',
  '1280',
  '1408',
  '1536',
  '1664',
  '1792',
  '1920',
  '2048',
  '2176',
  '2304',
  '2432'
  ];
  var randomPos = pospx[Math.floor(Math.random() * pospx.length)];
  $('body').css({'background-position': randomPos + 'px ' + randomPos + 'px'});


});


