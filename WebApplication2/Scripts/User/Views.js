'use strict';
App.module("Views", function (Views, App, Backbone, Marionette) {

    Views.filterFunc=  function (child,index,collection) {
        var val = $("#name").val();
        if (val)

            return child.filter(val);
        else
            return true;
    };
    Views.Todo = Marionette.ItemView.extend({
        ui:{deleteBtn:".js-del"},
        template: "#todo-view-template",
        events:{
        "click @ui.deleteBtn":"del"
        },
        del: function () {
            App.channel.command("delItem", this.model);
        }

    });
    Views.TodoList =  Marionette.CompositeView.extend({
        initialize:function(options)
        {
            this.page=options.page;
        },
        template: "#list-template",
        childView: Views.Todo,
        childViewContainer: "#itemList",
       // filter: Views.filterFunc,

        collectionEvents: {

            "change": "render"
        },
        //events: {
        //    "click":"clickEv"
        //},
        //clickEv: function (e) {

        //}
        ui: { more: "#more" },
        events:{
        "click @ui.more":"more"
        },
       
        more: function () {
            this.page++;
            App.channel.command("add:page", this.collection,this.page,"Task");
        }
    });

    Views.Header =  Marionette.ItemView.extend({
        template: "#header-template",
        ui: {
            todo: "#name",
            add: "#add-task",
            filter: "#filter",
            form: "#add-form",
            input :"#name",
            addButton:"#add-btn",
            filterButton:"#filter-btn"

        },
        events:{
            //"click @ui.addButton": "add",
            "click @ui.filterButton": "filter",
            "submit @ui.form": "add",
            'keyup @ui.input': 'onInputKeyup'
        },
        onInputKeyup: function () {
            var val = $("#name").val();
            this.collection.updateFilter(function (model) {
                return model.filter(val);
            });
            this.collection.trigger("change");
        },
        add:function(e)
        {
            e.preventDefault();
            var serialized = Backbone.Syphon.serialize(this);
            
            App.channel.command("addItem", serialized, this.collection);
        },
        templateHelpers: {
            search: function () {
                return this.criteria;
            }
        },
        serializeData: function () {
            var self = this;
            return {

                criteria: this.options.criteria



            }
        },
    });
    Views.Footer =  Marionette.ItemView.extend({
        template: "#footer-template",
        templateHelpers: {
            total: function () {
                return this.count;
            }
        },
        serializeData: function () {
            var self  = this;
            return {
                
                count: this.collection.length


                   
            }
        },
        filter: Views.filterFunc,
        collectionEvents: {
            "add": "render",
            "remove": "render",
            "change": "render"
        }
    });

})