const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const clearCompletedBtn = document.getElementById('clear-completed-btn');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'border-gray-300', 'py-2', 'px-4');

        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;
        taskLabel.classList.add('text-gray-800', 'cursor-pointer');
        taskItem.appendChild(taskLabel);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('text-red-500', 'hover:text-red-700', 'transition');
        deleteBtn.addEventListener('click', () => taskItem.remove());
        taskItem.appendChild(deleteBtn);

        taskLabel.addEventListener('click', () => {
            taskLabel.classList.toggle('line-through');
            taskLabel.classList.toggle('text-gray-500');
        });

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

clearCompletedBtn.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.line-through');
    completedTasks.forEach(task => task.parentElement.remove());
});
