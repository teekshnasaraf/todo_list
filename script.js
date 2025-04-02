document.addEventListener("DOMContentLoaded", function () {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let addTaskBtn = document.getElementById("addTaskBtn");

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            let newTask = document.createElement("li");
            newTask.textContent = task;

            // Add delete button
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "❌";
            deleteBtn.classList.add("deleteBtn");
            deleteBtn.addEventListener("click", function () {
                removeTask(index);
            });

            newTask.appendChild(deleteBtn);
            taskList.appendChild(newTask);
        });
    }

    function addTask() {
        if (taskInput.value.trim() !== "") {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(taskInput.value);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
            taskInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    }

    function removeTask(index) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }

    addTaskBtn.addEventListener("click", addTask);
    loadTasks();
});
