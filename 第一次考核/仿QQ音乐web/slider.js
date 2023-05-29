
// let Page1 = document.getElementById("Page1");
// let Page2 = document.getElementById("Page2");
// let Page3 = document.getElementById("Page3");
// let Page4 = document.getElementById("Page4");
// let Page5 = document.getElementById("Page5");

let map = document.getElementsByClassName("mod_playlist")[0];
let Pages = document.getElementsByClassName("PlayPage")
let aNode = document.getElementsByClassName("ca");

Pages[4].style.visibility = "hidden";
Pages[1].style.visibility = "hidden";
Pages[3].style.visibility = "hidden";
Pages[2].style.visibility = "hidden";

let btnL = document.getElementsByClassName("btnLeft")[0];
let btnR = document.getElementsByClassName("btnRight")[0];
const timee = 5;

let num = 1;
let origin = 230;

circle_event()
button_event()
btn_animation()
//定时轮播功能
t=setInterval(()=>{autoChange();},1000*timee)

//指针悬浮时禁止自动轮播

document.querySelectorAll(".slide_item").onmouseenter = function(){
    clearInterval(t);
}

document.querySelectorAll(".slide_item").onmouseleave = function(){
t = setInterval( () => {
    autoChange();
},5000);    
}
//移动到轮播图区域才显示左右按钮
function btn_animation(){
    
map.addEventListener("mouseenter",()=>{
btnL.style.transform = "translateX(10px)";
btnL.style.transition = "0.5s";
btnR.style.transform = "translateX(-10px)";
btnR.style.transition = "0.5s";
btnL.style.visibility = "visible";
btnR.style.visibility = "visible";     
})
map.onmouseleave = function(){
btnL.style.transform = "translateX(-60px)";
btnL.style.transition = "1s";   
btnR.style.transform = "translateX(60px)";
btnR.style.transition = "1s"; 
btnL.style.visibility = "hidden";
btnR.style.visibility = "hidden";    
}
btnL.onmouseover = function(){
btnL.style.visibility = "visible";   
btnR.style.visibility = "visible";  
}
btnR.onmouseover = function(){
btnL.style.left="10px";
btnR.style.right="10px";
btnR.style.visibility = "visible";  
btnL.style.visibility = "visible";   
}
}


//以下是各种函数

//定时器
function timer(){
    autoChange();
    t=setTimeout(()=>{timer();},1000*timee)
}

//点击小圆点切换图片
function circle_event(){
    aNode[0].onclick = ()=>{
   clearInterval(t);
   ChangePage(num,1);
   circleChange(num,1);
   num=1;
   t = setInterval( () => {
    autoChange();
},1000*timee);
    }
    aNode[1].onclick = ()=>{
        clearInterval(t);
        ChangePage(num,2);
        circleChange(num,2);
        num=2;
    t = setInterval(() => {
        
    }, timeout);( () => {
    autoChange();
},1000*timee);
    }
    aNode[2].onclick = ()=>{
    clearInterval(t);    
    ChangePage(num,3);
    circleChange(num,3);
    num=3;
    t = setInterval( () => {
    autoChange();
},1000*timee);
    }
    aNode[3].onclick = ()=>{
    clearInterval(t);          
    ChangePage(num,4);
    circleChange(num,4);
    num=4;
    t = setTimeout( () => {
    autoChange();
},1000*timee);
    }
    aNode[4].onclick = ()=>{
    clearInterval(t);            
    ChangePage(num,5);
    circleChange(num,5);
    num=5;
    t = setInterval( () => {
    autoChange();
},1000*timee);
    }
}

//点击左右按钮切换图片
function button_event(){
    
    btnL.onclick = function(){
        clearInterval(t);  

   
        let target=num-1 ;
        if(num ==1){target = 5;}
        ChangePage(num,target);
        circleChange(num,target);
        num=target; 
        t = setInterval( () => {
        autoChange();
    },1000*timee); 
      
       
    }
    btnR.onclick = function(){
       clearInterval(t);

      
        let target = num+1;
        if(num==5){target = 1;}
        ChangePage(num,target);
        circleChange(num,target);
        num=target;

        t = setInterval(() => {
            
        }, timeout);( () => {
        autoChange();
    },1000*timee); 
     }

    
}

//自动切换图片功能
function autoChange(){
    let target = num+1;
    if(num==5){
    target =  1;
    }
    ChangePage(num,target);
    circleChange(num,target);
    num=target;
}


//换小圆点
function circleChange(now,target){
    aNode[now-1].className="ca";
    aNode[target-1].className = "ca hover"
}
//换页
function ChangePage(now,target){
    Pages[now-1].style.visibility = "hidden";
    Pages[target-1].style.visibility = "visible";
}

// //页面左滑
// function slideL(obj){
//    obj.style.transform = "translateX(-300px)";
//    obj.style.transition = "3s";
// }
// //页面右滑
// function slideR(obj){
//     obj.style.transform = "translateX(300px)"
// }
