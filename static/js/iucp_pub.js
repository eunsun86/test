/*�ۺ��� ���� JS*/

/*
  Aside �޴� ---------------------------------------------------
*/
// ����
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
// ȣ��
$(document).ready(function() {
  asideToggle('iucp-aside');
});

/*
  Accordion ---------------------------------------------------
*/
// ����
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
// ȣ��
$(document).ready(function() {
  acco('my-acco');
});

/*
  Datepicker ---------------------------------------------------
*/
// ȣ��
$(document).ready(function () {
  $('[data-toggle="datepicker"]').datepicker({
    language: 'ko-KR',
    format: 'yyyy-mm-dd'
  });
});

/*
  TabSwitch ---------------------------------------------------
*/
  // ����
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
  // ȣ��
  $(document).ready(function() {
    tabSwitcher('my-tab-switching');
  });