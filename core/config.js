/**
 * This file is responsible to deal with all configuration
 * needed to manage the app
 */
var config = {
    //Controller to use when the app starts, it should have the same name as the file
    defaultController: "homeController.js",
    environment: "dev", // can assume 'dev' or 'prod'
    dev: {
        url: "http://localhost/feigniter"
    },
    prod: {

    }
}