function getLand(name, pop, url) {
  return /*html*/ `
    <div onclick="openExternalWebsite('${url}')">
      <h3>${name}</h3>
      <span>${pop} Millionen</span>
    </div>
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
