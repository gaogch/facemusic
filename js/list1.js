// function lists(scale){
//     this.scale = scale;
//     this.div = $(".clalist");
//     this.cw = $(window).width();
//     this.ch = $(window).height();
// }

// lists.prototype = {
//     fluid:function(){
//         this.div[0].style.top = 0;
//         this.div[0].style.left = 0;
//         var space = 0.3*(parseInt(this.scale));
//         var arrw = [];
//         var arrh = [];
//         for(var i=0;i<this.div.length;i++){
//             if(i==0){
//                 arrw[i] = 0;
//                 arrh[i] = 0;
//             }else{
//                 arrw[i] = parseInt(this.div[i-1].clientWidth)+space;
//                 arrh[i] = parseInt(this.div[i-1].clientHeight)+space;
//             }
//         }
//         var w =[];
//         var h =[];
//         var x = 0;
//         var y = 0;
//         for(var j =0;j<arrw.length;j++){
//             var num = arrw[j];
//             var num1 = arrh[j];
//             if(num>0){
//                 x += num;
//                 y+= num1;
//             }
//             num--;
//             num1--;
//             if(x>=this.cw){
//                 x=0;
//             }
//             w[j] = x;
//             h[j] = y;
//         }
//         console.log(w);
//         console.log(h);
//         for(var i=0;i<w.length;i++){
//             this.div[i].style.left = w[i]+"px";
//             this.div[i].style.top = h[i]+"px";
//         }
//
//         }
// };

