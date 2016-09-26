var Wigets = Wigets || {};

Wigets.FormSuspensionDescription = (function(){
  var _init = function(){};
  var _form = '';
  var _getFrom = function() {};
  var _setForm = function() {};

  _init = function(options) {

  };

  _getFrom = function() {
    return _form;
  };

  _setForm = function(textArea, select) {
    _form = '<div class="row">';
    _form +='<div class="col-md-8">'+ textArea +'</div>';
    _form +='<div class="col-md-4">'+ select +'</div>'
    _form += '</div>'
  };

  return {
    init    :  _init,
    setForm : _setForm,
    getForm : _getFrom
  };
})();
