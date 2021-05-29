console.log("successfully connected...");
let tasks = [];

//Function for adding new task to the table
function addNewTask() {
  // fetching table's body tag
  const tBody = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  console.log("table fetched successfully...", tBody);

  // creating new row

  const myRow = tBody.insertRow();
  myRow.setAttribute("id", `row-${tasks.length}`);
  console.log(`row-${tasks.length} created successfully!!!`);

  //creating srno column...

  const newText = document.getElementById("newTask").value;

  tasks.push(newText); //pushing to array
  console.log(tasks);
  const srNo = myRow.insertCell(0); //creating cell
  srNo.textContent = tasks.length; //inserting value

  //creating task column...
  const newTask = myRow.insertCell(1); //creating cell
  newTask.textContent = newText; //inserting value
  console.log(`${tasks.length} ${newText} added successfully!!!`);

  // creating delete button...
  let delButton =
    '<a href="#" id=`del${tasks[tasks.length]}` class="btn btn-secondary btn-sm" onclick="deleteTask()">' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">' +
    '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />' +
    '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />' +
    "</svg></a>";
  const newDel = (myRow.insertCell(2).innerHTML = delButton);

  // creating done button...
  let doneButton =
    '<a href="#" id=`del${tasks[tasks.length]}` class="btn btn-secondary btn-sm" onclick="doneTa()">' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">' +
    '<path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>' +
    "</svg></a>";
  const newDone = (myRow.insertCell(3).innerHTML = doneButton);

  //resetting textbox value
  document.getElementById("newTask").value = "";
}
