
    function addTodo() {
        var todoInput = document.getElementById("todoInput");
        var todoText = todoInput.value;
        if (todoText.trim() !== '') {
            var todoList = document.getElementById("todoList");
            var todoItem = document.createElement("div");
            todoItem.classList.add("todo-item");
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            var textNode = document.createTextNode(todoText);
            todoItem.appendChild(checkbox);
            todoItem.appendChild(textNode);
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    }
