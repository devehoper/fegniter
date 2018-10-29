var Controller = function(name) {
    this.name = name;

    this.addToDom = function() {
        $("#Main").append("<div id='" + this.name + "'></div>");
    }

    this.loadView = function(path) {

    }




    App.Controllers[name] = this;
}

//Private methods
Controller.prototype.private = function() {
    alert("Private method");
}