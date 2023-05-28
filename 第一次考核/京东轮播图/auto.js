window.onload = function () {
    var imgList = document.querySelector('.imgList');
    var circle = document.querySelector('.circle');
    var thisIndex = 0;
    var imgListLi = imgList.children;
    var circleA = circle.children;
    var flag = true;

    let btnL =document.getElementsByClassName("previous")[0];
    let btnR = document.getElementsByClassName("next")[0];

    imgList.style.width = imgList.children.length * 620 + 'px';
    for (var i = 0; i < imgList.children.length; i++) {
        var aNode = document.createElement('a');
        aNode.setAttribute('index', i);	//设置自定义属性
        if (i == 0) {
            aNode.className = 'hover';
        }
        circle.appendChild(aNode);
    }
    circle.addEventListener('click', function (e) {
        if (flag) {
            flag = false;
            // console.log(e.target);
            if (e.target.nodeName != 'A') {
                return false;
            }
            thisIndex = e.target.getAttribute('index');
            // imgList.style.left = -thisIndex * 620 + 'px';
            slow(imgList, -thisIndex * 620, function () {
                flag = true;
            });
            circleChange();
        }
    })
    function autoChange() {
        setInterval(function () {
            if (flag) {
                flag = false;
                if (thisIndex >= circleA.length) {
                    thisIndex = 0;
                }
                slow(imgList, -thisIndex * 620, function () {
                    flag = true;
                });
                circleChange();
                thisIndex++;
            }
        }, 3000);
    }
    function circleChange() {
        for (var i = 0; i < circleA.length; i++) {
            circleA[i].className = '';
        }
        circleA[thisIndex].className = 'hover';
    }
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
autoChange();
}

