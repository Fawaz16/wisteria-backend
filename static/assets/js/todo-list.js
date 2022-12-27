const todoItem = document.querySelector("#todo-input-box");
const submitBtn = document.querySelector("#submit-btn");
const clearAllBtn = document.querySelector("#clear-all-btn");
const todoListContainer = document.querySelector("#todo-list-container");
const displayEditText = document.querySelector("#display");
const editText = document.querySelector("#edit-text");
const editTextBtn = document.querySelector("#edit-text-btn");
let counter = 0;

function createNewElement(todo, state = null) {
    const itemWrapper = document.createElement('div');
    const id = document.createElement('span');
    const todoText = document.createElement('span');
    const deleteBtn = document.createElement('img');
    const doneBtn = document.createElement('button');
    const doneBtnImg = document.createElement('img');
    const editBtn = document.createElement("img");

    itemWrapper.className = "container border d-flex align-items-center fs-5 mb-1 py-2 overflow-auto";

    id.className = "me-3";
    id.textContent = counter += 1;

    todoText.className = "flex-grow-1 text-nowrap todoText";
    todoText.textContent = todo;
    todoItem.value = "";

    editBtn.className = "ms-2 flex-shrink-0 btn crud-icon";
    editBtn.src = "../assets/images/edit.svg";

    deleteBtn.className = "ms-1 btn flex-shrink-0 btn crud-icon";
    deleteBtn.src = "../assets/images/delete.svg";

    doneBtn.className = "ms-1 btn flex-shrink-0 crud-icon p-0 m-0";
    doneBtnImg.className = "btn crud-icon border-0 border-0";
    doneBtnImg.src = "../assets/images/done.svg";

    if (state != null) {
        doneBtn.disabled = "true";
        itemWrapper.style.backgroundColor = "lightgreen";
    }

    editBtn.onclick = () => {
        displayEditText.classList.remove('d-none');
        editText.value = todoText.textContent;
        editTextBtn.onclick = () => {
            editBtn.parentElement.children[1].textContent = editText.value;
            updateStoredValue();
            displayEditText.classList.add('d-none');
        }
    }

    deleteBtn.onclick = () => {
        itemWrapper.remove();
        counter = 0;
        for (let element of todoListContainer.children) {
            counter += 1;
            element.firstElementChild.textContent = counter;
        }
        updateStoredValue();
    }

    doneBtn.onclick = () => {
        doneBtn.disabled = "true";
        itemWrapper.style.backgroundColor = "lightgreen";
        updateStoredValue();
    }

    doneBtn.appendChild(doneBtnImg);

    itemWrapper.appendChild(id);
    itemWrapper.appendChild(todoText);
    itemWrapper.appendChild(editBtn);
    itemWrapper.appendChild(deleteBtn);
    itemWrapper.appendChild(doneBtn);

    todoListContainer.appendChild(itemWrapper);
    updateStoredValue();
}

function updateStoredValue() {
    let data = {};
    for (let element of todoListContainer.children) {
        data["Work"+element.children[0].textContent] = [element.children[0].textContent, element.children[1].textContent, checkState(element)];
    }
    storeValue(data)
}

function checkState(element) {
    if (element.lastElementChild.disabled === true) {
        return "done";
    } else {
        return "";
    }
}


function storeValue(value) {
    //Converts the value to a string and stores the value
    value = JSON.stringify(value);
    window.localStorage.setItem("todoList", value);
}

function clearAllStoredValue(){
    window.localStorage.setItem("todoList", "");
}

function retrieveStoredValue() {
    //If there exist on data in the local storage or the todo-list does not exist in the local storage, it will return a new dictionary
    let data = (window.localStorage.getItem("todoList") != null) ? window.localStorage.getItem('todoList') : {};
    return data;
}

submitBtn.addEventListener('click', () => {
    if (todoItem.value.length >= 1) {
        createNewElement(todoItem.value);
    }
});


clearAllBtn.addEventListener('click', () => {
    todoListContainer.innerHTML = "";
    counter = 0;
    clearAllStoredValue();
});

window.addEventListener('DOMContentLoaded', () => {
    let data = (Object.entries(retrieveStoredValue()).length < 1) ? retrieveStoredValue() : JSON.parse(retrieveStoredValue());
    if (Object.entries(data).length >= 1) {
        for (let entry in data) {
            let [num, todo, state] = data[entry];
            if (state === "done") {
                createNewElement(todo, state);
            } else {
                createNewElement(todo);
            }
            counter = parseInt(num);
        }
    }
});