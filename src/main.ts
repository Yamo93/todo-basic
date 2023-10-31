import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <ul id="todo-list">
     <li>Göra läxan</li>  
   </ul>
  </div>
`;

const input = document.createElement("input")
input.setAttribute("type", "text")



const list = document.querySelector<HTMLLIElement>('#todo-list');
console.log(list);
