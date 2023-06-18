// 換圖輪播
function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });

$(document).ready(function (){
  //---漢堡按鈕---
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.navigation').toggleClass('show');
  });
// ---滑動捲軸到指定位置---
  $('.menu a').click(function (){
    var btn=$(this).attr('href');
    var pos=$(btn).offset();
    $('html,body').animate({scrollTop:pos.top},1000);
  });
// --滾動到top的位置--
  $('#gotop').click(function (){
    $('html,body').animate({scrollTop:0},1000);
  });
// --指定捲軸淡出淡入--
  $(window).scroll(function(){

    if($(this).scrollTop()>200 ){
      $('#gotop').fadeIn();
    }
      else{
        $('#gotop').fadeOut();
      }
    })
});
<!-- 啟用套件smoove -->
    $('.smoove').smoove({
        offset: '15%',
        // moveX: '100px',
        // moveY: '100px',
    });
    // $('.smoove-z').smoove({
    //     offset: '30%',
    //     moveY: '200px',
    //     moveZ: '-500px', /*+往前倒,-往後倒*/
    //     rotateX: '90deg',
    // });
