const list = document.querySelector(".list");
// building the function to add elements into the ul
const addToDo = (e) => {
  // preventing the events default action 
  e.preventDefault();
  // grab the user input from the form 
  let userInput = document.querySelector("#user-data").value
  if (!userInput == "") {
    let newListItem = document.createElement("li");
    let inputText = document.createTextNode(userInput);
    newListItem.appendChild(inputText);
    list.appendChild(newListItem);
    newListItem.classList.add("li-dark")
    const btnContainer = document.createElement("div")
    const doneBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    doneBtn.innerHTML = "Done";
    delBtn.innerHTML = "Delete";
    doneBtn.classList.add("btn-dark");
    delBtn.classList.add("btn-dark");
    newListItem.appendChild(btnContainer);
    btnContainer.appendChild(doneBtn);
    btnContainer.appendChild(delBtn);
    list.appendChild(newListItem);
    delBtn.addEventListener("click", () => newListItem.remove());
    doneBtn.addEventListener("click", () => newListItem.classList.add("done"));
    document.querySelector("#user-data").value = ""
  } else {
    document.querySelector("#user-data").placeholder =
    "Add your task here";
  }
}
document.querySelector("form").addEventListener("submit", addToDo);