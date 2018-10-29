var Model = function(name) {
    this.name = name;


    //Add Model to App.Models
    typeof(App.Controllers.name) === "undefined" ? App.Models[this.name] = this: "";
}