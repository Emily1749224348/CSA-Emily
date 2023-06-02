let pages = document.querySelectorAll(".PlayPage")
let playlist = document.querySelector(".mod_playlist_2");
let page1 = document.getElementById("Page1");

let circleBox = document.querySelector(".slide_circle");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let btnBox =  document.querySelector(".btnBox");
let map = document.querySelector(".Wrap");
let index = 0;
const pageWidth = 1100;

let indexTap = {
    'prev':function(){
        index--;
        index = (index+pages.length) % pages.length;
    },
    'next':function(){
        index++;
        index %= pages.length;
    }
}


//动态生成小圆点
create_circle();
click_event();
btn_animation();
t = setInterval(()=>{
slide(indexTap['next']);
},6000);

function click_event(){
   btnBox.addEventListener('click',function(e){
        if(indexTap[e.target.className]){
            slide(indexTap[e.target.className]);
        }
    });
    // prev.addEventListener('click',function(){
    //     slide(indexTap[prev.className]);
    // })
    // next.addEventListener('click',function(){
    //     slide(indexTap[next.className]);
    // })
    console.log(document.querySelector(".btnBox"));
    circleBox.addEventListener('click',(e)=>{
        e = e || window.event;
        if(e.target.tagName.toLowerCase() === 'span'){
            let slideBtn = e.target;
            slide(()=>{
                index = slideBtn.innerText;
            },false)   
        }
    })
}

//动态生成索引小圆点
function create_circle(){
    for(let i = 0; i < pages.length; i++){
    let cir = document.createElement("span");
    cir.innerText = i;
    circleBox.appendChild(cir);
    }
    circleBox.children[0].className = "active";
}


function slide(callback){
    circleBox.children[index].className = '';
    callback && callback();
    circleBox.children[index].className = 'active';
    animation(playlist,-index*pageWidth);
    console.log('use');
}


function animation(obj, target){
    var speed  = (target - obj.offsetLeft) / 10;
    t=setInterval(()=>{
        obj.style.marginLeft = `${obj.offsetLeft + speed}px`;
    },100)
    setTimeout(()=>{
        clearInterval(t);
    },1000)
  // obj.style.marginLeft = `${target}px`
}

//移动到轮播图区域才显示左右按钮
function btn_animation(){
    
    map.addEventListener("mouseenter",()=>{
   
    prev.style.transform = "translateX(10px)";
    prev.style.transition = "0.5s";
    next.style.transform = "translateX(-10px)";
    next.style.transition = "0.5s";
    prev.style.visibility = "visible";
    next.style.visibility = "visible";     
    });
    map.onmouseleave = function(){
    prev.style.transform = "translateX(-60px)";
    prev.style.transition = "1s";   
    next.style.transform = "translateX(60px)";
    next.style.transition = "1s"; 
    prev.style.visibility = "hidden";
    next.style.visibility = "hidden";    
    clearInterval(t);
   
    }
    prev.onmouseover = function(){
    prev.style.visibility = "visible";   
    next.style.visibility = "visible";  
    }
    next.onmouseover = function(){
    prev.style.left="10px";
    next.style.right="10px";
    next.style.visibility = "visible";  
    prev.style.visibility = "visible";   
    }
}