var Home = new Controller("Home");

Home.index = function() {
    this.loadModel("Welcome");
    this.loadView("Welcome", "#" + this.name);
}

Home.teste = function() {
    alert("Ola Mundo");
}