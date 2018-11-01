var App = {
    Controllers: {},
    Models: {},
    Views: {},
    debbug: [],

    /**
     * File list to load
     */
    dependencies: {
        Config: "Core/Config.js",
        Controller: "Core/Controller.js",
        Model: "Core/Model.js",
        Main_utilities: "Utilities/Main.js"
    },

    request: function(data) {
        $.ajax({
            url: data.url,
            method: typeof(data.method) === "undefined" ? "GET" : data.method,
            headers: typeof(data.headers) === "undefined" ? "" : data.headers,
            beforeSend: function(data) {
                typeof(data.beforeSend) === "function" ? data.beforeSend(): "";
            },
            success: function(data) {
                typeof(data.success) === "undefined" ? "" : data.success(data);
            },
            error: function() {
                typeof(data.error) === "function" ? data.error(): "";

            }
        }).done(function(data) {
            typeof(data.done) === "function" ? data.done(): "";
        });
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

        if (url.indexOf("#") === -1) {
            window.location.assign(Config.base_url + "#" + Config.default_controller);
            typeof(App.Controllers[Config.default_controller]) === "undefined" ? "" : App.Controllers[Config.default_controller].index();
        } else {
            if (url.indexOf("?") === -1) {
                path.controller = url.slice((url.indexOf("#") + 1), url.length);
                var controller = this.getController(Config.default_controller);
                controller != null ? controller.index() : "";
                var c = App.Controllers[path.controller];
                c["index"]();

            } else {
                path.controller = url.slice((url.indexOf("#") + 1), url.indexOf("?"));
                if (url.indexOf("=") === -1) {
                    path.controller = url.slice((url.indexOf("#") + 1), url.indexOf("?"));
                    path.method = url.slice((url.indexOf("?") + 1), url.length);
                    var c = App.Controllers[path.controller];
                    c[path.method]();
                } else {
                    path.controller = url.slice((url.indexOf("#") + 1), url.indexOf("?"));
                    path.method = url.slice((url.indexOf("?") + 1), url.indexOf("="));
                    path.value = url.slice((url.indexOf("=") + 1), url.length);
                    var c = App.Controllers[path.controller];
                    c[path.method](path.value);
                }
            }
        }

        //var controller = this.getController(path.controller);

        //controller.index();
        //deal with routing...
        /*if(typeof(Config.routes[path.controller]) !== "undefined") {
            
            if(typeof(Config.routes[path.controller][0]) !== "undefined") {
                
                if(typeof(Config.routes[path.controller][1]) !== "undefined") {
                    
                }   
            }
        }*/

    },
    /**
     * If App has Controller returns the controller otherwise returns null
     * @param String name 
     * @return null|| Object 
     */
    getController: function(name) {
        return typeof(this.Controllers[name]) === "undefined" ? null : this.Controllers.name;
    },

    /* If App has Model returns the model otherwise returns null
     * @param String name 
     * @return null|| Object 
     */
    getModel: function(name) {
        console.warn(name);
        return typeof(this.Models[name]) === "undefined" ? null : this.Models.name;
    },

    loadController: function(name) {
        console.warn(Config.controllers_path + name);
        var controller = this.getController(Config.controllers_path + name);
        controller === null ? this.loadScript(Config.controllers_path + name + ".js") : $("#" + name).show();
        typeof(this.activeController) === "undefined" ? "" : $("#" + this.activeController).hide();
        this.activeController = name;

    },

    createPromise: function(before, after) {
        var p = new Promise(function(resolve, reject) {
            $("#spinner").show();
            before();
            resolve();
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
            scope.loadController(Config.default_controller);
            resolve("Loaded all dependencies!");
        });
        p.then(function(result) {
            var controller = scope.getController(Config.default_controller);
            //controller === null ? "" : controller.addToDom();
            scope.Controllers[Config.default_controller].addToDom();
            scope.routing();
            window.onhashchange = function(e) {
                console.log("LOCATION CHANGED");
                App.routing();
            };
        });
    }
};

App.start();