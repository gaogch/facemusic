function resize(originSize,type) {
    var type = type || "x";
    if (type == "x") {
        var cw = document.documentElement.clientWidth;
        var scale = cw / originSize * 100 + "px";
    } else if (type == "y") {
        var ch = document.documentElement.clientHeight;
        var scale = ch / originSize * 100 + "px";
    }

    document.getElementsByTagName("html")[0].style.fontSize = scale;

}

window.onload = function(){
    resize(1334,"y");

}