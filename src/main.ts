import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('App element is missing');

const input = document.createElement('input');
input.setAttribute('type', 'text');
app.appendChild(input);
console.log(input);

const button = document.createElement('button');
button.setAttribute('type', 'button');
button.textContent = 'add todo';
app.appendChild(button);
console.log(button);

const list = document.createElement('ul');
app.appendChild(list);
console.log(list);

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    const removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'button');
    removeButton.textContent = 'Remove todo';
    li.appendChild(removeButton);
    const updateButton = document.createElement('button');
    updateButton.setAttribute('type', 'button');
    updateButton.textContent = 'Update todo';
    li.appendChild(updateButton);

    removeButton.addEventListener('click', () => {
        if (confirm('Do you want to delete this task')) {
            li.remove();
        }
    });
    updateButton.addEventListener('click', () => {
        const todoUpdate = prompt('Update your todo');

        if (todoUpdate === null) {
          return
            
        } else if (todoUpdate === ''){
          alert('You must enter a value')
        }
        else {
          li.textContent = todoUpdate
          li.appendChild(removeButton)
          li.appendChild(updateButton)
        }
    });
});
