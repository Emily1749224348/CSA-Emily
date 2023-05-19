let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

let btns = document.querySelectorAll("button");

function smallMove(obj,speed){
    obj.style.left = obj.offsetLeft + speed + "px";
}
function bigMove(obj,speed,time){
    setTimeout(() => {
        smallMove(obj,speed);
    }, time)
}
//setTimeout方法
btns[0].onclick = function(){
    let s = 6;
    var time = 500;
    let interval = 100;
    // setTimeout(()=>{smallMove(box1,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box1,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box1,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box1,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box1,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box1,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box1,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box1,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box2,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box2,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box2,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box2,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box2,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box2,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box2,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box2,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box3,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box3,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box3,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box3,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box3,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box3,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box3,s)},time);
    // time+=500;
    // setTimeout(()=>{smallMove(box3,s)},time);
    // time+=500;
    for(let i=1;i<=8;i++){
        setTimeout(()=>{
            smallMove(box1,s);
        },time);
        time+=interval;
    }
    for(let i=1;i<=8;i++){
        setTimeout(()=>{
            smallMove(box2,s);
        },time);
        time+=interval;
    }
    for(let i=1;i<=8;i++){
        setTimeout(()=>{
            smallMove(box3,s);
        },time);
        time+=interval;
    }
}

//Promise 方法
btns[1].onclick = function(){
    let s = 4;
    let time = 100, interval = 50;
    let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            smallMove(box1,s)
        }, time);
        resolve(time+interval)
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box1,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box2,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    }).then((time) => {
        setTimeout(()=>{
            smallMove(box3,s);
        },time)
        return time+interval;
    });
}


//async await 方法
btns[2].onclick = function(){
    let time = 100, interval = 50, s = 4;
  
    let step = (obj,speed,time)=>{
        return new Promise ((res,rej)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            res(time+interval);
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        }).then((time)=>{
            setTimeout(()=>{
                smallMove(obj,speed);
            },time)
            return time+interval;
        })
    };
    async function func3(){
      //  let time = 100,  s = 4;
      let time1;
        var a = await step(box1,s,time).then((time)=>{
            time1 = time + interval;
        })
        // .then((time) => {
        //     var b = step(box2,s,time)
        //     return time+time
        // })
        // .then((time)=>{
        //     var c = step(box3,s,time)
        // })
        var b = await step(box2,s,time1).then((time)=>{
            time1 = time + interval;
        })
        var c = await step(box3,s,time1).then((time)=>{
            time1 = time + interval;
        })
    }
    func3();
}

