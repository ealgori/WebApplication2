'use strict';
App.module("Controller", function (Controller, App, Backbone, Marionette) {
    Controller.Controller =  Marionette.Controller.extend({
        initialize: function () {
            var fetchingitems = App.channel.request("ItemList");
            var self = this;
            $.when(fetchingitems).done(function (items) {
                self.showHeader(items);
                self.showFooter(items);
                self.showMain(items);
            });
           
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