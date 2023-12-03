const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value ===''){
     alert("you must whrite something");   
    }
  else{
    let li = document. createElement("li");
    listcontainer.appendChild(li);
    li.innerHTML = inputBox.value;
    let span = document.createElement("span");
    listcontainer.appendChild(li);
    span.innerHTML = "u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();



  

    

    


