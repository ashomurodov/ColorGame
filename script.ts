const container = document.querySelector(".cards__section");
const btn = document.querySelector(".load");

const container1 = document.createElement('div');

container1.style.width = '600px';
container1.style.height = '400px';
container1.style.border = '1px solid #abababa1';
container1.style.borderRadius = '10px';
container1.style.padding = '50px';
container1.style.display = 'grid';
container1.style.gridTemplateColumns = 'repeat(4, 1fr)'

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

class UI {
  element: HTMLElement;
  color: string;
  constructor(randomColor: string) {
    this.element = document.createElement("div");
    this.element.style.borderRadius = "10px";
    this.element.classList.add('card');

    this.color = `#${randomColor}`

    this.element.style.backgroundColor = this.color;
    this.element.style.cursor = "pointer";


    this.element.addEventListener('click', ()=> this.handleClick(this.color))

  }

  handleClick(color:string){
    console.log('Clicked '+ color )
    document.body.style.backgroundColor = color;
  }

  addContainer() {
    container?.appendChild(this.element);
  }
  

}


// function for generate color;
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
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

btn?.addEventListener("click", createCards);
