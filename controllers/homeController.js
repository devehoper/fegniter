var homeController = new controller("homeController");

homeController._super = controller;

homeController.index = function() {
    app.log(this);
    this.loadView(".content", "views/content.html")
}


// this should me on controller.js
app.controllers["homeController"] = homeController;