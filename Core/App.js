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
     * Loads dependencie files into DOM
     * @param Object dependencies 
     */
    loadDependencies: function() {
        for (var key in this.dependencies) {
            var script = document.createElement('script');
            script.src = this.dependencies[key];
            $("body").append(script);
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

    start: function() {
        this.loadDependencies();
        this.routing();
        console.log(Config.base_url);
    }
};

App.start();