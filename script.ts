// const container = document.querySelector(".cards__section");
const btn = document.querySelector(".load");

const container1 = document.createElement("div");
const button = document.createElement("button");

button.textContent = "Create More";

const containerStyles = {
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

const btnStyles = {
  marginTop: "30px",
  border: "none",
  padding: "15px 20px",
  borderRadius: "10px",
  backgroundColor: "cadetblue",
  color: "#fff",
  cursor: "pointer",
  fontSize: "19px",
};

Object.assign(container1.style, containerStyles);
Object.assign(button.style, btnStyles);

document.body.append(container1, button);

class UI {
  element: HTMLElement;
  color: string;
  constructor(randomColor: string) {
    this.element = document.createElement("div");
    this.element.style.borderRadius = "10px";
    this.element.style.transition = "all .2s ease-in-out";
    this.color = `${randomColor}`;
    this.element.style.backgroundColor = this.color;
    this.element.style.cursor = "pointer";

    this.element.addEventListener("mouseenter", () => {
      this.element.style.filter = "brightness(80%)";
    });

    this.element.addEventListener("mouseleave", () => {
      this.element.style.filter = "initial";
    });

    this.element.addEventListener("click", () => this.handleClick(this.color));
  }

  handleClick(color: string) {
    console.log("Clicked " + color);
    document.body.style.backgroundColor = color;
  }

  addContainer() {
    container1?.appendChild(this.element);
  }
}

// function for generate color;
function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function for create card;
function createCards() {
  for (let i = 0; i < 8; i++) {
    let color = randomColor();
    const card = new UI(color);
    console.log(card);
    card.addContainer();
  }
}

button.addEventListener("click", createCards);
button.addEventListener("click", () => console.log(button));
