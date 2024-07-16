document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(removeBtn);
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  taskList.appendChild(li);
}
