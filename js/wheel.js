window.onload=function(){
//顶部下拉开始
var topbox=$(".top_box")[0]
var topmidbox=$(".top_midbox",topbox)[0];
var topdrop=$(".top_drop",topmidbox)[0];
var weixin=$(".weixin")[0];
var weixinimg=$(".weixinimg",weixin)[0];
var shouji=$(".shouji")[0];
var shoujiimg=$(".shoujiimg",shouji)[0];
var drop=$(".drop",topdrop)[0];
var weixina=$(".weixina",weixin)[0];
  hover(topdrop,function(){
     drop.style.display="block"; 
     topdrop.style.background="#fff";
     topdrop.style.zIndex=20;
  },function(){
     drop.style.display="none";
     topdrop.style.background="";
  })
 hover(weixin,function(){
    weixinimg.style.display="block";
    weixina.style.background="#fff";
    weixina.style.zIndex=20;
 },function(){
     weixinimg.style.display="none";
     weixina.style.background="";

 })
 hover(shouji,function(){
    shoujiimg.style.display="block";
    shoujia.style.background="#fff";
    shoujia.style.zIndex=20;
 },function(){
    shoujiimg.style.display="none";
    shoujia.style.background="";

 })
  //楼层跳级
 var position=$(".position")[0];
 var rights=$(".right",position);
 var tops=[];
 var floors=$(".floors");
 // var floorimgs=$("img",rights);
 //返va回顶部
var back=$(".back")[0];
var ch=document.documentElement.clientHeight;
back.onclick=function(){
      animate(document.documentElement,{scrollTop:0},100)
      animate(document.body,{scrollTop:0},100)
    } 
 for (var i = 0; i < floors.length; i++) {
   var floorsh=floors[i].offsetTop;
   tops.push(floorsh);
 };
 //按需加载
 var abox=$(".abox");
 var arr=[];
 var flags=[];
 for (var i = 0; i < abox.length; i++) {
  var aboxh=abox[i].offsetTop;
   arr.push(aboxh);
   flags.push(true);
 };
 window.onscroll=function(){
    var stop=document.documentElement.scrollTop||document.body.scrollTop;
    document.title=document.documentElement.scrollTop||document.body.scrollTop;
    //滚轮滚动显示
      for (var i= 0; i < tops.length; i++) {
         if(tops[i]<stop+800){
          var rightmask=$(".rightmask");
               for (var j = 0; j < rightmask.length; j++) {
                 rightmask[j].style.display="none";
              };
              rightmask[i].style.display="block";
        }
    }; 
    //鼠标移入事件实现效果
      var rightmask=$(".rightmask");
      var rightimgs=$("img",position);
      for (var i = 0; i < rightimgs.length; i++) {
            rightimgs[i].index=i;
            rightimgs[i].onmouseover=function(){
               for (var j = 0; j < rightmask.length; j++) {
                 rightmask[j].style.display="none";
              };
              rightmask[this.index].style.display="block";
           };
            }
     var stop=document.documentElement.scrollTop||document.body.scrollTop;
       if(stop>ch){
         back.style.display="block";
       }else{
          back.style.display="none";
       }
    //按需加载
    for (var i = 0; i < arr.length; i++) {
      if(arr[i]<=stop+ch){
        var img=$("img",abox[i]);
        for (var j = 0; j < img.length;j++) {
          img[j].src=img[j].getAttribute("asrc");
        };
      }
    };
 }
  //注意不应该写在滚动条监测中
 for (var i = 0; i <rights.length; i++) {
    rights[i].index=i;
    rights[i].onclick=function(){
       animate(document.documentElement,{scrollTop:tops[this.index]},500)
       animate(document.body,{scrollTop:tops[this.index]},500)
    }
  };
  //banner开始
    var wheelbox=getClass("wheel_box",document)[0];
    var as=wheelbox.getElementsByTagName('a')
    var indexBtn=getClass("index",wheelbox)[0]
    var lis=indexBtn.getElementsByTagName('li');
    var btn=getClass("btn",wheelbox)[0];
    var right=getClass("rightbtn",btn)[0];
    var left=getClass("leftbtn",btn)[0]; 
    var index=0;
     as[0].style.zIndex=10;//实现第一个图片出现
     //自动轮播
     lis[0].style.backgroundColor="red";
     var t=setInterval(move,1000);
     function move(){
        index++;
        if(index==as.length){index=0;}
        for (var i = 0; i < as.length; i++) {
           as[i].style.zIndex=0;
           lis[i].style.backgroundColor="";
       };
           as[index].style.zIndex=10; 
           lis[index].style.backgroundColor="red"
     };
     wheelbox.onmouseover=function(){
           clearInterval(t)
     }
     wheelbox.onmouseout=function(){
         t=setInterval(move,1000)
     }
     for (var i = 0; i < lis.length; i++) {
       lis[i].index=i;  
      lis[i].onclick=function(){
         for (var j = 0; j < as.length; j++){
                   as[j].style.zIndex=0;
                   lis[j].style.backgroundColor='';
               };
            as[this.index].style.zIndex=10;
            lis[this.index].style.backgroundColor="red" ;
         }
     };
     right.onclick=function(){
        move();
     }
    left.onclick=function(){
        index--;
        if(index<0){index=as.length-1;}
        for (var i = 0; i < as.length; i++) {
           as[i].style.zIndex=0;
           lis[i].style.backgroundColor="";
       };
           as[index].style.zIndex=10; 
           lis[index].style.backgroundColor="green"
     }
    var yin=getClass("banner_yin",document);
    var as1=getClass("banner_a",document);
    for (var i = 0; i < yin.length; i++) {
      yin[i].style.display="none";
    };
    for (var i = 0; i < as1.length; i++) {
      as1[i].index=i
            as1[i].onmouseover=function(){
              // alert(1)
          for (var j= 0; j < yin.length; j++) {
              yin[j].style.display="none";
          };
          yin[this.index].style.display="block"
      }
    };
    for (var i = 0; i < as.length; i++) {
       as[i].index=i;
       as[i].onmouseout=function(){
           for (var j= 0; j < yin.length; j++) {
              yin[j].style.display="none";
          };
          yin[this.index].style.display="none"
       }
    };
     // tab1开始
    var tabbox=getClass("link",document)[0];
    var links=tabbox.getElementsByTagName('a');
    var list=getClass("list1",document);
    for (var i = 0; i < links.length; i++) {
      links[0].style.borderBottom="6px solid red";
      links[i].index=i;
      links[i].onmouseover=function(){
       // alert(1)
         for (var j= 0; j < list.length; j++) { 
              list[j].style.display="none"; 
              links[j].style.borderBottom=0;  
              links[j].style.fontWeight="";
             };
             list[this.index].style.display="block";
             links[this.index].style.borderBottom="6px solid red";
             links[this.index].style.fontWeight="bold";
         }
    };
    //tab2开始
    var idtwo=getClass("idtwo_box",document)[0];
    var idtwo2=getClass("idtwo_midbox",idtwo)[0];
    var idtwo3=getClass("idtwo_condent",idtwo2)[0];
    var idtwo4=getClass("idtwo_condent_right_title",idtwo3)[0];
    var idtwo5=getClass("idtwo_condent_right_picture",idtwo3);
    var idtwoa=idtwo4.getElementsByTagName('a');
     idtwoa[0].style.borderBottom="3px solid red";
     idtwo5[1].style.zIndex=10;
     idtwoa[0].style.fontWeight="bold";
    for (var i = 0; i < idtwoa.length; i++) {
      idtwoa[i].index=i;
      idtwoa[i].onmouseover=function(){
        for (var j = 0; j< idtwoa.length; j++) {
          idtwo5[j].style.display="none";
          idtwoa[j].style.borderBottom="0";
          idtwoa[j].style.fontWeight="";
        };
          idtwo5[this.index].style.display="block";
          idtwoa[this.index].style.borderBottom="3px solid red";
          idtwoa[this.index].style.fontWeight="bold";
      }
    };

   //左边无缝轮播开始
  var box=$(".idfive_midbox");
  for (var i = 0; i < box.length; i++) {
    aa(box[i])
  };
  function aa(box){
    var imgbox=$(".idfive_left_four_img",box);
  var idfiveleftfour=$(".idfive_left_four",box)[0];
  var iw=181;
  var idfivebtn=$(".idfivethree_btn",box)[0];
  var idfiveleftbtn=$(".idfivethree_leftbtn",idfivebtn)[0];
  var idfiverightbtn=$(".idfivethree_rightbtn",idfivebtn)[0];
  var index=0;
  var next=0; 
  imgbox[index].style.left=0;
  idfiverightbtn.onclick=function(){
       next++;
      //循环
      if(next==imgbox.length){
            next=0;
        }
        imgbox[next].style.left=iw+'px';  
        animate(imgbox[index],{left:-iw},500);
        animate(imgbox[next],{left:0},500);
        index=next; 
    }
 idfiveleftbtn.onclick=function(){
        next--;
        if(next==-1){
            next=imgbox.length-1;
          }
          imgbox[next].style.left=-iw+'px';  
          animate(imgbox[index],{left:iw},500)
          animate(imgbox[next],{left:0},500)
         index=next; 

    }
  }

    //加边框效果
     var ones=$(".idone_left_condent",list[0]);
          for (var i = 0; i <ones.length; i++) {
            ones[i].onmouseover=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:220});
            animate(bl,{height:260});
            animate(br,{height:260});
            animate(bb,{width:220}); 
             }
             ones[i].onmouseout=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:0});
            animate(bl,{height:0});
            animate(br,{height:0});
            animate(bb,{width:0});
              
             }

          };
          var ones=$(".idone_left_condent",list[1]);
          for (var i = 0; i <ones.length; i++) {
            ones[i].onmouseover=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:220});
            animate(bl,{height:260});
            animate(br,{height:260});
            animate(bb,{width:220}); 
             }
            ones[i].onmouseout=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:0});
            animate(bl,{height:0});
            animate(br,{height:0});
            animate(bb,{width:0});
              
             }

          };
           var ones=$(".idone_left_condent",list[2]);
          for (var i = 0; i <ones.length; i++) {
            ones[i].onmouseover=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:220});
            animate(bl,{height:260});
            animate(br,{height:260});
            animate(bb,{width:220}); 
             }
            ones[i].onmouseout=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:0});
            animate(bl,{height:0});
            animate(br,{height:0});
            animate(bb,{width:0});
              
             }

          };
           var three=$(".idtwo_condent_right_picture_left_picture1");
          for (var i = 0; i <three.length; i++) {
            three[i].onmouseover=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:194});
            animate(bl,{height:244});
            animate(br,{height:244});
            animate(bb,{width:294}); 
             }
            three[i].onmouseout=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:0});
            animate(bl,{height:0});
            animate(br,{height:0});
            animate(bb,{width:0});
             }

          };
          var four=$(".idtwo_condent_right_picture_left_picture2");
          for (var i = 0; i <four.length; i++) {
            four[i].onmouseover=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:194});
            animate(bl,{height:244});
            animate(br,{height:244});
            animate(bb,{width:294}); 
             }
            four[i].onmouseout=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:0});
            animate(bl,{height:0});
            animate(br,{height:0});
            animate(bb,{width:0});
             }

          };   
