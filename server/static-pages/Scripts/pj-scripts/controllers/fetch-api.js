var Controller = Controller || {};

Controller.FetchApi = {
  suspensionPage:{
    getMember: function(options) {
      var _promise = Api.suspensionPage.getMember(options);
        _promise.done(function(res) {
          Models.MemberList.setData(res);
          $('body').trigger(Events['GET-MEMBERS-COMPLETE']);
        });
      _promise.fail(function( jqXHR, textStatus, errorThrown) {
        $('body').trigger(Events['AJAX-FAIL' ]);
      });
    },
    postSuspension: function(options) {
      var _promise = Api.suspensionPage.getMember(options);
      _promise.done(function(res) {
       Models.SuspensionMember.setData(res);
       $('body').trigger(Events['POST-SUSPENSION-COMPLETE' ]);
      });
      _promise.fail(function( jqXHR, textStatus, errorThrown) {
        $('body').trigger(Events['AJAX-FAIL' ]);
      });
    },
    getSuspensionType:function(options) {
      var _promise = Api.suspensionPage.getSuspensionType(options);
      _promise.done(function(res) {

       Models.SuspensionTypes.setData(res);
        $('body').trigger(Events['GET-SUSPENSION-TYPES-COMPLETE' ]);
      });
      _promise.fail(function( jqXHR, textStatus, errorThrown) {
        $('body').trigger(Events['AJAX-FAIL' ]);
      });
    }
  }
};
