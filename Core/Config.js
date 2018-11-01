var printItems = function(obj) {
    this.style = "";
    this.elements = {
        color: "WHITE",
        "font-size": "22px",
        background: ""
    };
    for (var key in this.elements) {
        if (typeof(obj.key) !== "undefined") {
            this.elements.key = obj.key;
        }
        this.style += key + ":" + this.elements.key + ";";
    }
    return this.style;
};
var Config = {
    debugger: true,
    base_url: "https://cld.pt/dl/download/afabc696-dc5b-4c56-b317-852a181137a7/repositorios/feigniter/index.html",
    controllers_path: "Controller/",
    models_path: "Model/",
    views_path: "View/",
    apps_path: "Apps/",
    default_controller: "Welcome_controller",

    /**
     * Defining App routing system
     */
    routes: {
        //Controller:"Method"
        Welcome: ["teste", "value"]
    },

    printStyle: {
        object: new printItems({ color: "WHITE" }),
        string: new printItems({ color: "GREEN" }),
        int: new printItems({ color: "RED" }),
        double: new printItems({ color: "BLUE" }),
        boolean: new printItems({ color: "YELLOW" })
    }
}