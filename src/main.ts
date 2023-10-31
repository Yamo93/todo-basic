import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('App element is missing');

const input = document.createElement('input');
input.setAttribute('type', 'text');
app.appendChild(input)
console.log(input);

const button = document.createElement('button');
button.setAttribute('type', 'button');
button.textContent = 'add todo'
app.appendChild(button)
console.log(button);


button.addEventListener('click', () =>{
  const li = document.createElement('li')
  li.textContent = input.value
  list.appendChild(li)
  
})

const list = document.createElement('ul');
app.appendChild(list);
console.log(list);
