var Api = Api || {};

Api= {
  init: function() {},
  setting: {
    type: 'GET',
    dataType: 'json'
  },
  doFetch: function(options) {
    return $.ajax(options);
  },
  getSetting:function(options) {
    var _setting=$.extend({}, Api.setting);
    $.extend(_setting, options);
    return _setting;
  },
  suspensionPage: {
    getMember: function(options) {
      var _setting = Api.getSetting(options);
      return Api.doFetch(_setting);
    },
    postSuspension: function(options) {
      var _setting = Api.getSetting(options);
      return Api.doFetch(_setting);
    },
    getSuspensionType:function(options) {
      var _setting = Api.getSetting(options);
      return Api.doFetch(_setting);
    }
  }
};
