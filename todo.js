const ul = document.querySelector("#Ul");
const inpField = document.querySelector("#inputField");
const addBtn = document.querySelector("#AddButton");
const deleteAllBtn = document.querySelector("#DeleteAllButton");

const todoArr = [];
let edit;
let deleted;
let saveEdit;

const AddTodo = () => {
  const todo = inpField.value.trim();

  if (!todo) {
    alert("Please enter a todo");
    inpField.value = "";
    return;
  }
  const newTodo = {
    id: todoArr.length + 1,
    title: todo,
    isCompleted: false,
  };

  todoArr.push(newTodo);

  // Create and append the new todo item

  const li = document.createElement("li");
  li.textContent = newTodo.title;
  li.setAttribute("data-id", newTodo.id);
  ul.appendChild(li);

  // Edit Button //
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.addEventListener("click", () => editTodo(newTodo.id, li));
  li.appendChild(editBtn);
  edit = editBtn;

  // Delete Button //
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", () => deleteTodo(newTodo.id, li));
  li.appendChild(deleteBtn);
  deleted = deleteBtn;

  inpField.value = "";
  console.log(todoArr);
};

const deleteTodo = (id, li) => {
  const newArr = todoArr.filter((todo) => todo.id !== id);
  todoArr.length = 0;
  todoArr.push(...newArr, { id: newArr.length + 1 });

  li.remove();
};

const editTodo = (id, li) => {
  console.log("chal gaya!", id);
  const todo = todoArr.find((todo) => todo.id === id);

  if (todo) {
    const editInp = document.createElement("input");
    editInp.type = "text";
    editInp.value = todo.title;

    const saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";
    li.innerHTML = "";
    li.appendChild(editInp);
    li.appendChild(saveBtn);

    saveBtn.addEventListener("click", () => {
      const updatedText = editInp.value.trim();
      if (!updatedText) {
        alert("Todo text cannot be empty!");
        return;
      }
      todo.title = updatedText;
      li.innerHTML = `${updatedText}`;
      li.appendChild(edit);
      li.appendChild(deleted);
    });
  }
};

const deleteAll = () => {
  todoArr.length = 0;
  ul.innerHTML = "";
};

addBtn.addEventListener("click", () => AddTodo());
deleteAllBtn.addEventListener("click", () => deleteAll());
