//本代码实现轮播图的原理是改变marginLeft 达到滑动的效果
/**
 * 只需要考虑两个特殊情况
 * next: 如果当前是第八页，点击btnR ，让ul过渡到下标8的p0图，视觉上就是左滑变为第一张图
 * 
 * prev:如果当前p0,下标8，点击右按钮，让index切换到0位置直接修改变化到下标0对应的marginLeft，
 * 再进行index++ 慢慢过渡到p1(1)
 */
const picWidth = 700;
let index = 0;
let playlist = document.querySelector('.playlist');
let playPic = document.querySelectorAll(".playlist>li");
let btnWrap = document.querySelector('.btn_wrap');
let slider = document.querySelector('.slider');
let tapMap = {
    'btnL': function(e){
       move(()=>{  
        if(index === 0){
            index = playPic.length-1;
            playlist.style.marginLeft = -index*picWidth + 'px';   
        }     
        index--;
		index = (index + playPic.length)%playPic.length;
       })
	     
		},
	'btnR':function(e){ 
        move(function(){
           if(index === playPic.length - 1)
           {
                index = 0;
                playlist.style.marginLeft = `0px`;
           } 
            index++ ;  
           });
        }
}
init();
console.log(playPic.length);

auto_translate(); 


//点击左右按钮事件
btnWrap.addEventListener('click',function(e){
	e = e || window.event;
	if(e.target.tagName.toLowerCase()==='span'){
		let btn = e.target.className;
		if(tapMap[btn] && typeof tapMap[btn]==='function'){
		    //move(tapMap[btn]);	
            tapMap[btn]();    
        }

		}
	
},false)
		
slider.addEventListener('click',(e)=>{
    e = e || window.event;
    if(e.target.tagName.toLowerCase() === 'span'){
        let slideBtn = e.target;
 
        move(()=>{
            index = slideBtn.innerText;
        },false)   
    }
})

function init(){
	//将大盒子的宽度调整为图片数量*图片宽度,因为添加了一张图在最后，所以图片数量加1，这个要提前做
	playlist.style.width = `${(playPic.length + 1)*100 }%`;
	//动态生成指示器
	for(let i=0; i< playPic.length ; i++){
        
		slider.appendChild(document.createElement('span'));
		slider.children[i].innerText = i;
        if(i == 0){
            slider.children[i].className= `active`;
        }
	}			
//	slider.children[0].className = 'active';
    playlist.appendChild(playPic[0].cloneNode(true));

    playPic = document.querySelectorAll(".playlist li");
    
}

//实现图片轮播
function move(callback){
    // playlist.style =` 
    // width:800%;
    // transform: translateX(700px);
    // transition:.5s;
    // transition-timing-function: linear;
    // transition-property: margin-left;`
    
	slider.children[index % (playPic.length - 1)].className = '';
			//callback为修改index的代码
	callback && callback();
    slider.children[index % (playPic.length - 1)].className = "active"  ;
    animation(playlist,-index*picWidth);
}



//移动图片的动画函数，不是我写的
function slow(obj, target, callback) {
    obj.myInter = setInterval(function () {
        var offsetLeft = obj.offsetLeft;
        var num = (target - offsetLeft) / 10;
        num > 0 ? num = Math.ceil(num) : num = Math.floor(num);
        if (offsetLeft == target) {
            clearInterval(obj.myInter);
            callback && callback();
        } else {
            obj.style.left = offsetLeft + num + 'px';
        }
    }, 10)
}
//图片滑动效果的函数，是我写的
function animation(obj,target){
    var speed  = (target - obj.offsetLeft) / 5;
    t=setInterval(()=>{
        obj.style.marginLeft = `${obj.offsetLeft + speed}px`;
    },100)
    setTimeout(()=>{
        clearInterval(t);
    },500)
}

//实现自动轮播，并且在鼠标移入轮播图的时候停止轮播
function auto_translate(){
    timer = setInterval(()=>{
        tapMap['btnR']();
    },4000);
    document.querySelector('.banner').addEventListener('mouseover',()=>{
    clearInterval(timer);
});
    document.querySelector('.banner').addEventListener('mouseleave',()=>{
    timer = setInterval(()=>{
       
        tapMap['btnR']();
},4000);
    });
}