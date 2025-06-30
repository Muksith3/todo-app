function addTask() {
  const input = document.getElementById("task-input");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;
  document.getElementById("task-list").appendChild(li);
  input.value = "";
}
