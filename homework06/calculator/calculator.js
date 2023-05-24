//计算器
let op = document.getElementsByClassName("op");
let deletee = document.getElementsByClassName("delete")[0];
let num = document.getElementsByClassName("number");
let text  = document.getElementsByClassName("text")[0];
let equall = document.getElementsByClassName("equal")[0];

//删除
deletee.onclick = ()=>{text.value = ""};

op[0].onclick = ()=>{text.value += "/"};
op[1].onclick = ()=>{text.value += "*"};
op[2].onclick = ()=>{text.value += "-"};
op[3].onclick = ()=>{text.value += "+"};
op[4].onclick = ()=>{text.value += "%"};
// op[5].onclick = ()=>{text.value += "="};


num[0].onclick = ()=>{text.value += "1"};
num[1].onclick = ()=>{text.value += "2"};
num[2].onclick = ()=>{text.value += "3"};
num[3].onclick = ()=>{text.value += "4"};
num[4].onclick = ()=>{text.value += "5"};
num[5].onclick = ()=>{text.value += "6"};
num[6].onclick = ()=>{text.value += "7"};
num[7].onclick = ()=>{text.value += "8"};
num[8].onclick = ()=>{text.value += "9"};
num[9].onclick = ()=>{text.value += "0"};
num[10].onclick = ()=>{text.value += "00"};
num[11].onclick = ()=>{text.value += "."};

equall.onclick = ()=>{
    text.value = eval(text.value );
}

window.onkeydown = function(event){
    if(event.keyCode == 13){
        text.value = eval(text.value );
    }
}