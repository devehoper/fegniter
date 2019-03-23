var controller = function(controllerName) {
    controller.prototype.name = controllerName;

    controller.prototype.loadModel = function(modelName) {

    }

    controller.prototype.loadView = function( container, path ) {
        $("#" + this.name).closest(container).load(path);
    }

    /**
     * Auto render controller view
     */
    controller.prototype.render = (function() {
        $(".controller").hide();
        if($("#" + controllerName).length === 1) {
            $("#" + controllerName).show();
        } else {
            var html = '<div class="controller" id="' + controllerName + '"></div>';
            $("body").prepend(html);
            $("#" + controllerName).load("views/" + controllerName + ".html");
        }
    })()
}