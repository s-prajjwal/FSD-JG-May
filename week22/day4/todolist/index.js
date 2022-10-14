const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTodoTask);

function addTodoTask() {
  // 1. Extract the text for new task and clear the input field
  const newTaskText = document.getElementById("newTaskInput").value;
  // 2. Create a todo task HTML element for the new task
  // Attach the striking event for the new todo task element

  const newTaskInput = document.createElement("input");
  newTaskInput.type = "checkbox";
  newTaskInput.className = "task";

  const newTaskSpan = document.createElement("span");
  newTaskSpan.innerText = newTaskText;

  const newTaskElement = document.createElement("div");
  newTaskElement.appendChild(newTaskInput);
  newTaskElement.appendChild(newTaskSpan);

  // attach the event over here only
  newTaskElement.addEventListener("click", markTaskCompleted);
  //   console.log(newTaskElement);

  // 3. Add this new Todo task element in the end of Todo List
  document.getElementById("taskList").appendChild(newTaskElement);
}

function markTaskCompleted(event) {
  console.log(event, event.target.tagName);
  if (event.target.tagName === "SPAN") {
    event.target.style.textDecoration = "line-through";
    event.target.previousSibling.checked = true;
  } else if (event.target.tagName === "INPUT") {
    event.target.nextSibling.style.textDecoration = "line-through";
    event.target.checked = true;
  }

  // event.target.parentNode.children[1].style.textDecoration = "line-through";
  // event.target.parentNode.children[0].checked = true;
  console.log("This task is completed");
  // Logic for striking the text part
}
