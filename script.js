var removeI = '<i class="fa fa-trash"></i>';
var completeI = ' <i class="fa fa-check"></i>'; 

document.getElementById('add').addEventListener('click', function()  {
    var value = document.getElementById('item').value;
    if (value){
     addItemTodo(value);
     document.getElementById('item').value = '';
    }
});

function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    
    parent.removeChild(item);
}

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    var target = (id === 'todo') ? document.getElementById('completed'): document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

function addItemTodo(text) {
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text; 

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeI;

    //add click for removing items
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeI;

    //add click for completing items
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
    
}