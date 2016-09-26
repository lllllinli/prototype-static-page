var Components = Components || {};

Components.BtnSearchMember = {
  init:function(options) {
    this.setTarget(options.target);
    options.target.on('click', options.onClick);
  },
  targetDom : {},
  setTarget: function(dom) {
    this.targetDom = dom;
  },
  getTarget: function() {
    return this.targetDom;
  }
};
