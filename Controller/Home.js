var Home = function(name) {
    Controller.call(this.name);
    this.isLoaded = true;
};

Home.index = function() {
    alert("WELCOME!");
}