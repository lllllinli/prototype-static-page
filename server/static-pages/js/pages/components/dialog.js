var Components = Components || {};

Components.Dialog = {
  init: function(options) {
    if(options){
      this.setting = options;
    }
  },
  setting: {
      title: 'hello',
      message: 'hello',
      buttons: [{
          label: 'close',
          action: function(dialogRef){
              dialogRef.close();
          }
      }]
  },
  dialogRef:{},
  show: function() {
    this.dialogRef = BootstrapDialog.show(this.setting);

  },
  close: function() {
    this.dialogRef.close();
  }
};
