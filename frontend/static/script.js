document.addEventListener("DOMContentLoaded", () => {
    const tasksDiv = document.getElementById("tasks");
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");

    function fetchTasks() {
        fetch("/api/tasks")
            .then((response) => response.json())
            .then((tasks) => {
                tasksDiv.innerHTML = tasks
                    .map((task) => `<p>${task.id}. ${task.task}</p>`)
                    .join("");
            });
    }

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTask = { task: taskInput.value };
        fetch("/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask),
        }).then(() => {
            taskInput.value = "";
            fetchTasks();
        });
    });

    fetchTasks();
});