//JSON数据存储底部图标信息，是否active以及对应的image地址
footIconMap = {
    'WeChat':{isActive:true,
        location:['icons/微信.png','icons/微信active.png']
        },
    'friends':{isActive:false,
        location:['icons/通讯录.png','icons/通讯录active.png']

      },
    'findout':{isActive:false,
        location:['icons/发现.png','icons/发现active.png']
    },
    'me':{isActive:false,
        location:['icons/我.png','icons/我active.png']
    },
}

let footIcons = document.querySelector("footer");
let body = document.querySelector('iframe');
tapClick(); 
//点击切换页面事件
function tapClick (){
footIcons.addEventListener("touchend",function(e){
    if(e.target.tagName === "IMG"){
        //console.log(e.target.tagName);
        console.log(e.target.className);
        clear_icon();
        change_icon(e);
        body.src = `./${e.target.className}.html`;
    }
    
})
}

//改变图标
function clear_icon(){
    for(i in footIconMap){
        footIconMap[i].isActive = false;
    }
    for (let i=0; i<footIcons.children.length; i++){
        var name = footIcons.children[i].firstChild.className;
        var location = footIconMap[name].location[Number(footIconMap[name].isActive)];
        footIcons.children[i].firstChild.src = location;
    }

}
//使目标icon变绿色
function change_icon(e){
    footIconMap[e.target.className].isActive = true; 
    let index = Number(footIconMap[e.target.className].isActive);
    e.target.src = footIconMap[e.target.className].location[index];
    
}