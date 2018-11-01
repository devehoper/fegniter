var MainUtilities = {

}


var print = function(obj) {
    var style = "";
    if (typeof(obj[0]) != "undefined") {
        console.table(obj, Config.printStyle.object);
    } else {
        switch (typeof(obj)) {
            case "object":
                console.dir(obj);
                break;

            case "string":
                console.log("%c " + obj, Config.printStyle.string);
                break;

            case "number":
                if (Number.isInteger(obj)) {
                    console.log("%c ", obj, Config.printStyle.int);
                } else {
                    console.log("%c " + obj, Config.printStyle.double);
                }
                break;

            case "boolean":
                console.log("%c " + obj, Config.printStyle.boolean);
                break;

            default:
                break;
        }
    }

};
/*
console.log("%c QNimate is Awesome", "color: green; font-style: italic; font-size: 40px");
*/

var showLogs = function() {
    var lc = "<div id='logContainer'>";
    for (var i = 0; i < App.debbug.length; i++) {
        lc += "<div>" + App.debbug[i].content + "</div>";
    }
    lc += "</div'>";
    $("body").append(lc);
    $("#logContainer").css({
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        "background-color": "#ccc"

    });
}