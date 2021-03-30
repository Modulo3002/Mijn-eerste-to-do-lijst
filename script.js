//toevoeg knop 
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

function addToDoItem() {
  var entryText = toDoEntryBox.value;
  newToDoItem(entryText, false);
}

//Leegmaken
var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);

function emptyList(){
  var toDoItems = toDoList.children;
  while (toDoItems.length > 0){
    toDoItems.item(0).remove();
  }
}

//Clearen
var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedToDoItems);

function clearCompletedToDoItems(){
  var completedItems = toDoList.getElementsByClassName("completed");

  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}
//Nieuwe todos toevoegen
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(entryText, completed) {
  var toDoItem = document.createElement("li")
  var toDoText = document.createTextNode(entryText);
  toDoItem.appendChild(toDoText);

  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
}


// Items als klaar markeren
function toggleToDoItemState (){
  if (this.classList.contains("completed")){
    this.classList.remove("completed")
  } else {
    this.classList.add("completed")
  }
}
