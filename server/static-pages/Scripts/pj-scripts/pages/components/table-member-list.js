var Components = Components || {};

Components.TableMemberList = {
  init:function(options) {
    this.setTarget(options.target);
    this.setColumns(options.columns);
    $.extend(this['childs'], options['childs'])
  },
  columns:[],
  setColumns:function(columns){
    this.columns = columns;
  },
  getColumns:function(){
    return this.columns;
  },
  childs:{
    hasChild:false
  },
  targetDom : {},
  setTarget: function(dom) {
    this.targetDom = dom;
  },
  getTarget: function() {
    return this.targetDom;
  },
  addTh:function(columns, addChilds) {
    $.each(addChilds, function(key, item) {
      columns.push(item['th']);
    });
    return columns;
  },
  addTd:function(data, addChilds) {
    var _data = [];
    $.each(data, function(key, item) {
      var _additem = {};
      $.each(addChilds, function(ckey, citem) {
        _additem = $.extend({}, _additem, citem['td']);
      });
      data[key] = $.extend({}, item, _additem);
    });
  },
  createTable: function(data) {
    var _columns = [];
    var _data = [];
    var _tableObj = {};

    _columns = this.getColumns();
    $.each(data, function(key, item) {
      _data.push(item);
    });

    if(this['childs']['hasChild']) {
      var _addChilds = this['childs']['addChild'];
      _columns = this.addTh(_columns,_addChilds);
      this.addTd(_data, _addChilds);
    }
    _tableObj = {
      columns: _columns,
      data   : _data
    };
    this.targetDom.bootstrapTable(_tableObj);

    if(this['childs']['hasChild']) {
      $.each(this['childs']['addChild'], function(key, item){
        $.each($('.' + item['wrappertd-class']), function(dkey, ditem) {
          $(ditem)
          .empty()
          .append($(item['dom'],item['domattr'])
          .attr({'addattr':_data[dkey][item['addattr']]}));
        });
        $.each($('.' + item['jsSelect']), function(skey, sitem) {
          $.each(item['events'], function(ekey, eitem) {
            $(sitem).on(eitem.type, eitem.listener);
          });
        });

      });
    }
    //
    // $('.' + Components.TableMemberList['childs']['btns-suspension-member']['class-name'])
    // .on('click', Components.TableMemberList['childs']['btns-suspension-member']['on-click']);
  }
};