var twos=$(".idtwotop_one",idtwo5[0]);
          for (var i = 0; i <twos.length; i++) {
            twos[i].onmouseover=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:220});
            animate(bl,{height:260});
            animate(br,{height:260});
            animate(bb,{width:220}); 
             }
            twos[i].onmouseout=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:0});
            animate(bl,{height:0});
            animate(br,{height:0});
            animate(bb,{width:0});  
             }
          };
          var twos=$(".idtwotop2_one",idtwo5[0]);
          for (var i = 0; i <twos.length; i++) {
            twos[i].onmouseover=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:365});
            animate(bl,{height:250});
            animate(br,{height:250});
            animate(bb,{width:365}); 
             }
            twos[i].onmouseout=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:0});
            animate(bl,{height:0});
            animate(br,{height:0});
            animate(bb,{width:0});  
             }
          };
          var twos=$(".idtwotop3_one",idtwo5[0]);
          for (var i = 0; i <twos.length; i++) {
            twos[i].onmouseover=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:290});
            animate(bl,{height:260});
            animate(br,{height:260});
            animate(bb,{width:290}); 
             }
            twos[i].onmouseout=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:0});
            animate(bl,{height:0});
            animate(br,{height:0});
            animate(bb,{width:0});  
             }
          };
           var twos=$(".idtwotop4_one",idtwo5[0]);
          for (var i = 0; i <twos.length; i++) {
            twos[i].onmouseover=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:240});
            animate(bl,{height:260});
            animate(br,{height:260});
            animate(bb,{width:240}); 
             }
            twos[i].onmouseout=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:0});
            animate(bl,{height:0});
            animate(br,{height:0});
            animate(bb,{width:0});  
             }
          };
           var twos=$(".idtwotop5_one",idtwo5[0]);
          for (var i = 0; i <twos.length; i++) {
            twos[i].onmouseover=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:275});
            animate(bl,{height:260});
            animate(br,{height:260});
            animate(bb,{width:275}); 
             }
            twos[i].onmouseout=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:0});
            animate(bl,{height:0});
            animate(br,{height:0});
            animate(bb,{width:0});  
             }
          };
           var bb=$(".idfive_b",document);
          for (var i = 0; i <bb.length; i++) {
            bb[i].onmouseover=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:268});
            animate(bl,{height:178});
            animate(br,{height:178});
            animate(bb,{width:268}); 
             }
            bb[i].onmouseout=function(){
            var bt=$(".bt",this)[0];
            var bl=$(".bl",this)[0];
            var br=$(".br",this)[0];
            var bb=$(".bb",this)[0];
            animate(bt,{width:0});
            animate(bl,{height:0});
            animate(br,{height:0});
            animate(bb,{width:0});  
             }
          };

