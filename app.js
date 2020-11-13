const ul_node = document.createElement("ul");
const list_div = document.createElement("div");
list_div.setAttribute("id", "list-div");

function createListElem() {
  const complete_btn = document.createElement("button");
  const delete_btn = document.createElement("button");
  const buttons_span = document.createElement("span");

  buttons_span.appendChild(complete_btn);
  buttons_span.appendChild(delete_btn);
  buttons_span.setAttribute("class", "btn-span");

  delete_btn.setAttribute("id", "del-btn");
  delete_btn.onclick = function () {
    this.parentElement.parentElement.setAttribute("class", "removed");
    setTimeout(() => {
      this.parentElement.parentElement.remove();
    }, 1500);
  };

  complete_btn.setAttribute("id", "com-btn");
  complete_btn.innerHTML =
    '<i class="fas fa-check-square" aria-hidden="true"></i>';

  delete_btn.innerHTML = '<i class="fas fa-trash-alt" aria-hidden="true"></i>';

  const box_value = document.getElementById("input-box").value;

  const task = document.createTextNode(box_value);

  const li_node = document.createElement("li");

  li_node.setAttribute("id", "li-task");
  li_node.setAttribute("class", "uncompleted");
  li_node.appendChild(task);
  li_node.appendChild(buttons_span);

  ul_node.appendChild(li_node);

  list_div.appendChild(ul_node);

  document.body.appendChild(list_div);

  var first_click = true;

  complete_btn.onclick = function () {
    if (first_click) {
      this.parentElement.parentElement.setAttribute("class", "completed");
      first_click = false;
    } else {
      this.parentElement.parentElement.setAttribute("class", "uncompleted");
      first_click = true;
    }
  };
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    createListElem();
  }
});

function checkTasks() {
  const taskStatus = document.getElementById("task-completion").value;
  const comp = document.getElementsByClassName("completed");
  const uncomp = document.getElementsByClassName("uncompleted");

  if (taskStatus === "Completed") {
    for (i = 0; i < uncomp.length; i++) {
      uncomp[i].style.display = "none";
    }

    for (m = 0; m < comp.length; m++) {
      comp[m].style.display = "";
    }
  } else if (taskStatus === "Uncompleted") {
    for (n = 0; n < comp.length; n++) {
      comp[n].style.display = "none";
    }

    for (x = 0; x < uncomp.length; x++) {
      uncomp[x].style.display = "";
    }
  } else {
    for (y = 0; y < comp.length; y++) {
      comp[y].style.display = "";
    }

    for (z = 0; z < uncomp.length; z++) {
      uncomp[z].style.display = "";
    }
  }
}

// - decide on final color scheme
