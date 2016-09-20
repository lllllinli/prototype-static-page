var Suspension = Suspension || {};

Suspension = (function(){
  var _init = function() {};
  var _onGetMember = function() {};


  _init = function() {

    Components.InputMemberName.init({
      target: $('.js-input-member-name')
    });
    Components.InputMemberIdentity.init({
      target: $('.js-input-member-identity')
    });
    Components.BtnSearchMember.init({
      target : $('.js-btn-search-member'),
      onClick: function(e) {
        Controller.FetchApi.suspensionPage.getMember({
          data: {
            'member-name'    :Components.InputMemberName.getValue(),
            'member-identity':Components.InputMemberIdentity.getValue()
          },
          type: 'GET',
          url: './tables/data1.json'
        });
      }
    });

    Components.TableMemberList.init({
      target : $('.js-member-table'),
      // table - <th></th> element
      columns: [{
          field: 'id',
          title: 'Item ID'
      }, {
          field: 'name',
          title: 'Item Name'
      }, {
          field: 'price',
          title: 'Item Price'
      }],
      // customer td
      childs : {
        hasChild : true,
        addChild : [
          {
            th : {
                field: 'button',
                title: '退款'
            },
            td : {
              button: '<div class="w-suspension-btn"></div>'
            },
            'wrappertd-class':'w-suspension-btn',
            dom: '<input/>',
            domattr: {type: 'button', value: '停權', class:'btn btn-danger js-suspension-member'},
            jsSelect:'js-suspension-member',
            addattr: 'id',
            events: [{
              type: 'click',
              listener: function(e) {
                var _query = $(e.currentTarget).attr('addattr');
                //console.log(_query);
                // 存入 model
                Components.Dialog.show();
              }
            }]
          }
        ]
      }
    });


    Components.Dialog.init({
        title: 'hello',
        message: '<textarea name="textarea" rows="10" cols="50">Write something here</textarea>',
        buttons: [
          {
            label: '停權',
            cssClass: 'btn-danger',
            action: function(dialogRef){
                //dialogRef.close();
                Controller.FetchApi.suspensionPage.postSuspension({
                  data: {
                    'user-id':'0'
                  },
                  type: 'GET',
                  url: './tables/data1.json'
                });
            }
          },
          {
            label: 'close',
            cssClass: 'btn-primary',
            action: function(dialogRef){
                dialogRef.close();
            }
          }
        ]
    });

    $('body').on(Events['GET-MEMBERS-COMPLETE'], _onGetMember);
    $('body').on(Events['POST-SUSPENSION-COMPLETE'], _onPostSuspension);
  };

  _onGetMember = function(e) {
    Components.TableMemberList.createTable(Models.MemberList.getData());
  };
  _onPostSuspension = function(e) {
    Components.Dialog.close();
  };

  return {
    init: _init
  };
})();

$(function(){
    //console.log('--- suspension page ---');
    Suspension.init();

});
