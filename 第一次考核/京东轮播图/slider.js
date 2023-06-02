//本代码实现轮播图的原理是改变marginLeft 达到滑动的效果
const picWidth = 700;
let index = 0;
let playlist = document.querySelector('.playlist');
let playPic = document.querySelectorAll(".playlist>li");
let btnWrap = document.querySelector('.btn_wrap');
let slider = document.querySelector('.slider');
let tapMap = {
    'btnL': function(){
	    index--;
		index = (index + playPic.length)%playPic.length;
		},
	'btnR':function(){
		index++;
		index%=playPic.length;
		}
};
		
init();
auto_translate(); 

//点击左右按钮事件
btnWrap.addEventListener('click',function(e){
	e = e || window.event;
	if(e.target.tagName.toLowerCase()==='span'){
		let btn = e.target.className;
		if(tapMap[btn] && typeof tapMap[btn]==='function'){
		    move(tapMap[btn]);	
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
	//将大盒子的宽度调整为图片数量*图片宽度
	playlist.style.width = `${playPic.length*100}%`;
	//动态生成指示器
	for(let i=0; i<playPic.length; i++){
		slider.appendChild(document.createElement('span'));
		slider.children[i].innerText = i;
	}			
	slider.children[0].className = 'active';
}
//实现图片轮播
function move(callback){
    // playlist.style =` 
    // width:800%;
    // transform: translateX(700px);
    // transition:.5s;
    // transition-timing-function: linear;
    // transition-property: margin-left;`

	slider.children[index].className = '';
			//callback为修改index的代码
	callback && callback();
    slider.children[index].className = 'active'  ;
    animation(playlist,-index*picWidth);
//	playlist.style.marginLeft = `${-index*picWidth}px`;
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
    var speed  = (target - obj.offsetLeft) / 100;
    t=setInterval(()=>{
        obj.style.marginLeft = `${obj.offsetLeft + speed}px`;
    },15)
    setTimeout(()=>{
        clearInterval(t);
    },1500)
}

//实现自动轮播，并且在鼠标移入轮播图的时候停止轮播
function auto_translate(){
  
    timer = setInterval(()=>{
        move(function(){
            index++;
            index%=playPic.length;
            });
    },4000);
    document.querySelector('.banner').addEventListener('mouseover',()=>{
    clearInterval(timer);
});
    document.querySelector('.banner').addEventListener('mouseleave',()=>{
    timer = setInterval(()=>{
        move(function(){
            index++;
            index%=playPic.length;
            });
    },4000);
});
}