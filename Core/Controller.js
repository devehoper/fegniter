var Controller = function(name) {
    this.name = name;

    this.addToDom = function() {
        $("#Main").append("<div id='" + this.name + "'></div>");
    }

    this.loadView = function(fileName, destination) {
        $(destination).load(Config.views_path + fileName + ".html");
        App.Views[fileName] = $(destination);
    }

    this.loadApp = function(fileName, destination) {
        $(destination).load(Config.apps_path + fileName + "/" + filename + ".html");
    }

    this.loadModel = function(fileName) {
        App.loadScript(Config.models_path + fileName + ".js");
    }

    // Add controller to App controllers
    typeof(App.Controllers.name) === "undefined" ? App.Controllers[name] = this: "";
}