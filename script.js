document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#submit").disabled = true;

  document.querySelector("#task").onkeyup = function() {
    if (document.querySelector("#task").value.length > 5) {
      document.querySelector("#submit").disabled = false;
    } else {
      document.querySelector("#submit").disabled = true;
    }
  }

  document.querySelector("form").onsubmit = function() {
    var task = document.querySelector("#task").value;
    var li = document.createElement("li");
    li.innerHTML = task;

    var removeButton = document.createElement("button");
    removeButton.innerHTML = "\u00d7";
    removeButton.onclick = function() {
      li.remove();
    }

    var editButton = document.createElement("button");
    editButton.innerHTML = ("edit");
    editButton.onclick = function() {
      var newTask = prompt("Enter the new task:");
      if (newTask !== null && newTask.trim() !== "") {
        li.innerHTML = newTask.trim();
      }
    }
    li.appendChild(removeButton);
    li.appendChild(editButton);
    document.querySelector("#tasks").appendChild(li);
    document.querySelector("#task").value = "";

    return false;
  }
});