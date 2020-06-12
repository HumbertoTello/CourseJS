var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderToDos() {
  // All listElement HTML content will be erased
  listElement.innerHTML = '';

  for (toDo of toDos) {
    var toDoElement = document.createElement('li');
    var toDoText = document.createTextNode(toDo);
    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Exclude')
    linkElement.setAttribute('href', '#');

    var pos = toDos.indexOf(toDo);
    linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')')

    toDoElement.appendChild(toDoText);
    listElement.appendChild(toDoElement);
    linkElement.appendChild(linkText);
    toDoElement.appendChild(linkElement);
  }  
}

renderToDos();

function addToDo() {
  var toDoText = inputElement.value;

  if(toDoText != ''){
    toDos.push(toDoText);
    inputElement.value = '';
    renderToDos();
    saveToStorage();
  }
}

buttonElement.onclick = addToDo;

function deleteToDo(pos) {
  toDos.splice(pos, 1);
  renderToDos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(toDos));
}