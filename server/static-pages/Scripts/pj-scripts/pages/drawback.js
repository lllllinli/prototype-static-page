var CMS = CMS || {};
CMS.drawback = {}

CMS.drawback.init = function() {
  $('#start-date').datepicker({
    format:'yyyy/mm/dd',
    todayHighlight:true
  });
  $('#end-date').datepicker({
    format:'yyyy/mm/dd',
    todayHighlight:true
  })
};

CMS.drawback.onDrawBackListDataUpdata = function(e) {
  CMS.drawback.updateDrawBackListTable(CMS.drawback.DrawBackList.getData());
};
CMS.drawback.onDrawBackDetailDataUpdata = function(e){
  CMS.drawback.updateDialog(CMS.drawback.DrawBackDeTail.getData());
};
CMS.drawback.onDrawBack = function(e) {
  BootstrapDialog.show({
      title: '',
      message: 'Delete -  Success',
      buttons: [{
          label: 'close',
          action: function(dialogRef){
              dialogRef.close();
          }
      }]
  });
};
CMS.drawback.createDrawBackListTable = function(data) {
  var _columns = [];
  var _data = [];
  var _tableObj = {};

  _columns = [{
      field: 'id',
      title: 'Item ID'
  }, {
      field: 'name',
      title: 'Item Name'
  }, {
      field: 'price',
      title: 'Item Price'
  }, {
    field: 'btn',
    title: '退款'
  }];

  $.each(data, function(key, item) {
    var _btnshtml = '';
    var _obj = {};
    _btnshtml = '<input type="button" class="btn btn-danger js-draw-back" id="btn'+ item['id'] +'" value="退款"/>'
                + '<input type="button" class="btn btn-info btn-left-space js-open-model" id="btn'+ item['id'] +'" value="更多"/>';

    _obj = $.extend({}, item, {btn: _btnshtml});
    _data.push(_obj);
  });

  _tableObj = {
    columns: _columns,
    data   : _data
  };

  return _tableObj;
};

CMS.drawback.updateDrawBackListTable = function (data){
  var _tableObj = {};
  var _setTable = function(){};
  var _setBtnHandler = function(){};

  _setTable = function(_tableObj) {
      $('#drawback-table').bootstrapTable(_tableObj);
  };

  _setBtnHandler = function() {
    $('.js-open-model').on('click', function(e) {
      var _id = $(e.currentTarget).attr('id');
      CMS.drawback.fetchDrawBackDetail(_id);
    });
    $('.js-draw-back').on('click', function(e) {
      var _id = $(e.currentTarget).attr('id');
      console.log(_id);
      CMS.drawback.fetchDrawBack(_id);
    });
  };

  /* run */
  _tableObj = CMS.drawback.createDrawBackListTable(data);
  _setTable(_tableObj);
  _setBtnHandler();
};

CMS.drawback.updateDialog = function(data) {
  var $textAndPic = $('<table id="drawback-detail-table"'
    + 'data-classes="table table-hover"'
    + 'data-show-columns="true">'
    + '</table>');
    var _tableObj = CMS.drawback.createDrawBackListTable(data);

        BootstrapDialog.show({
            title: 'Guess who that is',
            message: $textAndPic,
            onshown: function() {
              $('#drawback-detail-table').bootstrapTable(_tableObj);
            },
            buttons: [{
                label: 'close',
                action: function(dialogRef){
                    dialogRef.close();
                }
            }]
        });


};


/* Events :  */
CMS.drawback.Events = {
  //
  "DRAWBACK-LIST-DATA-UPDATE-COMPLETE"   : "DRAWBACK-LIST-DATA-UPDATE-COMPLETE",
  //
  "DRAWBACK-DETAIL-DATA-UPDATE-COMPLETE" : "DRAWBACK-DETAIL-DATA-UPDATE-COMPLETE",

  "DRAWBACK-COMPLETE"                    : "DRAWBACK-COMPLETE"
};

/* Model : DrawBackList */
CMS.drawback.DrawBackList = {
  data :[],
  getData:function() {
    return this.data;
  },
  setData:function(data) {
    this.data = data;
  }
};
/* Model : DrawBackDeTail */
CMS.drawback.DrawBackDeTail = {
  data :[],
  getData:function() {
    return this.data;
  },
  setData:function(data) {
    this.data = data;
  }
};

/* AJAX : source */
CMS.drawback.fetchSource = {
  'drawback-list-url'  : 'tables/data1.json',
  'drawback-detail-url': 'tables/data2.json',
  'drawback-url'       : 'tables/data2.json',
};
/* AJAX : action */
CMS.drawback.fetchDrawBackList = function() {
  var _promise = $.ajax({
    dataType: 'json',
    type    : 'GET',
    url     : CMS.drawback.fetchSource['drawback-list-url']
  });

  _promise.done(function(result) {
    CMS.drawback.DrawBackList.setData(result);
     $('body').trigger(CMS.drawback.Events["DRAWBACK-LIST-DATA-UPDATE-COMPLETE"]);
  });
};
/* AJAX : action */
CMS.drawback.fetchDrawBackList = function() {
  var _promise = $.ajax({
    dataType: 'json',
    type    : 'GET',
    url     : CMS.drawback.fetchSource['drawback-list-url']
  });

  _promise.done(function(result) {
    CMS.drawback.DrawBackList.setData(result);
     $('body').trigger(CMS.drawback.Events["DRAWBACK-LIST-DATA-UPDATE-COMPLETE"]);
  });
};

CMS.drawback.fetchDrawBackDetail = function(id) {
  var _promise = $.ajax({
    dataType: 'json',
    type    : 'GET',
    url     : CMS.drawback.fetchSource['drawback-detail-url']
  });

  _promise.done(function(result) {
    CMS.drawback.DrawBackDeTail.setData(result);
     $('body').trigger(CMS.drawback.Events["DRAWBACK-DETAIL-DATA-UPDATE-COMPLETE"]);
  });
};

CMS.drawback.fetchDrawBack = function(id) {
  var _promise = $.ajax({
    dataType: 'json',
    type    : 'GET',
    url     : CMS.drawback.fetchSource['drawback-url']
  });

  _promise.done(function(result) {
     $('body').trigger(CMS.drawback.Events["DRAWBACK-COMPLETE"]);
  });
};


$(function(){
  CMS.drawback.init();
  CMS.drawback.fetchDrawBackList();
  $('body').on(CMS.drawback.Events["DRAWBACK-LIST-DATA-UPDATE-COMPLETE"], CMS.drawback.onDrawBackListDataUpdata);
  $('body').on(CMS.drawback.Events["DRAWBACK-DETAIL-DATA-UPDATE-COMPLETE"], CMS.drawback.onDrawBackDetailDataUpdata);
  $('body').on(CMS.drawback.Events["DRAWBACK-COMPLETE"], CMS.drawback.onDrawBack);
});
