let tasks = '';
document.querySelector('.js-add-tasks-btn').addEventListener('click', () => {
  const task = document.querySelector('input').value;
  tasks = `<div class="task">
          <label class="task-complete">
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <p>${task}</p>
          <button class="delete-task">✖</button>
    </div>`
    ;
  document.querySelector('.tasks-container').innerHTML += tasks
});
