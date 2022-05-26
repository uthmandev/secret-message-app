// Event Handlers and Events
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('secretButton');
let fortune = document.getElementById('secretMessage');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showMessage(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Click to see secret message";
  button.style.cursor = "default";

  //add your code here
  // button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showMessage);