//中间轮播
    var idfivebox=getClass("idfive_box",document);
       wheel1(idfivebox[0]);
    function wheel1(idfivebox){
    var idfivemid=getClass("idfive_midbox",idfivebox)[0];
    var idfive=getClass("idfive_condent",idfivemid);
    var idfive2=getClass("idfive_right",idfive[0]);
    var idfive3=getClass("idfive_right_one",idfive2[0])[0];
     //图片
    var idfive4=idfive3.getElementsByTagName('a');
    var idfive5=getClass("anniu",idfive2[0]);
    var idfive6=idfive5[0].getElementsByTagName("li")
    var index=0;
    var  idfive7=getClass("idfive_btn",idfive2[0]);
    var  idfiveleft=getClass("idfive_leftbtn",idfive7[0])[0];
    var  idfiveright=getClass("idfive_rightbtn",idfive7[0])[0];
    idfive6[0].style.background="#cf0c5c";
    idfive4[0].style.display="block";
     var  idfiverightonefu=$(".idfive_right_one_fu",idfive2[0])[0];
   idfiverightonefu.onmouseover=function(){
       idfiveleft.style.display="block";
       idfiveright.style.display="block";
       animate(idfive7[0],{display:"block"},200)
      }
     idfiverightonefu.onmouseout=function(){
      idfiveleft.style.display="none";
       idfiveright.style.display="none";
       // animate(idfive7[0],{display:"none"},200)
      }
    for (var i = 0; i < idfive6.length; i++) {
         idfive6[i].index=i; 
         idfive6[i].onclick=function(){
         for (var j = 0; j < idfive6.length; j++){
                  idfive4[j].style.display="none";
                  idfive6[j].style.backgroundColor="";
               };
            idfive4[this.index].style.display="block";
            idfive6[this.index].style.backgroundColor="#cf0c5c" ;
         }
    };
  
    idfiveright.onclick=function(){
      index++;
      if(index=idfive4.length){
        index=0;
      }
     for (var i = 0; i < idfive4.length; i++) {
              idfive4[i].style.display="none";
              idfive6[i].style.background=""
          };
          idfive4[index].style.display="block";
          idfive6[index].style.background="#cf0c5c"
    }
    idfiveleft.onclick=function(){
          index--;
          if(index<0){
            index=idfive4.length-1;
          }
          for (var i = 0; i < idfive4.length; i++) {
              idfive4[i].style.display="none";
              idfive6[i].style.background=""
          };
          idfive4[index].style.display="block";
          idfive6[index].style.background="#cf0c5c"
    }
    
    }
