
//내브열기

$(function() {
  $('#openNav').click(function() {
    $('#sd-menu').toggleClass('tgnav');
    $('.filter-black').fadeToggle(220);
  });
})

//외부클릭하면 내브닫기

$(function() {
  $('.filter-black').click(function() {
    $('#sd-menu').toggleClass('tgnav');
    $('.filter-black').fadeToggle(220);
    $('.prod + ul').slideUp(150);
    $('.prod > span').removeClass('spantoggle');
    $('.proicon1 + ul').slideUp(150);
    $('.proicon2 + ul').slideUp(150);
    $('.proicon3 + ul').slideUp(150);
    $('.proicon4 + ul').slideUp(150);
    $('.proicon1 > span').removeClass('spantoggle');
    $('.proicon2 > span').removeClass('spantoggle');
    $('.proicon3 > span').removeClass('spantoggle');
    $('.proicon4 > span').removeClass('spantoggle');
  });
})

//서치바열고닫기

$(function() {
  $('#srchicon').click(function() {
    $('.srch').slideToggle(150);
    document.getElementById("img").src = "https://www.casa.co.kr/images/common/btn_top_search_close.png";
  });
})

//언어설정 열고닫기
/*
$(function() {
  $('#langicon').click(function() {
    $('#langpopup').slideToggle(100, 'linear');
  });
})
*/

//내비여닫기 큰거
$(function() {
  var proicon = $('.proicon')
  $('.prod').click(function() {
    $('.prod + ul').slideToggle(150);
    $('.prod > span').toggleClass('spantoggle');
  });
})

//내비여닫기 작은거
$(function() {
  var proicon = $('.proicon')
  $('.proicon1').click(function() {
    $('.proicon1 + ul').slideToggle(150);
    $('.proicon1 > span').toggleClass('spantoggle');
  });
})

$(function() {
  var proicon = $('.proicon')
  $('.proicon2').click(function() {
    $('.proicon2 + ul').slideToggle(150);
    $('.proicon2 > span').toggleClass('spantoggle');
  });
})

$(function() {
  var proicon = $('.proicon')
  $('.proicon3').click(function() {
    $('.proicon3 + ul').slideToggle(150);
    $('.proicon3 > span').toggleClass('spantoggle');
  });
})

$(function() {
  var proicon = $('.proicon')
  $('.proicon4').click(function() {
    $('.proicon4 + ul').slideToggle(150);
    $('.proicon4 > span').toggleClass('spantoggle');
  });
})








//중간중간 애니메이션 멈추기
//베스트아이템은 무신사 따라하기
