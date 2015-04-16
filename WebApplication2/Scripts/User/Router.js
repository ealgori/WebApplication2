'use strict';
App.module("Router", function (Router, App, Backbone, Marionette) {
    Router.router = Marionette.AppRouter.extend({
        appRoutes: {
            "search/:s": "search",
            "": "index"

        },

    })

    Router.Controller = Marionette.Controller.extend({
        search: function (criteria) {
            this.index(criteria);
        },
        index: function (criteria) {
            var fetchingitems = App.channel.request("ItemList",criteria,0);
            var self = this;
            $.when(fetchingitems).done(function (items) {
                //if (criteria)
                //    items.updateFilter(function (model) {
                //        return model.filter(criteria);
                //    });
                self.showHeader(items,criteria);
                self.showFooter(items);
                self.showMain(items);
            });


        },







        showHeader: function (items,criteria) {
            var header = new App.Views.Header({ collection: items,criteria:criteria });
            App.header.show(header);
        },
        showFooter: function (items) {
            var footer = new App.Views.Footer({ collection: items });
            App.footer.show(footer);
        },
        showMain: function (items) {


            //var model = new App.Models.Todo({ name: "name1", comment: "comment1" });
            //var view = new App.Views.Todo({ model: model });
            //App.main.show(view);
            var mainView = new App.Views.TodoList({ collection: items ,page:0});
            App.main.show(mainView);


        }
    })
});