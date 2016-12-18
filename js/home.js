function resize(originSize,type){
    var type = type || "x";
    if(type == "x"){
        var cw = document.documentElement.clientWidth;
        var scale = cw/originSize * 100 + "px";
    }else if(type == "y"){
        var ch = document.documentElement.clientHeight;
        var scale = ch/originSize * 100 + "px";
    }
    document.getElementsByTagName("html")[0].style.fontSize = scale;
    return scale;
}
var myScroll;
function loaded(){
    myScroll = new IScroll(".wrapper",{
        mouseWheel:true,
        bounce:true
    });

    document.addEventListener("touchmove",function(e){e.preventDefault();})
}

// var menubtn = document.getElementsByClassName("menubtn");
function menubtns(){
    var flag = true;
    touch.on("header","tap",".menubtn",function(){
        $("header").css({
            marginLeft:"4.8rem",
            transition:"margin-left 1s ease"
        });
        $(".containbox").css({
            marginLeft:"4.8rem",
            transition:"margin-left 1s ease"
        });
        $(".bfmusic").css({
            marginLeft:"4.8rem",
            transition:"margin-left 1s ease"
        });
        flag = false;
    });
    touch.on("body","drag",".menubox",function(e){
        if(!flag){
            if(e.direction == "left" && e.x<-100){
                $("header").css({
                    marginLeft:"0rem",
                    transition:"margin-left 1s ease"
                });
                $(".containbox").css({
                    marginLeft:"0rem",
                    transition:"margin-left 1s ease"
                });
                $(".bfmusic").css({
                    marginLeft:"0rem",
                    transition:"margin-left 1s ease"
                });
                flag = true;
            }
        }
    })
}

function ymtz(){
    var tza = $(".navlist a");
    touch.on(".navbox","tap",".navlist a",function(){
        var aa = $(this).attr("href");
        location.href = aa;
    })
}



