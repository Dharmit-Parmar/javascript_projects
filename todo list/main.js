let input =  document.getElementById("taskInput");
let add_btn =  document.getElementById("addBtn");
let taskList =  document.getElementById("taskList");
// let notificationbox = document.getElementById("notification");
 
function notification(message){
    let notificationbox = document.createElement("div");
    notificationbox.classList.add("notification");
    notificationbox.style.display = "flex";
    notificationbox.style.top = "2%";
    let notify_text = document.createElement("h4");
    notify_text.textContent = message;
    notificationbox.appendChild(notify_text);
    document.body.appendChild(notificationbox);
     setTimeout(() => {
         notify_text.classList.add("fade-out");
     
    setTimeout(() => {
        notify_text.remove(); 
         notificationbox.style.display = "none"; 
    }, 500);
}, 700);

}


add_btn.addEventListener("click", function() {
    let text = input.value.trim();

    if(text === ""){ return}
    let li = document.createElement("li");
    li.textContent = text;
     taskList.appendChild(li);
    input.value = "";
    
    let deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn"); 
    deletebtn.textContent = "Delete";
    li.appendChild(deletebtn);
   
   
     deletebtn.addEventListener("click", function(e) {
        e.stopPropagation();
        notification(`${text} has done successfully!`);
        li.remove();
    });
         
  

});