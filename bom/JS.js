
let input=document.querySelector('.input');
let add=document.querySelector('.add');
let tasks=document.querySelector('.tasks');







let arrayofTasks =[];


if(window.localStorage.getItem('tasks')){
    arrayofTasks=JSON.parse(localStorage.getItem('tasks'));
}


getDataFromLocalStorage();



add.onclick=function(){
if (input.value !== ""){
addtaskstarray (input.value);
input.value="";

}
}


tasksDiv.addEventListener("click", (e) => {
    // Delete Button
    if (e.target.classList.contains("del")) {
      // Remove Task From Local Storage
      deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
      // Remove Element From Page
      e.target.parentElement.remove();
    }


function addtaskstarray(tasktext){
const task ={
    id : Date.now(),
    title: tasktext,
    completed : false,
};
arrayofTasks.push(task);
addelementstopage (arrayofTasks);
addtolocalstorage(arrayofTasks);
}





function addelementstopage(arrayofTasks){
    tasks.innerHTML=""//هو بيمسح القديم مش الجديد بحيث اللي يتضاف جديد (القديم +الجديد)
    arrayofTasks.forEach(function(task){

        let div =document.createElement('div');
        div.setAttribute('date-id',task.id);
        div.className='task';
        div.appendChild(document.createTextNode(task.title));
        let span= document.createElement('span');
        span.className='del';
        span.appendChild(document.createTextNode('delete'));
        div.appendChild(span);
        
        tasks.appendChild(div);
    } );

}


function addtolocalstorage(arrayofTasks){
    window.localStorage.setItem('tasks',JSON.stringify(arrayofTasks));
}


function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
      let tasks = JSON.parse(data);
      addelementstopage(tasks);
    }
  }


  function deleteTaskWith(taskId) {
    
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addDataToLocalStorageFrom(arrayOfTasks);
  }















