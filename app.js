var input = document.getElementById('input');
var ol = document.querySelector('.ol')
var todoItem = document.querySelector('.todo-item')
var addIcon = document.querySelector('.add-icon');

addIcon.addEventListener('click',()=>{
    var li = document.createElement('li')
    ol.appendChild(li);
    li.innerText= input.value
})
