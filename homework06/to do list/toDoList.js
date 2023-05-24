let Submit = document.getElementsByClassName("add")[0];
let text = document.getElementById("textbox");
let content = document.getElementsByClassName("todo-list")[0];

let checkbox = document.querySelectorAll(".checkbox");

Submit.onclick = ()=>{
   if(text.value!="")
   { 
    let new_item = document.createElement("div");
    new_item.className="todo-item";
    new_item.innerHTML = '<div class="todo-content">'+
                        '<div class="todo-text">'+
                        (text.value)+
                        '</div>'+
                        '<input type="submit" value="delete"  class="checkbox">'+
                        '</div>';
    //给元素绑定事件
    new_item.querySelector(".checkbox").onclick = function(){
        if(new_item.querySelector(".todo-text").style.textDecoration =="line-through" ){
            let todo_text = new_item.querySelector(".todo-text");
            todo_text.style.textDecoration = "none";
            todo_text.style.color = "black";
            document.querySelector(".todo-content").appendChild(new_item);
        }
        else{
        let todo_text = new_item.querySelector(".todo-text");
        todo_text.style.textDecoration = "line-through";
        todo_text.style.color = "#fbf2e3";
        document.querySelector(".done-content").appendChild(new_item)
        
        }
    }
    content.appendChild(new_item);
    
    text.value='';}
}


text.onkeydown = function(event){
    if(event.keyCode == 13 && text.value!=""){
        let new_item = document.createElement("div");
        new_item.className="todo-item";
    //    绘制元素
        new_item.innerHTML = '<div class="todo-content">'+
                            '<div class="todo-text">'+
                            (text.value)+
                            '</div>'+
                            '<input type="submit" value="delete"  class="checkbox">'+
           
                            '</div>';
        //给元素绑定事件
        new_item.querySelector(".checkbox").onclick = function(){
            if(new_item.querySelector(".todo-text").style.textDecoration =="line-through" ){
                let todo_text = new_item.querySelector(".todo-text");
                todo_text.style.textDecoration = "none";
                todo_text.style.color = "black";
                document.querySelector(".todo-content").appendChild(new_item);
            }
            else{
            let todo_text = new_item.querySelector(".todo-text");
            todo_text.style.textDecoration = "line-through";
            todo_text.style.color = "#fbf2e3";
            document.querySelector(".done-content").appendChild(new_item)
            
            }
        }

        content.appendChild(new_item);
        
        text.value='';
    }
}


checkbox.forEach((check)=>{
    check.onclick = function(){
        if(check.parentElement.querySelector(".todo-text").style.textDecoration =="line-through" ){
            let todo_text = check.parentElement.querySelector(".todo-text");
            todo_text.style.textDecoration = "none";
            todo_text.style.color = "black";
            document.querySelector(".todo-content").appendChild(this.parentElement);
        }
        else{
        let todo_text = check.parentElement.querySelector(".todo-text");
        todo_text.style.textDecoration = "line-through";
        todo_text.style.color = "#fbf2e3";
        document.querySelector(".done-content").appendChild(check.parentElement)
        
        }
    }    
})
