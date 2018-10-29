var App = {
    Controllers: {

    },
    Models: {

    },

    Views: { // n sera necessario

    },


    /**
     * File list to load
     */
    dependencies: {
        Config: "Core/Config.js",
        Controller: "Core/Controller.js"
    },

    /**
     * Loads a script by a given path
     * @param String path 
     */
    loadScript: function(path) {
        console.warn(path);
        var script = document.createElement('script');
        script.src = path;
        $("body").append(script);
    },

    /**
     * Loads dependencie files into DOM
     * @param Object dependencies 
     */
    loadDependencies: function() {
        for (var key in this.dependencies) {
            this.loadScript(this.dependencies[key]);
        }
    },

    routing: function() {
        var url = window.location.href;
        var path = {
            controller: null,
            method: null,
            value: null
        };

        //load routes and redirect for defined routes

        if (url.indexOf("=") === -1) {

        } else {
            if (url.indexOf("?") === -1) {

            } else {
                if (url.indexOf("#") === -1) {
                    //window.location.assign();
                } else {

                }
            }
        }
    },
    /**
     * If App has Controller returns the controller otherwise returns null
     * @param String name 
     * @return null|| Object 
     */
    getController: function(name) {
        return typeof(this.Controllers[name]) === "undefined" ? null : this.Controllers.name;
    },

    loadController: function(path, name) {
        var ext = name.indexOf(".js") === -1 ? ".js" : "";
        this.loadScript(path + name + ext);
    },

    createPromise: function(before, after) {
        var p = new Promise(function(resolve, reject) {
            $("#spinner").show();
            before();
        });

        p.then(function() {
            after();
            $("#spinner").hide();
        });
    },

    start: function() {
        var scope = this;
        var p = new Promise(function(resolve, reject) {
            scope.loadDependencies();
            scope.routing();
            scope.loadController(Config.controllers_path, Config.default_controller);
            resolve("Loaded all dependencies!");
        });
        p.then(function(result) {
            console.warn(result);
            var controller = scope.getController(Config.default_controller);
            //controller === null ? "" : controller.addToDom();
            scope.Controllers[Config.default_controller].addToDom();
        });
    }
};

App.start();