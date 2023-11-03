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

let todo: (string | null)[] = []

button.addEventListener('click', () => {
    todo.push(input.value);
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
    const addDescription = document.createElement('button');
    addDescription.setAttribute('type', 'button');
    addDescription.textContent = 'Description todo';
    li.appendChild(addDescription);

    
    input.value = ''

    removeButton.addEventListener('click', () => {
        if (confirm('Do you want to delete this task')) {
            li.remove();

            const deleteArray = todo.indexOf(li.textContent)
            if (deleteArray > -1) {
              todo.splice(deleteArray, 1);
          }
        }
    });
    updateButton.addEventListener('click', () => {
        const todoUpdate = prompt('Update your todo');

        if (todoUpdate === null) {
            return;
        } else if (todoUpdate === '') {
            alert('You must enter a value');
        } else {
            li.textContent = todoUpdate;
            li.appendChild(removeButton);
            li.appendChild(updateButton);
            li.appendChild(addDescription)
        }
    });
     
    addDescription.addEventListener('click',()=>{
      const description = prompt('Give a description')
      const p = document.createElement('p')

      
      if (description === null) {
        return;
    } else if (description === '') {
        alert('You must enter a value');
    } else {
        p.textContent = description;
        li.appendChild(p)
        li.appendChild(removeButton);
        li.appendChild(updateButton);
    }
    })

    li.addEventListener('click',()=>{
        li.style.textDecoration = 'line-through'
    })

    
   
});
