import { addTask } from './functions.js';

//add task
document.querySelector('.js-add-task-btn').addEventListener('click', () => {
  addTask();
});
document.getElementById('task-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  };
});

//removes the  completed tasks\

document.querySelector('.clear-tasks-button').addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('.task-complete input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.closest('.task-container').remove();
    }
  });
});

