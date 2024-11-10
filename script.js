
let input = document.getElementById("find");
let click = document.getElementById("btn");
let tasks = document.getElementById("task-list");


function addtask(event){
     event.preventDefault();

     let tasktext = input.value;
     tasktext.ClassName = "tasktext";

     if(tasktext !== ""){
        
        let taskitem = document.createElement("li");
        taskitem.textContent = tasktext;
        taskitem.ClassName = "taskitem";

        let del = document.createElement("button");
        del.textContent = "delete";
        del.className = "deleteBtn";
        

        taskitem.appendChild(del);
        tasks.appendChild(taskitem)

        del.addEventListener("click", function(){
           tasks.removeChild(taskitem)
        });

        input.value = "";
     };
};

click.addEventListener("click", addtask)