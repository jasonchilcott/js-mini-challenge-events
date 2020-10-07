/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}
const header = document.querySelector('#header')
header.addEventListener('click', function(e){
  const title = e.target
  toggleColor(title)
})

/***** Deliverable 2 *****/

const newPlayerForm = document.querySelector('#new-player-form')
newPlayerForm.addEventListener('submit', function (e){
  e.preventDefault()
  const form = e.target
  const number = form["number"].value
  const name = form["name"].value
  const nickname = form["nickname"].value
  const photo = form ["photo"].value

  const newPlayer = {number: number, name: name, nickname: nickname, photo: photo, likes: 0}
  renderPlayer(newPlayer)
})

/***** Deliverable 3 *****/
const likeButtons = document.querySelectorAll('.like-button')
for (const button of likeButtons){
  button.addEventListener('click', function(e){
    const button = e.target;
    const parentDiv = button.parentElement;
    const likesP = parentDiv.querySelector('.likes');
    const likesA = likesP.textContent.split(" ");
    let cLikes = parseInt(likesA[0])
    const newLikes = ++cLikes
    likesP.textContent = `${newLikes} likes`

  })
}