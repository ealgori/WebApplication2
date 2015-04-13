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
    var controller = new App.Controller.Controller();

});

App.channel.reply("ItemList", function () {
    
    return App.ListController.repository.getItems();
    
})