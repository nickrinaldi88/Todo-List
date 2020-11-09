const ul_node = document.createElement("ul");
const list_div = document.createElement('div');
list_div.setAttribute('id', 'list-div');
// list_div.appendChild(ul_node);


// const add_btn = document.getElementById('add-btn');
// add_btn.addEventListener("keypress", function(event){
//     if (event.keyCode === 13){
//         document.getElementById('add-btn').click();
//     }
// });

function createListElem() {
    const delete_btn = document.createElement('button');
    const complete_btn = document.createElement('button');

    delete_btn.setAttribute('id', 'del-btn');
    delete_btn.onclick = function() {
        this.parentElement.remove()
    };

    complete_btn.setAttribute('id', 'com-btn');
    complete_btn.innerHTML = '<i class="fas fa-check-square" "aria-hidden="true"></i>';

    delete_btn.innerHTML = '<i class="fas fa-trash-alt" "aria-hidden="true"></i>';


    const box_value = document.getElementById('input-box').value;

    const task = document.createTextNode(box_value);

    const li_node = document.createElement('li');

    li_node.setAttribute('id', 'li-task');
    li_node.setAttribute('class', 'uncompleted');


    li_node.appendChild(task);

    li_node.appendChild(complete_btn);
    li_node.appendChild(delete_btn);

    ul_node.appendChild(li_node);

    list_div.appendChild(ul_node);
    document.body.appendChild(list_div);

    complete_btn.onclick = function() {
        this.parentElement.style.textDecoration = 'line-through'
        this.parentElement.setAttribute('class', 'completed');
    }

}

function checkTasks() {
    const taskStatus = document.getElementById('task-completion').value;
    const comp = document.getElementsByClassName('completed');
    const uncomp = document.getElementsByClassName('uncompleted');

    if (taskStatus === 'Completed') {
        for (i = 0; i < uncomp.length; i++) {
            uncomp[i].style.visibility = 'hidden';
        }

        for (m = 0; m < comp.length; m++) {
            comp[m].style.visibility = 'visible'
        }
    } else if (taskStatus === 'Uncompleted') {
        for (n = 0; n < comp.length; n++) {
            comp[n].style.visibility = 'hidden';
        }

        for (x = 0; x < uncomp.length; x++) {
            uncomp[x].style.visibility = 'visible';
        }

    } else {

        for (y = 0; y < comp.length; y++) {
            comp[y].style.visibility = 'visible';
        }

        for (z = 0; z < uncomp.length; z++) {
            uncomp[z].style.visibility = 'visible';
        }
    }

};









// https://www.codexworld.com/how-to/trigger-button-click-on-enter-key-press-javascript/


// - remove bullet point from start of element
// - add fade-out effect for li element when deleted
// - enter key press event
// - style and color