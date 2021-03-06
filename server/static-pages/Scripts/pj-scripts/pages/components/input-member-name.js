var Components = Components || {};

Components.InputMemberName = {
  init:function(options) {
    this.setTarget(options.target);
  },
  targetDom : {},
  setTarget:function(dom) {
    this.targetDom = dom;
  },
  getTarget:function() {
    return this.targetDom;
  },
  getValue:function() {
    return $.trim(this.getTarget().val());
  }
};
