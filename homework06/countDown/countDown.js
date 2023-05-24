//2024倒计时
//1970年1月1日0时0分0秒到当前目标距离的毫秒数
var countDate = new Date('Jan 1, 2024 00:00:00').getTime();


function newYear() {
    //1970年1月1日0时0分0秒与当前时间距离的毫秒数
    var now = new Date().getTime();
        gap = countDate - now;

        var second = 1000;//1000毫秒
        var minute = second * 60;
        var hour = minute*60;
        var day = hour * 24;

        var d = Math.floor(gap/(day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) /(minute));
        var s = Math.floor((gap % (minute)) / (second));

        document.getElementById("day").innerText = d;
        document.getElementById("hour").innerText = h;
        document.getElementById("minute").innerText = m;
        document.getElementById("second").innerText = s;

}

setInterval(function(){
    newYear();
},1000);


