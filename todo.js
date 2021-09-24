const addButton = document.querySelector('#btn');
const inputText = document.querySelector('#newitem');
const todoList = document.querySelector('#todolist');
const items = document.querySelectorAll('.item')

addButton.addEventListener('click', function (event) {
    const taskName = inputText.value;
    inputText.value = '';
    
    const divItem = document.createElement('div');
    divItem.classList.add('item');
    divItem.innerHTML = `
                <input type="checkbox" />
                <span class='taskname'>${taskName}</span>`;
    ajouterCroix(divItem);
    todoList.appendChild(divItem);
});

function ajouterCroix (item) {
     const croix = document.createElement('span');
     croix.classList.add('delete');
     croix.innerHTML = 'X';
     item.appendChild(croix);
     console.log(item);
     croix.addEventListener('click', function(event) {
         event.target.parentNode.remove()
     })
 }

 for (let item of items) {
     ajouterCroix(item)
}