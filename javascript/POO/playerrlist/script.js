class Player {
  constructor(nickname, level, vocation, world) {
    this.nickname = nickname;
    this.level = level;
    this.vocation = vocation;
    this.world = world;
  }
}

let playerList = [
  new Player("zope", 16, "knight", "Retro-OpenPVP"),
  new Player("tioben", 102, "sorcerer", "OpenPVP"),
  new Player("matuezin", 81, "druid", "OpenPVP"),
  new Player("bluzu", 408, "paladin", "OptionalPVP"),
  new Player("maikin", 8, "paladin", "Retro-HardcorePVP"),
  new Player("diguin", 28, "druid", "Retro-HardcorePVP")
];

function viewPlayers() {
  const section = document.getElementById("section");
  for (let item of playerList) {
    var playerContainer = document.createElement('div');
    playerContainer.innerHTML = `
    <div class="player-container">
        <ul>
          <li>Nickname: ${item.nickname}</li>
          <li>Vocation: ${item.vocation}</li>
          <li>Level: ${item.level}</li>
          <li>World: ${item.world}</li>
        </ul>
    </div>
    `;
    section.appendChild(playerContainer); 
  }
  return section;
}

function addPlayer(nickname, vocation, level, world){
  for (let item of playerList) {
    if (nickname == item.nickname){
      console.log("pop up de nick ja existente & sai da funcao")
    }
  }
  playerList.unshift(new Player(nickname, level, vocation, world))
}

//function delPlayer(nickname){

//}


const addButton = document.getElementById('add-button');
const delButton = document.getElementById('del-button');
const div1 = document.getElementById('add-player');
const div2 = document.getElementById('del-player');

addButton.addEventListener('click', function (e) {
  e.preventDefault();
  div1.style.display = 'block';
  div2.style.display = 'none';
});

delButton.addEventListener('click', function (e) {
  e.preventDefault();
  div1.style.display = 'none';
  div2.style.display = 'block';
});



section.appendChild(viewPlayers());


