export function addTask() {
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
  button.innerText = "✖";

  //nesting 
  div.appendChild(label);
  label.append(checkbox, span);
  div.append(p, button);
  allTasksContainer.prepend(div);


  document.querySelector('input').value = '';
  deleteTask();

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      p.style.textDecoration = "line-through";
      p.style.textDecorationColor = "grey";
    } else {
      p.style.textDecoration = "none";
    }
  });

}


function deleteTask() {
  const deleteButtons = document.querySelectorAll('.delete-task');

  deleteButtons.forEach((button) => {
    button.addEventListener('click', function () {
      this.parentElement.remove();

      //one thing i learn here is that Arrow functions do not have their own 'this'
      //They use this from where the function was defined, not the button
      //this means refence of the thing that is running the code.
    });

  });
}
