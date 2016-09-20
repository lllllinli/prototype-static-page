var Models = Models || {};

Models.SuspensionMember = {
  requireData: {},
  setRequire:function(requireData){
    this.requireData = requireData;
  },
  getRequireData:function(){
    return this.requireData;
  },
  data:{},
  getData:function() {
    return this.data;
  },
  setData:function(data) {
      this.data = data;
  }
};
