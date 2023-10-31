//variáveis globais
const newTask = document.getElementById("new-task");
const task = 
`<div class="task-card">
<input type="checkbox" id="check-box">
<label for="check-box"></label>
<input type="text" id="fname" name="fname">
<div id="hamburguer">|||</div>
</div>`;
const mainDiv = document.getElementById("main")

//adicionar tarefa
function addTask() {
    // Obtém o valor da entrada de texto.
    const taskText = newTask.value;
  
    // Cria um novo elemento HTML para o cartão de tarefa.
    const taskElement = document.createElement('div');
    taskElement.classList.add('task-card');
  
    // Adiciona o conteúdo do cartão de tarefa.
    taskElement.innerHTML = `<div class="task-card">
  <input type="checkbox" id="check-box">
  <label for="check-box"></label>
  <input type="text" id="fname" name="fname" value="${taskText}">
  <div id="hamburguer">|||</div>
  </div>`;
  
    // Adiciona o cartão de tarefa à `mainDiv`.
    mainDiv.appendChild(taskElement);
  
    // Limpa a entrada de texto.
    newTask.value = '';
}
newTask.addEventListener("click", () => {
    addTask();
});

//remover tarefa

