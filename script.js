let letters = [];
let data = [];

async function init() {
  const response = await fetch("./bundesländer.json");
  data = await response.json();
  renderLand();
  generateFilterBar();
}

function renderLand(letter) {
  const main = document.getElementById("content");
  main.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const land = data[i];
    const name = land.name;
    const pop = (land.population + "").replace(".", ",");
    const url = land.url;

    if (letter === name.charAt(0) || !letter) {
      main.innerHTML += getLand(name, pop, url);
    }

    generateFilterArray(name);
  }
}

function generateFilterArray(name) {
  const firstLetter = name.charAt(0);
  if (!letters.includes(firstLetter)) {
    letters.push(firstLetter);
  }
}

function generateFilterBar() {
  const filterBar = document.getElementById("filter-bar");

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    filterBar.innerHTML += getSearchIcon(letter);
  }
  filterBar.innerHTML += getAllButton();
}
