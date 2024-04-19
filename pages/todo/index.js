let todoList = [];
const todoItensArea = document.getElementById('todo-itens');

function mostrarItens(){
    todoList = JSON.parse(localStorage.getItem('tasks')) || [];

    for (let index = 0; index < todoList.length; index++) {
        const viewTask = document.createElement('p');
        viewTask.textContent = todoList[index];
        todoItensArea.appendChild(viewTask);
    }
}

function adicionarItem(){
    let taskData = document.getElementById('input-text').value; 
    todoList.push(taskData);

    localStorage.setItem('tasks', JSON.stringify(todoList));
    
    mostrarItens();
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarItens();
});
