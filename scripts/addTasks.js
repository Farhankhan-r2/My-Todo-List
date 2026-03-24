document.querySelector('.js-add-task-btn').addEventListener('click', () => {
  const task = document.querySelector('input').value;
  const allTasksContainer = document.querySelector('.all-tasks-container');

  const div = document.createElement('div');
  div.className = "task-container";

  const label = document.createElement('label');
  label.className = "task-complete";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement('span');
  span.className = "checkmark";

  const p = document.createElement('p');
  p.innerText = `${task}`

  const button = document.createElement('button');
  button.className = "delete-task";

  //nesting 
  div.appendChild(label);
  label.append(checkbox, span);
  div.append(p, button);
  allTasksContainer.prepend(div);


  document.querySelector('input').value = '';

});
