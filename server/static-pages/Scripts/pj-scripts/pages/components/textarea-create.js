var Components = Components || {};

Components.TextareaCreact = {
  init:function(options) {
    console.log('textarea init');
  },
  _textareaHtml: '',
  getTextareaHtml: function() {
    return this._textareaHtml;
  },
  setTextareaHtml: function(html) {
    this._textareaHtml = html;
  },
  createTextarea: function(options) {
    var _textareaHtml= '<textarea class="form-control '+ options.class +'" rows="3"></textarea>';
    this.setTextareaHtml(_textareaHtml);
  },
  targetDom: {},
  setTarget: function(dom) {
    this.targetDom = dom;
  },
  getTarget: function() {
    return this.targetDom;
  }
};
