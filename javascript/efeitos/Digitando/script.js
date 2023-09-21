var HTMLphrase = document.getElementById("phrase-html");

function typeEffect(htmlphrase) {
  const phrase = htmlphrase.textContent;
  const widthPhrase = phrase.length;
  const delay = 150;
  let type = "";

  function typeCharacters(index) {
    if (index < widthPhrase) {
      type += phrase[index];
      htmlphrase.textContent = type;
      setTimeout(function () {
        typeCharacters(index + 1);
      }, delay);
    } else {
      setTimeout(function () {
        removeCharacters(widthPhrase - 1);
      }, delay);
    }
  }

  function removeCharacters(index) {
    if (index >= 0) {
      type = type.slice(0, index);
      htmlphrase.textContent = type;
      setTimeout(function () {
        removeCharacters(index - 1);
      }, delay);
    } else {
      setTimeout(function () {
        typeCharacters(0); // Inicie a próxima iteração
      }, delay);
    }
  }

  // Inicie a primeira iteração
  typeCharacters(0);
}

// Inicie o efeito de digitação infinito
typeEffect(HTMLphrase);



function blink(){
  let elementBlink = document.getElementById("blink-bar");
  elementBlink.style.visibility = (elementBlink.style.visibility === "visible") ? "hidden" : "visible";
  
}

setInterval(blink, 500);