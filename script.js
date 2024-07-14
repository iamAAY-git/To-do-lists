document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('inputs').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const input = document.getElementById('inputs');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const task = document.createElement('li');
        task.className = 'task';

        const span = document.createElement('span');
        span.className = 'task-text';
        span.innerText = taskText;

        const editIcon = document.createElement('i');
        editIcon.className = 'fa-solid fa-pencil edit-task';
        editIcon.addEventListener('click', function () {
            editTask(span);
        });

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash delete-task';
        deleteIcon.addEventListener('click', function () {
            task.remove();
        });

        task.appendChild(span);
        task.appendChild(editIcon);
        task.appendChild(deleteIcon);

        document.getElementById('tasks').appendChild(task);
        input.value = '';
    }
}

function editTask(span) {
    const newTaskText = prompt('Edit your task', span.innerText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        span.innerText = newTaskText.trim();
    }
}

