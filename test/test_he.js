const assert = require('assert');
const n2words = require('../n2words.js');

const testCasesHebrew = [
  [0, 'אפס'],
  [1, 'אחת'],
  [2, 'שתים'],
  [3, 'שלש'],
  [11, 'אחת עשרה'],
  [12, 'שתים עשרה'],
  [16, 'שש עשרה'],
  [19, 'תשע עשרה'],
  [20, 'עשרים'],
  [21, 'עשרים ואחת'],
  [26, 'עשרים ושש'],
  [28, 'עשרים ושמונה'],
  [30, 'שלשים'],
  [31, 'שלשים ואחת'],
  [40, 'ארבעים'],
  [44, 'ארבעים וארבע'],
  [50, 'חמישים'],
  [55, 'חמישים וחמש'],
  [60, 'ששים'],
  [67, 'ששים ושבע'],
  [70, 'שבעים'],
  [79, 'שבעים ותשע'],
  [89, 'שמונים ותשע'],
  [95, 'תשעים וחמש'],
  [100, 'מאה'],
  [101, 'מאה ואחת'],
  [199, 'מאה תשעים ותשע'],
  [203, 'מאתיים ושלש'],
  [287, 'מאתיים שמונים ושבע'],
  [356, 'שלש מאות חמישים ושש'],
  [400, 'ארבע מאות'],
  [434, 'ארבע מאות שלשים וארבע'],
  [578, 'חמש מאות שבעים ושמונה'],
  [689, 'שש מאות שמונים ותשע'],
  [729, 'שבע מאות עשרים ותשע'],
  [894, 'שמונה מאות תשעים וארבע'],
  [999, 'תשע מאות תשעים ותשע'],
  [1000, 'אלף'],
  [1001, 'אלף ואחת'],
  [1097, 'אלף תשעים ושבע'],
  [1104, 'אלף מאה וארבע'],
  [1243, 'אלף מאתיים ארבעים ושלש'],
  [2385, 'אלפיים שלש מאות שמונים וחמש'],
  [3766, 'שלשת אלפים שבע מאות ששים ושש'],
  [4196, 'ארבעת אלפים מאה תשעים ושש'],
  [5846, 'חמשת אלפים שמונה מאות ארבעים ושש'],
  [6459, 'ששת אלפים ארבע מאות חמישים ותשע'],
  [7232, 'שבעת אלפים מאתיים שלשים ושתים'],
  [8569, 'שמונת אלפים חמש מאות ששים ותשע'],
  [9539, 'תשעת אלפים חמש מאות שלשים ותשע']
  // // Supports only numbers < 9999
  // [1000000, ''],
  // [1000001, ''],
  // [4000000, ''],
  // [10000000000000, ''],
  // [100000000000000, ''],
  // [1000000000000000000, '']
]


describe('Hebrew', function () {
  it('should convert numbers correctly (Hebrew)', function () {
    for (let i = 0; i < testCasesHebrew.length; i++) {
      assert.equal(n2words(testCasesHebrew[i][0], { lang: 'he' }), testCasesHebrew[i][1])
    }
  });
});