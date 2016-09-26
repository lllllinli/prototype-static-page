var Suspension = Suspension || {};

Suspension = (function(){
  var _init = function() {};
  //
  var _onGetMember = function() {};
  var _onPostSuspension = function() {};
  var _onGetSuspensionTypes = function() {};
  var _dialogOnshow = function() {};
  var _dialogOnhide = function() {};



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
                Models.SuspensionId.setData({id: _query});

                Controller.FetchApi.suspensionPage.getSuspensionType({
                  data: {},
                  type: 'GET',
                  url: './tables/data1.json'
                });
              }
            }]
          }
        ]
      }
    });


    Components.Dialog.init({
        title: '停權',
        message: '',
        buttons: [
          {
            label: '停權',
            cssClass: 'btn-danger',
            action: function(dialogRef){
                //dialogRef.close();
                var _type = Components.Dialog.getDialogRef().getModalBody().find('.js-suspension-types').find(':selected').val();
                var _text = Components.Dialog.getDialogRef().getModalBody().find('.js-suspension-text').val();
                var _queryId = Models.SuspensionId.getData().id;

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

    Components.SelectCreact.init();

    $('body').on(Events['GET-MEMBERS-COMPLETE'], _onGetMember);
    $('body').on(Events['POST-SUSPENSION-COMPLETE'], _onPostSuspension);
    $('body').on(Events['GET-SUSPENSION-TYPES-COMPLETE'], _onGetSuspensionTypes);
  };



  _onGetMember = function(e) {
    Components.TableMemberList.createTable(Models.MemberList.getData());
  };
  _onPostSuspension = function(e) {
    //todo

    Components.Dialog.close();
    Components.Dialog.setMessage('<h1>Success</h1>');
    Components.Dialog.show();
  };

  _onGetSuspensionTypes = function(e) {
    Components.SelectCreact.createSelect({class: 'js-suspension-types', data:Models.SuspensionTypes.getData()});
    Components.TextareaCreact.createTextarea({class: 'js-suspension-text'});
    Wigets.FormSuspensionDescription.setForm(Components.TextareaCreact.getTextareaHtml(), Components.SelectCreact.getSelectHtml())
    Components.Dialog.setMessage(Wigets.FormSuspensionDescription.getForm());

    Components.Dialog.show();



  };

  return {
    init: _init
  };
})();

$(function(){
    //console.log('--- suspension page ---');
    Suspension.init();

});
