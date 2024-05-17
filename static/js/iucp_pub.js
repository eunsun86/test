/*퍼블리싱 전용 JS*/

/*
  Aside 메뉴 ---------------------------------------------------
*/
// 정의
var asideToggle = function(asideToggleRoot) {
  var E = {};
  E.root = $('.' + asideToggleRoot);
  E.ctr = E.root.find('.d1>li');
  //E.target = E.root.find('.d1 .d2');
  E.ctr.each(function(n) {
    var nb = n;
    var that = $(this);
    that.on('click', function () {
      if (!that.hasClass('active')) {
        that.addClass('active');
      } else { 
        that.removeClass('active');
      }
    })
  });
};
// 호출
$(document).ready(function() {
  asideToggle('iucp-aside');
});

/*
  Accordion ---------------------------------------------------
*/
// 정의
var acco = function(accoRoot) {
  var E = {};
  E.root = $('.' + accoRoot);
  //E.item = E.root.find('.item');
  E.ctr = E.root.find('.my-acco-ctr');
  E.target = E.root.find('.my-acco-con');
  E.ctr.each(function(n) {
    var nb = n;
    var that = $(this);
    that.on('click', function() {
      if (!that.parent('.my-acco').hasClass('active')) {
        that.parent('.my-acco').addClass('active');
      } else {
        that.parent('.my-acco').removeClass('active');
      }
    })
  });
};
// 호출
$(document).ready(function() {
  acco('my-acco');
});

/*
  Datepicker ---------------------------------------------------
*/
// 호출
$(document).ready(function () {
  $('[data-toggle="datepicker"]').datepicker({
    language: 'ko-KR',
    format: 'yyyy-mm-dd'
  });
});

/*
  TabSwitch ---------------------------------------------------
*/
  // 정의
  var tabSwitcher = function(tabSwitcherRoot) {
    var E = {};
    E.root = $('.' + tabSwitcherRoot);
    E.ctr = E.root.find('.tab .item');
    E.target = E.root.find('.pn-con-group .pn-con');
    E.ctr.each(function(n) {
      var nb = n;
      var that = $(this);
      that.on('click', function() {
        E.ctr.removeClass('active');
        that.addClass('active');
        E.target.removeClass('active');
        E.target.eq(nb).addClass('active');
      })
    });
  };
  // 호출
  $(document).ready(function() {
    tabSwitcher('my-tab-switching');
  });