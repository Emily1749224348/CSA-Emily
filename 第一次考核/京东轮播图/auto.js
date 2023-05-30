let slidePic = document.querySelectorAll('.playlist>li'),//轮播图片
    oSlider = document.querySelector('.slider');//轮播指示器
let index = 0;

let btnL = document.querySelector('.btnL');
let btnR = document.querySelector('.btnR');




create_circle();
oSlider.children[0].className = 'active';


document.querySelector('.banner').addEventListener('mouseenter',function(){
    clearInterval(t);
})
document.querySelector('.banner').addEventListener('mouseleave',function(){
    t = setInterval(()=>{
    change_slider(()=>{index++;index%=slidePic.length})
},3000)
})
/*功能函数    createSlider switch*/


//映射地图
var btnTypeMap = {
    btnR: function(){ change_slider(()=>{
        index++;
        index %= 8;
    });},
    btnL: function(){
        change_slider(()=>{
            index--;
        index = (8 + index) % 8;
        }); }
}

//事件里面只做index修改
oSlider.onclick = function(e){
   
    if(e.target.tagName.toLowerCase() === 'span'){
        change_slider(()=>{index = e.target.innerText ;})
    }

}

//左右按钮实现切换轮播图
document.querySelector('.btn_wrap').addEventListener('click',function(e){
    if(e.target.tagName.toLowerCase() === 'span'){
        let btnType = e.target.className;//btnL btnR
        if(btnTypeMap[btnType] && typeof btnTypeMap[btnType]==='function'){
            change_slider(
                btnTypeMap[btnType]()
            );
        }
    }
});


//只负责根据index修改需要展示的图片 和 小圆点的颜色修改
function change_slider(callback){
    oSlider.children[index].className='';
    slidePic[index].style.display = 'none';
    callback && callback();//这一步的意思是 左边如果为true则返回右边，左边如果为false则啥也不干
    //激活新的小圆点 和 换图 一定要在回调函数改变 index 之后

    oSlider.children[index].className='active';
    slidePic[index].style.display = 'block';
}

function create_circle(){//根据轮播图片的数量创建小圆点
    for(let i=0 ; i<slidePic.length; i++){
        
        oSlider.appendChild(document.createElement('span'));
        oSlider.children[i].innerText = i;
    }
//    oSlider.firstChild.className = 'active';
}

