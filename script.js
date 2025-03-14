// 🎵 Play/Pause Nature Sound
document.getElementById("playSound").addEventListener("click", function() {
    const audio = document.getElementById("natureSound");
    if (audio.paused) {
        audio.play();
        this.textContent = "🔇 Couper le son";
    } else {
        audio.pause();
        this.textContent = "🔊 Activer le son";
    }
});

// 🌱 Select Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// ✅ Add Task
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Veuillez entrer une tâche !");
        return;
    }

    // 📜 Create Task Item (li)
    const li = document.createElement("li");

    // 📝 Task Text Container
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    taskContent.classList.add("task-content");

    // 🎛 Buttons Container
    const taskButtons = document.createElement("div");
    taskButtons.classList.add("task-buttons");

    // ✏️ Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Modifier";
    editBtn.classList.add("edit");
    editBtn.addEventListener("click", function() {
        const newText = prompt("Modifier la tâche :", taskContent.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskContent.textContent = newText;
        }
    });

    // ❌ Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // 📌 Append Buttons & Text
    taskButtons.appendChild(editBtn);
    taskButtons.appendChild(deleteBtn);
    li.appendChild(taskContent);
    li.appendChild(taskButtons);
    taskList.appendChild(li);

    // 🔄 Clear Input
    taskInput.value = "";
});
