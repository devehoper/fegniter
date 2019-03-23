var app = {
    paths: {
        controller: "core/controller.js",
        model: "core/model.js"
    },

    controllers: {

    },
    models: {

    },
    views: {
        
    },

    ajax: function(content) {
        $.ajax({
            url: content.url,
            method: typeof(content.method) !== "undefined" ? content.method : "GET",
            data: typeof(content.data) === "undefined" ? {} : content.data,
            onBefore: function() {
                app.showLoader();
            },
            success: function(res) {
                typeof(content.success) === "function" ? content.success(res) : "";
            },
            error: function(res) {
                typeof(content.error) === "function" ? content.error(res) : "";
            },
            done: function() {
                app.hideLoader();
            }
        });
    },
    
    showLoader: function() {
        $("#loader").show();
    },

    hideLoader: function() {
        $("#loader").hide();
    },
    
    loadScript: function(path) {
        $.getScript( path )
        .done(function( script, textStatus ) {
            app.log( textStatus );
        })
        .fail(function( jqxhr, settings, exception ) {
            app.log("ERROR!");
        });
    },

    /**
     * adds to dom
     * @param string type 
     * @param string path 
     */
    addToDom: function(type, path) {
        var content = "";
        type = type.toUpperCase();
        switch(type) {
            case "SCRIPT":
                //app.loadScript(path);
                content = '<scrypt type="text/javascript" src="' + path + '"></script>';
                $("body").append(content);
                break;

            case "STYLE":
                content = '<link rel="stylesheet" type="text/css" href="' + path + '"></link>';
                $("head").append(content);
                break;
            default:
                break;
        }
    },

    /**
     * Loads app core files into the page
     */
    loadCoreFiles: function() {
        //app.addToDom("script", app.paths.controller);
        //app.addToDom("script", app.paths.model);

    },

    /**
     * Console logs, it will be omited for prod mod
     * @param String text 
     */
    log: function (text) {
        if(config.environment.toUpperCase() === "DEV") {
            console.log(text);
        }
    },

    start: function() {
        $(document).ready(function() {
            app.log("STARTED APP");
            app.loadCoreFiles();
            //Loads default controller
            //Use promise instead of setTimout!!!!
            setTimeout(function() {
                app.loadScript("controllers/" + config.defaultController);
            }, 3000);

            app[config.defaultController.replace(".html", "")].index();
        });        
    }
    
};

// Automatic starts the app when the page loads
(function() {
    app.start();
})();