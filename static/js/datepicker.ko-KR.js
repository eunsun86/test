(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (factory(global.jQuery));
}(this, (function ($) {
  'use strict';

  $.fn.datepicker.languages['ko-KR'] = {
    format: 'yyyy. mm. dd',
    days: ['�Ͽ���', '������', 'ȭ����', '������', '�����', '�ݿ���', '�����'],
    daysShort: ['��', '��', 'ȭ', '��', '��', '��', '��'],
    daysMin: ['��', '��', 'ȭ', '��', '��', '��', '��'],
    months: ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��'],
    monthsShort: ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��'],
    weekStart: 1,
    yearFirst: true,
    yearSuffix: '��'
  };
})));
