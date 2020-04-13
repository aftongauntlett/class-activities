var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var submitBtn = document.getElementById("submit-item");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos(){
  // clear out anything that may already be in the ul tag on the page
  todoList.textContent = "";

  // loop through our array of todos
  for( var i=0; i<todos.length; i++ ){
    // create the li tag
    var liTag = document.createElement("li");
    liTag.textContent = todos[i];

    // Create button which will allow an item to be removed
    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("data-item-idx", i);
    liTag.appendChild(removeBtn);

    // append the li tag to the ul tag
    todoList.appendChild(liTag);
  }

  todoCountSpan.textContent = todos.length;
}

// This function fires when the submit button is clicked
function onButtonClick(event){
  event.preventDefault();

  // get the value of what was typed into the field
  var newTodo = todoInput.value;

  // add the new item to the array
  todos.push(newTodo);
  
  // call render function
  renderTodos();
}

function updateLocalStorage(){
  // create a string version of our to dos array
  // save that string version to local storage
}

function onRemoveClick(event){
  event.preventDefault();
  if( event.target.matches("button") ){
    // This is where we remove the list item
    // we will use setAttribute above on the button and li tag
    // we will use getAttribute here to get the value of what was clicked
    // remember that custom attributes usually begin with data- 
    var itemIdx = event.target.getAttribute("data-item-idx");
    console.log(itemIdx);

    // remove the item at the specified index from the todos array
    todos.splice(itemIdx, 1);

    // re-render the list

  }
}

submitBtn.addEventListener("click", onButtonClick);
// todoList.addEventListener("click", onRemoveClick);
renderTodos();