var Welcome_controller = new Controller("Welcome_controller");
Welcome_controller.index = function() {
    var scope = Welcome_controller;
    scope.loadModel("Welcome_model");
    scope.model = App.Models.Welcome_model;
    scope.loadView("Welcome", "#" + scope.name);
    scope.loadView("header", "#header");
    scope.loadView("footer", "#footer");

    scope.loadApp("calculator", "#footer");
}

Welcome_controller.controllers = function() {
    Welcome_controller.loadModel("Welcome_model");
    Welcome_controller.model = App.Models.Welcome_model;
    $("#content").html(Welcome_controller.model.leftMenu.app.controller);
}

Welcome_controller.models = function() {
    Welcome_controller.loadModel("Welcome_model");
    Welcome_controller.model = App.Models.Welcome_model;
    $("#content").html(Welcome_controller.model.leftMenu.app.model);
}

Welcome_controller.views = function() {
    Welcome_controller.loadModel("Welcome_model");
    Welcome_controller.model = App.Models.Welcome_model;
    $("#content").html(Welcome_controller.model.leftMenu.app.view);
}