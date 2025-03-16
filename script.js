// 🎵 Play/Pause Nature Sound
document.getElementById("playSound").addEventListener("click", function() {
    const audio = document.getElementById("natureSound");
    if (audio.paused) {
        audio.play();
        this.textContent = "🔊 On";
    } else {
        audio.pause();
        this.textContent = "🔇Off";
    }
});

// 🎛 Toggle Settings Menu
document.getElementById("settingsBtn").addEventListener("click", function () {
    const menu = document.getElementById("settingsMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// 📌 Close dropdown if clicked outside
document.addEventListener("click", function (event) {
    const menu = document.getElementById("settingsMenu");
    const button = document.getElementById("settingsBtn");

    if (event.target !== menu && event.target !== button && !menu.contains(event.target)) {
        menu.style.display = "none";
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
        alert("Enter a task !");
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
    editBtn.textContent = "Modify";
    editBtn.classList.add("edit");
    editBtn.addEventListener("click", function() {
        const newText = prompt("Modify task:", taskContent.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskContent.textContent = newText;
        }
    });

    // ❌ Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
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
