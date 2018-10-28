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

    loadController: function(path) {
        var ext = path.indexOf(".js") === -1 ? ".js" : "";
        this.loadScript(path + ext);
        console.warn(path + ext);
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
        this.createPromise(function() {
            scope.loadDependencies();
        }, function() {
            scope.routing();
            scope.loadController(Config.controllers_path + Config.default_controller)

        });


    }
};

App.start();