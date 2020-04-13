// // var todoInput = document.querySelector("#todo-text");
// // var todoForm = document.querySelector("#todo-form");
// // var todoList = document.querySelector("#todo-list");
// // var todoCountSpan = document.querySelector("#todo-count");
// // var submitBtn = document.getElementById("submit-item");
// // ​
// // ​
// // var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
// // ​
// // function renderTodos(){
// //   // clear out anything that may already be in the ul tag on the page
// //   todoList.textContent = "";
// // ​
// //   // loop through our array of todos
// //   for( var i=0; i<todos.length; i++ ){
// //     // create the li tag
// //     var liTag = document.createElement("li");
// //     liTag.textContent = todos[i];
// // ​
// //     // Create button which will allow an item to be removed
// //     var removeBtn = document.createElement("button");
// //     removeBtn.textContent = "Remove";
// //     liTag.appendChild(removeBtn);
// // ​
// //     // append the li tag to the ul tag
// //     todoList.appendChild(liTag);
// //   }
// // ​
// //   todoCountSpan.textContent = todos.length;
// // }
// // ​
// // // This function fires when the submit button is clicked
// // function onButtonClick(event){
// //   event.preventDefault();
  
// //   // get the value of what was typed into the field
// //   var newTodo = todoInput.value;
// // ​
// //   // add the new item to the array
// //   todos.push(newTodo);
// // ​
// //   // call render function
// //   renderTodos();
// // }
// // ​
// // function onRemoveClick(event){
// //   event.preventDefault();
// //   if( event.target.matches("button") ){
// //     // This is where we remove the list item
// //     // we will use setAttribute above on the button and li tag
// //     // we will use getAttribute here to get the value of what was clicked
// //     // remember that custom attributes usually begin with data- 
// //     console.log("click");
// //   }
// // }
// // ​
// // submitBtn.addEventListener("click", onButtonClick);
// // todoList.addEventListener("click", onRemoveClick);
// // renderTodos();








// // my way

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    var li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.textContent = todo;
    todoList.appendChild(li);
    
    var btn = document.createElement("button");
    btn.textContent = "complete"
    li.appendChild(btn);
    // set an attribute so when clicked it knows what to remove
    // li.setAttribute("data-index", current)
    btn.addEventListener("click", function () {
      // remove the right li when clicked
      // document.getElementsByTagName("li")[0].removeAttribute("current");

      const dataIndex = li.getAttribute("data-index")

      todos.splice(dataIndex, 1)
      renderTodos();
    });
  }
}


// When form is submitted...
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});

