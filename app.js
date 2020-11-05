const ul_node = document.createElement("ul")
const list_div = document.createElement('div');
// list_div.appendChild(ul_node);


// const add_btn = document.getElementById('add-btn');
// add_btn.addEventListener("keypress", function(event){
//     if (event.keyCode === 13){
//         document.getElementById('add-btn').click();
//     }
// });

function createListElem() {
    const delete_btn = document.createElement('button');
    delete_btn.setAttribute('id', 'del-btn');
    delete_btn.onclick = function(){
        this.parentElement.remove()
    };
    // li_item.addEventListener('click', 'remove')
    // delete_btn.innerText = 'delete';

    const box_value = document.getElementById('input-box').value;

    const task = document.createTextNode(box_value);

    const li_node = document.createElement('li');

    li_node.setAttribute('id', 'li-task');

    // appending text to li element
    li_node.appendChild(task)
    // appending button to li element *
    li_node.appendChild(delete_btn);
    // appending li element containing text and btn to ul element
    ul_node.appendChild(li_node)
    // appending ul element to div
    list_div.appendChild(ul_node); 
    document.body.appendChild(list_div);

    // console.log(main_div);
    // const main_div = document.getElementsByClassName("input-container");
    

}

function delete_task(){
    const li_item = document.querySelector("li");
    li_item.addEventListener('click', 'remove')

}

// https://www.codexworld.com/how-to/trigger-button-click-on-enter-key-press-javascript/

// - Add new item on enter
// - center our ul better
// - Figure out why text in li is not displaying horizontally
// - configure our drop down to sort list by completed, uncompleted, and all
// - display another button for completed in the li element, and add a strikethrough to the li text
// - style and color
// - add fade-out effect for li element when deleted
