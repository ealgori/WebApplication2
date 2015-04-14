'use strict';
App.module("Controller", function (Controller, App, Backbone, Marionette) {
    Controller.Controller =  Marionette.Controller.extend({
        initialize: function () {
            var items =  App.channel.request("ItemList");
            this.showHeader(items);
            this.showFooter(items);
            this.showMain(items);
        },
        showHeader: function (items) {
            var header = new App.Views.Header({collection:items});
            App.header.show(header);
        },
        showFooter: function (items) {
            var footer = new App.Views.Footer({collection:items});
            App.footer.show(footer);
        },
        showMain: function (items) {
           
            
            //var model = new App.Models.Todo({ name: "name1", comment: "comment1" });
            //var view = new App.Views.Todo({ model: model });
            //App.main.show(view);
            var mainView = new App.Views.TodoList({ collection: items });
            App.main.show(mainView);
        }
    })
})