App.module("ListController", function (ListController, App, Backbone, Marionette) {
    ListController.repository = //Backbone.Marionette.Controller.extend(
        {
        getItems: function () {
            var items = new App.Models.TodoCollection();
           

            items.fetch();
            //items.each(function (model) {
            //    model.destroy();
            //})
            if (items.models.length === 0) {
                var _items = this.initializeCollection();

                _.each(_items, function (item) {
                   
                    var model = new App.Models.Todo(item);
                    model.save();
                    items.push(model);
                });
               
            }
            var filteredCollection = new VirtualCollection(items, {
               
            }) ;
            return filteredCollection
        },
        initializeCollection: function () {

            var json = [{ "name": "Task1", "comment": "description1" }
                , { "name": "Task2", "comment": "description2" }
             , { "name": "Task3", "comment": "description3" }
             , { "name": "Task4", "comment": "description4" }
             , { "name": "Task5", "comment": "description5" }
             //, { "name": "Task6", "comment": "description6" }
             //, { "name": "Task7", "comment": "description7" }
             //, { "name": "Task8", "comment": "description8" }
             //, { "name": "Task9", "comment": "description9" }
             //, { "name": "Task10", "comment": "description10" }
             //, { "name": "Task11", "comment": "description11" }
            ];
            return json;
        },

        removeItem: function (model) {
          //  debugger;
            model.collection.remove(model);
            //model.collection.save();
            model.destroy();
            
        },

        addItem: function (data, collection) {
            //debugger;
            var model = new App.Models.Todo();
            model.set(data);
            
            collection.create(model);
           // collection.save();

        }
        }
    //)
    ;

   
})