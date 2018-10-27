var App = {
    Controllers: {

    },
    Models: {

    },

    Views: { // n sera necessario

    },

    dependenciesPath: "",
    /**
     * File list to load
     * this list should be according to folder struct
     * for a better organization
     */
    dependencies: {
        Core: [
            "Controller.js"
        ]
    },

    /**
     * Loads dependencie files into DOM
     * @param Object dependencies 
     */
    loadDependencies: function(dependencies) {
        for (var key in dependencies) {
            if (typeof(key) === "object") {
                this.loadDependencies(dependencies[key]);
            } else {
                if (typeof(dependencies[key]) === "object") {
                    this.loadDependencies(dependencies[key]);
                } else {
                    var body = document.getElementsByTagName('body')[0];
                    var add = "<script src='" + dependencies[key] + "'></script>"
                    body.innerHTML = body.innerHTML + add;
                }
            }
        }
    }
};

App.loadDependencies(App.dependencies);