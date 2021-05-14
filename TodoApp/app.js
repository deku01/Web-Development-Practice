const inp = document.getElementById('todoItem');
const btn = document.getElementById('addTodo');
const list = document.getElementById('list');

btn.onclick = function(e){
    const todoText = inp.value;
    if(todoText!==""){
        const li = document.createElement('li');
        li.innerText = todoText;
        li.onclick = function(e) {
            e.target.remove();
        }
        list.append(li);
        inp.value="";
    }
}