//中间轮播
    var idfivebox=getClass("idfive_box",document);
    for (var i =3; i < idfivebox.length; i++) {
          wheel(idfivebox[i]);
    };
    function wheel(idfivebox){
    var idfivemid=getClass("idfive_midbox",idfivebox)[0];
    var idfive=getClass("idfive_condent",idfivemid);
    var idfive2=getClass("idfive_right",idfive[0]);
    var idfive3=getClass("idfive_right_one",idfive2[0])[0];
     //图片
    var idfive4=idfive3.getElementsByTagName('a');
    var idfive5=getClass("anniu",idfive2[0]);
    var idfive6=idfive5[0].getElementsByTagName("li")
    var  idfive7=getClass("idfive_btn",idfive2[0]);
    var  idfiveleft=getClass("idfive_leftbtn",idfive7[0])[0];
    var  idfiveright=getClass("idfive_rightbtn",idfive7[0])[0];
    var  idfiverightonefu=$(".idfive_right_one_fu",idfive2[0])[0];
    idfive6[0].style.background="#cf0c5c";
    idfive4[0].style.display="block";
     idfiverightonefu.onmouseover=function(){
       idfiveleft.style.display="block";
       idfiveright.style.display="block";
       animate(idfive7[0],{display:"block"},200)
      }
     idfiverightonefu.onmouseout=function(){
      idfiveleft.style.display="none";
       idfiveright.style.display="none";
       // animate(idfive7[0],{display:"none"},200)
      }
    for (var i = 0; i < idfive6.length; i++) {
         idfive6[i].index=i; 
         idfive6[i].onclick=function(){
         for (var j = 0; j < idfive6.length; j++){
                  idfive4[j].style.display="none";
                  idfive6[j].style.backgroundColor="";
               };
            idfive4[this.index].style.display="block";
            idfive6[this.index].style.backgroundColor="#cf0c5c";
         }
    };
   
    idfiveleft.onclick=function(){
          index--;
          if(index<0){
            index=idfive4.length-1;
          }
          for (var i = 0; i < idfive4.length; i++) {
              idfive4[i].style.display="none";
              idfive6[i].style.background=""
          };
          idfive4[index].style.display="block";
          idfive6[index].style.background="#cf0c5c"
    }
    idfiveright.onclick=function(){
      index++;
      if(index=idfive4.length){
        index=0;
      }
     for (var i = 0; i < idfive4.length; i++) {
              idfive4[i].style.display="none";
              idfive6[i].style.background=""
          };
          idfive4[index].style.display="block";
          idfive6[index].style.background="#cf0c5c"
    } 
     
    }
   


}