'use strict';
App.module("Models", function (Models, App, Backbone, Marionette) {
    Models.Todo =  Backbone.Model.extend({
        default: {
            comment: "no comment yet"
        },
        //validate:
        //    {

        //    }
        localStorage: new Backbone.LocalStorage("todo"),
    });
    Models.TodoCollection = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("todo"),
        model:Models.Todo

    });
})