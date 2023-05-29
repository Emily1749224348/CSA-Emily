let oPic = document.querySelector('#pic');
let oSlider = document.querySelector('.slider');
let index = 0;

let btnL = document.querySelector('.btnL');
let btnR = document.querySelector('.btnR');

//事件里面只做index修改
oSlider.onclick = function(e){
    if(e.target.tagName.toLowerCase() === 'span'){
        change_slider(()=>{
            index = e.target.innerText -1 ;
        })
    }
}

btnR.onclick = function(){
    change_slider(()=>{
        index++;
        index %= 8;
    });
}

btnL.onclick = function() {
    change_slider(()=>{
        index--;
    index = (8 + index) % 8;
    });   
}


//换图片的函数
function change_pic(){
    oPic.src = `q${index+1}.jpg`;
}

//只负责根据index修改需要展示的图片 和 小圆点的颜色修改
function change_slider(callback){
    oSlider.children[index].style.background = 'white';
    callback && callback();
    //激活新的小圆点 和 换图 一定要在回调函数改变 index 之后
    change_pic();
    oSlider.children[index].style.background = 'red';
}

t = setInterval(()=>{
    change_slider(()=>{
        index++;
        index%=8;
    })
},3000)