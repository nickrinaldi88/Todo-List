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

    // li_item.addEventListener('click', 'remove')
    // delete_btn.innerText = 'delete';

    const box_value = document.getElementById('input-box').value;

    const task = document.createTextNode(box_value);

    const li_node = document.createElement('li');

    li_node.setAttribute('id', 'li-task');
    li_node.setAttribute('class', 'uncompleted');

    // appending text to li element
    li_node.appendChild(task);
    // appending button to li element *
    li_node.appendChild(complete_btn);
    li_node.appendChild(delete_btn);
    // appending li element containing text and btn to ul element
    ul_node.appendChild(li_node);
    // appending ul element to div
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
            // console.log(comp);
            comp[n].style.visibility = 'hidden';
        }

        for (x = 0; x < uncomp.length; x++) {
            // console.log(comp);
            uncomp[x].style.visibility = 'visible';
        }

    } else {

        for (y = 0; y < comp.length; y++) {
            // console.log(comp);
            comp[y].style.visibility = 'visible';
        }

        for (z = 0; z < uncomp.length; z++) {
            // console.log(comp);
            uncomp[z].style.visibility = 'visible';
        }
    }

};


// uncomp[i].style.visibility = 'hidden';
// all.style.visibility = 'hidden';





// else(taskStatus = 'All') {
//         for (i = 0; i < comp.length; i++) {
//             comp[i].style.visibility = 'visible';
//         }
//         for (n = 0; n < comp.length; n++) {
//             uncomp[n].style.visibility = 'visible';
//         }


// https://stackoverflow.com/questions/32678493/how-to-use-the-if-statement-javascript-with-the-select-tag-in-html


// if other option is selected (completed, uncompleted) make sure display is visible of opposing option










// https://www.codexworld.com/how-to/trigger-button-click-on-enter-key-press-javascript/

// - Add new item on enter
// - center our ul better
// - Figure out why text in li is not displaying horizontally
// - configure our drop down to sort list by completed, uncompleted, and all
// - display another button for completed in the li element, and add a strikethrough to the li text
// - style and color
// - remove bullet point from start of element
// - add fade-out effect for li element when deleted