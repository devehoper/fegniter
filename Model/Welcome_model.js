var Welcome_model = new Model("Welcome_model");

Welcome_model.leftMenu = {
    app: {
        controller: "Contains the loaded controllers." +
            "<br>You can call a loaded controller App.Controllers.ControllerName_controller",
        model: "Contains the loaded models.",
        view: "Contains the loaded views."
    },
    directories: {
        Core: "Contains this framework core files.",
        Controller: "Contains the controllers files.",
        Model: "Contains the models files",
        Config: "Contains user configs files"
    }
};