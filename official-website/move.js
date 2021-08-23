// function move(ele ,data , cb ){
//     clearInterval(ele.t);
//     ele.t = setInterval(() => {
//         var onoff = true;
//         for(var i in data){
//             var iNow = i ==="opacity" ? getStyle(ele,i)
//             var speed = (data[i] - iNow)/8;
//             speed = speed>0 ? Math.ceil(speed):Math.floor(speed);
//             ele.style[i] = i === "opacity" ? (iNow + speed)/100 : iNow + speed + "px";
//             if(iNow!=data[i]) onoff = false;
//         }
//         if(onoff){
//             clearInterval(ele.t);
//             cb && cb();
//         }
//     } ,30 );
// }

// function getStyle(ele,attr){
//     if(ele.currentStyle){
//         return ele.currentStyle[attr];
//     }else{
//         return getComputedStyle(ele, false)[attr];
//     }
// }







function move(ele, data, cb){
    clearInterval(ele.t);
    ele.t = setInterval(() => {
        var onoff = true;
        for(var i in data){
            // 获取当前值
            var iNow = i==="opacity" ? getStyle(ele,i) * 100 : parseInt(getStyle(ele,i));
            // 计算步长
            var speed = (data[i] - iNow)/8;
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
            // 设置属性
            ele.style[i] = i==="opacity" ? (iNow + speed)/100 : iNow + speed + "px";
            // 判断是否有属性没到目标
            if(iNow!=data[i]) onoff = false;
        }
        // 没有属性没到目标
        if(onoff){
            clearInterval(ele.t);
            cb && cb();
        }
    }, 30);
}

// css动画多方便，多炫酷，但是有兼容
// 而且，js动画是为了锻炼你的DOM操作，学习，练习
// 要求：move函数必须自己封装

function getStyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }else{
        return getComputedStyle(ele, false)[attr];
    }
}