//Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo")
const form = document.getElementById('form')

//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

//Functions
form.addEventListener('submit', (e) => {
    let messages = []
    if (todoInput.value === '' || todoInput.value == null) {
        messages.innerText('Text is required')
    }
})  

function addTodo(event){
    //Prevent form from submitting 
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; /*=value*/
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); /*newTodo is sticked inside of div todoDiv*/
    //CHECK MARK BUTTON 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK trash BUTTON 
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv)
    //Clear Todo Input value
    todoInput.value = "";
}

/*<div class="todo">
    <li></li>
    <button>Delete</button>
    <button>Checked</button>
</div>*/

function deleteCheck(e){
    const item = e.target; //console.log(e.target);
    //DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //ANIMATION
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    //CHECK MARK
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement; 
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
            case "all":
                todo.style.display = "flex";
                break
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){ //! = doesn't have it
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

