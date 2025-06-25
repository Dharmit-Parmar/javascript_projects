let input = document.getElementById("taskInput");
let add_btn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let counter = Number(localStorage.getItem("taskCounter")) || 0;

 
window.onload = loadTasksFromStorage;

function notification(message) {
    let notificationbox = document.createElement("div");
    notificationbox.classList.add("notification");
    notificationbox.style.display = "flex";
    notificationbox.style.top = "2%";
    let notify_text = document.createElement("h4");
    notify_text.textContent = message;
    notificationbox.appendChild(notify_text);
    document.body.appendChild(notificationbox);

    setTimeout(() => {
        notify_text.classList.add("fade-out");
        setTimeout(() => {
            notificationbox.remove();
        }, 500);
    }, 700);
}

add_btn.addEventListener("click", function () {
    let text = input.value.trim();
    if (text === "") return;
    createTask(text);
    input.value = "";
});

function createTask(text) {
    counter++;
    localStorage.setItem("taskCounter", counter);
    let key = "task_" + counter;
    localStorage.setItem(key, text);
    addTaskToDOM(text, key);

}

function addTaskToDOM(text, key) {
    let li = document.createElement("li");
    li.textContent = text;

    let deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.textContent = "Delete";
    li.appendChild(deletebtn);
    taskList.appendChild(li);

    deletebtn.addEventListener("click", function (e) {
        e.stopPropagation();
        notification(`"${text}" has been deleted!`);
        li.remove();
        if (key) localStorage.removeItem(key);
    });
}

function loadTasksFromStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("task_")) {
            let text = localStorage.getItem(key);
            addTaskToDOM(text, key);
        }
    }
}