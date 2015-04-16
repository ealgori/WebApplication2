_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};
var MApp = Backbone.Marionette.Application.extend({});
window.App = new MApp();
App.addRegions({ "main": "#main" });
App.addRegions({ "footer": "footer" });
App.addRegions({ "header": "#header" });
App.channel = Backbone.Radio.channel("app");



App.on("start", function () {

    var controller = new App.Router.Controller();
    App.router = new App.Router.router({ controller: controller });
    Backbone.history.start();
    //var controller = new App.Controller.Controller();

});

App.channel.reply("ItemList", function (filter) {

    var fetchingitems = App.ListController.repository.getItems(filter,0);
    return fetchingitems;



});
App.channel.comply("add:page", function (collection,page,filter) {
    App.ListController.repository.fetchPage(collection,page,filter);
})

App.channel.comply("delItem", function (model) {
    App.ListController.repository.removeItem(model);
});

App.channel.comply("addItem", function (item, collection) {
    App.ListController.repository.addItem(item, collection);
})

