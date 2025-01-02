const ul = document.querySelector("#Ul");
const inpField = document.querySelector("#inputField");
const addBtn = document.querySelector("#AddButton");
const deleteAllBtn = document.querySelector("#DeleteAllButton");

const todoArr = [];

const AddTodo = () => {
  const todo = inpField.value.trim();

  if (!todo) {
    Swal.fire({
      text: "Please enter any text!",
      icon: "question",
    });
    inpField.value = "";
    return;
  }
  const newTodo = {
    id: todoArr.length + 1,
    title: todo,
    isCompleted: false,
  };

  todoArr.push(newTodo);

  if (todoArr.length >= 7) {
    ul.style.maxHeight = "50vh";
    ul.style.overflowY = "scroll";
  } else {
    ul.style.maxHeight = "50vh";
    ul.style.overflowY = "hidden";
  }

  // Create and append the new todo item

  const li = document.createElement("li");
  li.textContent = newTodo.title;
  li.setAttribute("data-id", newTodo.id);
  li.setAttribute("class", "mainDiv__listItem");
  ul.appendChild(li);

  // Edit Button //
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.setAttribute("class", "mainDiv__editButton");
  editBtn.addEventListener("click", () => editTodo(newTodo.id, li));
  li.appendChild(editBtn);
  edit = editBtn;

  // Delete Button //
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.setAttribute("class", "mainDiv__deleteButton");
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
    editInp.setAttribute("class", "mainDiv__input");
    editInp.type = "text";
    editInp.value = todo.title;

    const saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";
    saveBtn.setAttribute("class", "mainDiv__editButton");
    saveBtn.style.backgroundColor = "#4CC9FE";
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

      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.setAttribute("class", "mainDiv__editButton");
      editBtn.addEventListener("click", () => editTodo(id, li));
      li.appendChild(editBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.setAttribute("class", "mainDiv__deleteButton");
      deleteBtn.addEventListener("click", () => deleteTodo(id, li));
      li.appendChild(deleteBtn);
    });
  }
};

const deleteAll = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      todoArr.length = 0;
      ul.innerHTML = "";
      Swal.fire({
        title: "Deleted!",
        text: "Your items has been deleted.",
        icon: "success",
      });
    }
  });
};

addBtn.addEventListener("click", () => AddTodo());
deleteAllBtn.addEventListener("click", () => deleteAll());
