const ul_node = document.createElement("ul");
document.body.appendChild(ul_node);

function createListElem() {
    const del_btn = document.createElement('button');
    del_btn.setAttribute('id', 'del-btn')
    del_btn.setAttribute('onclick', delete_task())
    // document.body.appendChild(list_node);
    // when button clicked element below placed onto page
    // grab input content
    const box_value = document.getElementById('input-box').value;
    // create tex node of that value
    const task = document.createTextNode(box_value);
    // create ul node
    const li_node = document.createElement('li');
    // add  text to the ul
    li_node.appendChild(task)
    li_node.appendChild(del_btn)
    // add ul to list
    ul_node.appendChild(li_node)
    // add list to body
    // document.body.appendChild(list_node);
    // console.log(box_value);
    
}

function delete_task(){
    const obj = document.querySelector('li');
    obj.remove(); 1
}

createListElem();



// Todo:
// -Generate button in each ul element to delete that element
// -Center our list below the todo list
// -resize 