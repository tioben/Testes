// Variáveis globais
const section = document.getElementById("section");
const delPlayerForm = document.querySelector('#del-player-form');
const addPlayerForm = document.querySelector('#add-player-form');

// POO da aplicação
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

// Função para renderizar os players na main
function viewPlayers() {
  section.innerHTML = "";
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

// Função para adicionar player na tela
function addPlayer(nickname, vocation, level, world){
  playerList.unshift(new Player(nickname, level, vocation, world));
  viewPlayers();
}

// Função de validação do nickname personalizada
function nicknameValidation (nickname, vocation, level, world){

  // Variáveis de validação
  let isNicknameRepeated = false;
  let onlySpace = false;
  let spaceInStartOrAnd = false;
  const regex = /^[\s]+|[\s]+$/g;

  // Este nickname já existe?
  for (let item of playerList) {
    if (nickname.trim() === item.nickname) {
      isNicknameRepeated = true;
      break;
    }
  }

  // Tem apenas espaços?
  if (nickname.trim() === "") {
    onlySpace = true;
  }

  // Tem espaço no começo ou no fim?
  if(regex.test(nickname)){
    spaceInStartOrAnd = true;
  };

  // Retornos
  if(isNicknameRepeated){
    return alert("Nickname existente!");
  }
  else if(onlySpace){
    return alert("Não é permitido:\n Apenas espaços\n Espaços no começo\n Espaços no fim");
  }
  else if (spaceInStartOrAnd){
    return alert("Não é permitido:\n Apenas espaços\n Espaços no começo\n Espaços no fim");
  }
  else if((isNicknameRepeated == false) && (onlySpace == false) && (spaceInStartOrAnd == false)){
    return addPlayer(nickname, vocation, level, world);
  }
  

}

// Lógica para enviar addformulario para funcao addPlayer 
addPlayerForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)

  const nickname = document.querySelector('#add-nickname').value;
  const vocation = document.querySelector('#add-vocation').value;
  const level = parseInt(document.querySelector('#add-level').value);
  const world = document.querySelector('#add-world').value;

  nicknameValidation(nickname, vocation, level, world);

  addPlayerForm.reset();
});

// Função deletar player da tela
function delPlayer(nickname) {
  const indexToRemove = playerList.findIndex(item => item.nickname === nickname);
  if (indexToRemove !== -1) {
    playerList.splice(indexToRemove, 1); // Remove 1 elemento a partir do índice encontrado
  }else{
    alert("Nenhum player encontrado");
  }

  viewPlayers()
}

// Lógica para enviar delformulário para função delPlayer
delPlayerForm.addEventListener('submit', function (e) {
  
  e.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)

  const nickname = document.querySelector('#del-nickname').value;

  delPlayer(nickname);

  delPlayerForm.reset();
});

// Atribuindo lógica aos botões para abrir tela ao clicar em "adicionar jogador" ou "remover jogador" e fechar quando clicar em "X"
function buttonsAddRem(){
  const addButton = document.getElementById('add-button');
  const delButton = document.getElementById('del-button');
  const closeButton = document.getElementById('close-button');
  const div1 = document.getElementById('add-player');
  const div2 = document.getElementById('del-player');

  addButton.addEventListener('click', function (e) { //"Adicionar jogador"
    e.preventDefault();
    div1.style.display = 'block';
    div2.style.display = 'none';
    closeButton.style.display = "block";
  });

  delButton.addEventListener('click', function (e) { //"Remover jogador"
    e.preventDefault();
    div1.style.display = 'none';
    div2.style.display = 'block';
    closeButton.style.display = "block";
  });

  closeButton.addEventListener('click', function (e) { //"X"
    e.preventDefault();
    div1.style.display = 'none';
    div2.style.display = 'none';
    closeButton.style.display = "none";
  });
}

// Ativando funções essenciais
buttonsAddRem(); // Lógica dos botões "Adicionar jogador" e "Remover jogador"
viewPlayers(); // Renderizando primeira lista da página



