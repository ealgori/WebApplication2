'use strict';
App.module("Models", function (Models, App, Backbone, Marionette) {
    Models.Todo =  Backbone.Model.extend({
        defaults: {
            comment: "no comment yet"
        },
        filter:function(criteria){
            return  this.get("name").indexOf(criteria) > -1
        },

        //validate:
        //    {

        //    }
        url:"api/values"
       // localStorage: new Backbone.LocalStorage("todo"),
    });
    Models.TodoCollection = Backbone.Collection.extend({
        initialize:function(models,options){
            this.page = 0;
        },
        // localStorage: new Backbone.LocalStorage("todo"),
        model: Models.Todo,
        url:"api/values"

    });
})