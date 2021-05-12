console.log("successfully connected...");
let tasks = ["Make cookies"];

function addNewTask() {
  let newTask = document.getElementById("newTask").value;
  tasks.push(newTask);
  console.log(tasks);
  if (!newTask) {
    alert("EMPTY TASK CAN NOT BE ADDED!!!");
  } else {
    alert("TASK SUCCESSFULLY ADDED");
  }
}
