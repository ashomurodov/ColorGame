var container = document.querySelector(".cards__section");
var btn = document.querySelector(".load");
var container1 = document.createElement('div');
container1.style.width = '600px';
container1.style.height = '400px';
container1.style.border = '1px solid #abababa1';
container1.style.borderRadius = '10px';
container1.style.padding = '50px';
container1.style.display = 'grid';
container1.style.gridTemplateColumns = 'repeat(4, 1fr)';
// width: 600px;
// height: 400px;
// border: 1px solid #abababa1;
// border-radius: 10px;
// padding: 50px;
// display: grid;
// grid-template-columns: repeat(4, 1fr);
// grid-auto-rows: 200px;
// gap: 30px;
// overflow-y: scroll;
// background-color: #000;
var UI = /** @class */ (function () {
    function UI(randomColor) {
        var _this = this;
        this.element = document.createElement("div");
        this.element.style.borderRadius = "10px";
        this.element.classList.add('card');
        this.color = "#".concat(randomColor);
        this.element.style.backgroundColor = this.color;
        this.element.style.cursor = "pointer";
        this.element.addEventListener('click', function () { return _this.handleClick(_this.color); });
    }
    UI.prototype.handleClick = function (color) {
        console.log('Clicked ' + color);
        document.body.style.backgroundColor = color;
    };
    UI.prototype.addContainer = function () {
        container === null || container === void 0 ? void 0 : container.appendChild(this.element);
    };
    return UI;
}());
// function for generate color;
function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}
// function for create card;
function createCards() {
    for (var i = 0; i < 8; i++) {
        var card = new UI(randomColor());
        console.log(card);
        card.addContainer();
    }
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", createCards);
