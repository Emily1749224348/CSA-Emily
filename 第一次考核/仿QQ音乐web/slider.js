
// let Page1 = document.getElementById("Page1");
// let Page2 = document.getElementById("Page2");
// let Page3 = document.getElementById("Page3");
// let Page4 = document.getElementById("Page4");
// let Page5 = document.getElementById("Page5");

let map = document.getElementsByClassName(".mod_playlist_2")[0];
let Pages = document.getElementsByClassName("PlayPage")
let aNode = document.getElementsByClassName("ca");
Pages[4].style.visibility = "hidden";
Pages[1].style.visibility = "hidden";
Pages[3].style.visibility = "hidden";
Pages[2].style.visibility = "hidden";

let btnL = document.getElementsByClassName("btnLeft")[0];
let btnR = document.getElementsByClassName("btnRight")[0];


console.log(aNode);
let num = 1;
let origin = 230;
//滑动一个页面需要一定1170像素
const PageLength = 950;
click_event()
button_event()



//以下是各种函数


function click_event(){
    aNode[0].onclick = ()=>{
   ChangePage(num,1);
   circleChange(num,1);
   num=1;
    }
    aNode[1].onclick = ()=>{
        ChangePage(num,2);
        circleChange(num,2);
        num=2;
    }
    aNode[2].onclick = ()=>{
    ChangePage(num,3);
    circleChange(num,3);
    num=3;
    }
    aNode[3].onclick = ()=>{
    ChangePage(num,4);
    circleChange(num,4);
    num=4;
    }
    aNode[4].onclick = ()=>{
    ChangePage(num,5);
    circleChange(num,5);
    num=5;
    }

}

function button_event(){
    
    btnL.onclick = function(){
       
        let target=num-1 ;
        if(num ==1){target = 5;}
        ChangePage(num,target);
        circleChange(num,target);
        num=target;
       
    }
    btnR.onclick = function(){
       
        let target = num+1;
        if(num==5){target = 1;}
        ChangePage(num,target);
        circleChange(num,target);
        num=target;
      
    }
}

function timer(){
    t = setTimeout( ()=>{ 
        timer();
    }, 1000*4);
    timer() //是我们自己定义的一个函数，这是它内部的代码：
     
    function timer() {
        autoChange(); // 调用图片切换函数
        // 图片切换后重新设置一个定时器
        t = setTimeout( ()=>{ timer(); }, 1000*4);
    }
}

function autoChange(){
    let target = num+1;
    if(num==5){ target = 1;}
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
// function moveL(speed,distance){
//     Page1.style.marginLeft = Page1.offsetLeft  - distance +'px';
//     origin = Page1.style.marginLeft;
// }
// //页面右滑
// function moveR(speed,distance){
//     Page1.style.marginLeft =  Page1.offsetLeft + distance +'px';
//     origin = Page1.style.marginLeft;
// }
