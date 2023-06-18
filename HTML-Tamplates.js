function getLand(name, pop, url) {
  return /*html*/ `
    <a href="${url}" target="_blank">
      <h3>${name}</h3>
      <span>${pop} Millionen</span>
    </a>
  `;
}

function getSearchIcon(letter) {
  return /*html*/ `
    <b onclick="renderLand('${letter}')" class="search-icon">${letter}</b>
  `;
}

function getAllButton() {
  return /*html*/ `
    <b onclick="renderLand()" style="width: 45px;" class="search-icon">All</b>
  `;
}
