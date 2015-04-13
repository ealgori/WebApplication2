'use strict';
App.module("Views", function (Views, App, Backbone, Marionette) {
    Views.Todo =  Marionette.ItemView.extend({
        template: "#todo-view-template"


    });
    Views.TodoList =  Marionette.CompositeView.extend({
        template: "#list-template",
        childView: Views.Todo,
        childViewContainer: "#itemList"
    });

    Views.Header =  Marionette.ItemView.extend({
        template: "#header-template",
        ui: {
            todo: "#name",
            add: "#add-task",
            filter: "#filter"

        }
    });
    Views.Footer =  Marionette.ItemView.extend({
        template: "#footer-template",
        templateHelpers: {
            total: function () {
                return this.count;
            }
        },
        serializeData: function () {
            return {
                count: this.collection.length
            }
        }
    });

})