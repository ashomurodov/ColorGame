// const container = document.querySelector(".cards__section");
var btn = document.querySelector(".load");
var container1 = document.createElement("div");
var button = document.createElement("button");
button.textContent = "Create More";
var containerStyles = {
    width: "600px",
    height: "400px",
    border: "1px solid #abababa1",
    borderRadius: "10px",
    padding: "50px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridAutoRows: "200px",
    gap: "30px",
    overflowY: "scroll",
    backgroundColor: "#000",
};
var btnStyles = {
    marginTop: "30px",
    border: "none",
    padding: "15px 20px",
    borderRadius: "10px",
    backgroundColor: "cadetblue",
    color: "#fff",
    cursor: "pointer",
    fontSize: "19px",
};
var bodyStyles = {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "rgb(11, 11, 58)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
};
Object.assign(document.body.style, bodyStyles);
Object.assign(container1.style, containerStyles);
Object.assign(button.style, btnStyles);
document.body.append(container1, button);
var UI = /** @class */ (function () {
    function UI(randomColor) {
        var _this = this;
        this.element = document.createElement("div");
        this.element.style.borderRadius = "10px";
        this.element.style.transition = "all .2s ease-in-out";
        this.color = "".concat(randomColor);
        this.element.style.backgroundColor = this.color;
        this.element.style.cursor = "pointer";
        this.element.addEventListener("mouseenter", function () {
            _this.element.style.filter = "brightness(80%)";
        });
        this.element.addEventListener("mouseleave", function () {
            _this.element.style.filter = "initial";
        });
        this.element.addEventListener("click", function () { return _this.handleClick(_this.color); });
    }
    UI.prototype.handleClick = function (color) {
        console.log("Clicked " + color);
        document.body.style.backgroundColor = color;
    };
    UI.prototype.addContainer = function () {
        container1 === null || container1 === void 0 ? void 0 : container1.appendChild(this.element);
    };
    return UI;
}());
// function for generate color;
function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// function for create card;
function createCards() {
    for (var i = 0; i < 8; i++) {
        var color = randomColor();
        var card = new UI(color);
        console.log(card);
        card.addContainer();
    }
}
button.addEventListener("click", createCards);
button.addEventListener("click", function () { return console.log(button); });
