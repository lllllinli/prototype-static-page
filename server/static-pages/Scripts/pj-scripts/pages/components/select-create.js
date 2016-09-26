var Components = Components || {};

Components.SelectCreact = {
  init:function(options) {
    console.log('select init');
  },
  _selectHtml: '',
  getSelectHtml: function() {
    return this._selectHtml;
  },
  setSelectHtml: function(html) {
    this._selectHtml = html;
  },
  createSelect: function(options) {
    var _selectHtml = '<select class="form-control ' + options.class + '">';
    $.each( options.data, function( key, value ) {
      _selectHtml += '<option>'+ value['name'] +'</option>';
    });
    _selectHtml += '</select>';
    this.setSelectHtml(_selectHtml);
  },

  targetDom: {},
  setTarget: function(dom) {
    this.targetDom = dom;
  },
  getTarget: function() {
    return this.targetDom;
  }
};
