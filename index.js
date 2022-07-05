const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const nswerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

// Keep track of current cards
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];

// Store card data
const cardsData = [
  {
    question: "What must a variable begin with?",
    answer: "A letter, $ or _",
  },
  {
    question: "What is a variable?",
    answer: "Container for a piece of data",
  },
  {
    question: "Example of Case Sensitive Variable",
    answer: "thisIsVariable",
  },
];

// create all cardsData
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card in DOM
function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (index === 0) {
    card.classList.add("active");
  }

  card.innerHTML = `
    
    <div class="inner-card">
          <div class="inner-card-front">
            <p>${data.question}</p>
          </div>
          <div class="inner-card-back">
            <p>${data.answer}</p>
          </div>
        </div>
    
    `;

  // Event listerner for clicking the card and flipin / in css we have class show-answer that rotate the card
  card.addEventListener("click", () => card.classList.toggle("show-answer"));

  // Add to DOM cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);

  //   to update the text card
  updateCurrentText();
}

// Show number of cards
function updateCurrentText() {
  currentEl.innerText = ` ${currentActiveCard + 1}/${cardsEl.length}`;
}

createCards();
