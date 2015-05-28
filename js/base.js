/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-6-11
 * Time: 下午2:05
 * To change this template use File | Settings | File Templates.
 */
//导航下拉菜单
$(".user div").mouseover(function(){

    $(".user div").css({"overflow":"hidden","width":70,"marginRight":0,"backgroundColor":"#F5F5F5","border":"none"});
    $(".user div p").css({"backgroundColor":"#F5F5F5","border":"none"})
    $(".line").css({"width":1,"margin-right": 10,"border-left":"1px solid #DDDDDD"})
    if($($(this).children()[1]).children().length>=1){

    $(this).children().css({"borderLeft":"1px solid #ccc","borderRight":"1px solid #ccc","backgroundColor":"#fff"});
//        alert($($($(this).children()[0]).children()[0])==$(".top01"));
        if($($($(this).children()[0]).children()[0]).text()==$(".top01").text()){
            $($(this).children()[1]).css({"paddingLeft":20,"width":300})
            $($(this).children()[1]).children().css({"width":300,"height":40})
            $($($(this).children()[1]).children()[0]).children()[0].style.marginTop="-20px"
            $(this).children()[1].style.paddingLeft="20px";
        }
    $(this).children()[1].style.borderBottom="1px solid #ccc";
        if($(this).children()[0]!=$(".daohang")[0]){
            $(this).css({"overflow":"visible","backgroundColor":"#fff","width":60,"marginRight":10});
            $(this).children()[0].style.width="60px"
        }

    }
})
$(".user div ul").mouseleave(function(){
        $(this).parent().css({"overflow":"hidden","width":70,"marginRight":0,"backgroundColor":"#F5F5F5"});
        $(this).prev().css({"backgroundColor":"#F5F5F5","border":"none"})
})


//搜索框
$(".search_input input").focus(function(){
    $(".search_input input").css("margin-left",-20)
})
$(".search_input input").blur(function(){
    $(".search_input input").css("margin-left",0)
})
//二维码
$("#erweima div").click(function(){
   $("#erweima")[0].className="hide";;
})

//幻灯片
var ulmarginleft=0;
var circle=0;
var lunbo1=document.getElementById("lunbo1-box");
//轮播1
function nexts(){
    var ul=document.getElementById("ulid1");
    var aArr=document.getElementById("aboxid1").getElementsByTagName("a");
    ulmarginleft-=520;
    if(ulmarginleft<-2080){
        ulmarginleft=0;
        aArr[circle].style.backgroundColor="#ea4f5f";
        circle=0;
    }else{
        circle+=1;
    }
    for(var i = 0; i<aArr.length; i++){
        aArr[i].style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    aArr[circle].style.backgroundColor = "#ea4f5f";
    ul.style.marginLeft=ulmarginleft+'px';
}
function prevs(){
    var ul=document.getElementById("ulid1");
    var aArr=document.getElementById("aboxid1").getElementsByTagName("a");
    ulmarginleft+=520;
    if(ulmarginleft>0){
        ulmarginleft=-2080;
        circle=4;
    }else{
        circle-=1;
    }
    for(var i = 0; i<aArr.length; i++){
        aArr[i].style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    aArr[circle].style.backgroundColor = "#ea4f5f";
    ul.style.marginLeft=ulmarginleft+'px';
}
var Setinterval=null;
lunbo1.onmousemove=function(){
    window.clearInterval(Setinterval);
}
lunbo1.onmouseout=function(){
    Setinterval= window.setInterval(nexts,1000);
}

////轮播2
var ulmarginleft2=0;
var circle2=0;
var lunbo2=document.getElementById("lunbo2-box");
//轮播1
function nexts2(){
    var ul=document.getElementById("ulid2");
    var aArr=document.getElementById("aboxid2").getElementsByTagName("a");
    ulmarginleft2-=520;
    if(ulmarginleft2<-2080){
        ulmarginleft2=0;
        aArr[circle2].style.backgroundColor="#ea4f5f";
        circle2=0;
    }else{
        circle2+=1;
    }
    for(var i = 0; i<aArr.length; i++){
        aArr[i].style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    aArr[circle2].style.backgroundColor = "#ea4f5f";
    ul.style.marginLeft=ulmarginleft2+'px';
}
function prevs2(){
    var ul=document.getElementById("ulid2");
    var aArr=document.getElementById("aboxid2").getElementsByTagName("a");
    ulmarginleft2+=520;
    if(ulmarginleft2>0){
        ulmarginleft2=-2080;
        circle2=4;
    }else{
        circle2-=1;
    }
    for(var i = 0; i<aArr.length; i++){
        aArr[i].style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    aArr[circle2].style.backgroundColor = "#ea4f5f";
    ul.style.marginLeft=ulmarginleft2+'px';
}
var Setinterval2=null;
lunbo2.onmouseover=function(){
    window.clearInterval(Setinterval2);
}
lunbo2.onmouseout=function(){
    Setinterval2= window.setInterval(nexts2,1000);
}
$(function(){
    Setinterval2= window.setInterval(nexts2,1000);
    Setinterval= window.setInterval(nexts,1000);
})
//轮播右边部分
var str="";
$(".roll_img_right ul li").mouseover(function(){
    if($(this).html()==$($(this).parent().children()[0]).html()){
        str='<a href="#">阿里投资新加坡邮政</a><a href="#">电商时尚 乐视天猫合作</a><a href="#">淘宝成主流生活方式</a><a href="#">天猫360万粽子被抢空</a>';
    }else if($(this).html()==$($(this).parent().children()[1]).html()){
        str='<a href="#">[重要]虚假交易新规</a><a href="#">[重要]<span class="notice_color">商品属性限制</span></a><a href="#">[重要]成人主图发布</a><a href="#">[重要]皮衣抽检变更</a>';
    }else if($(this).html()==$($(this).parent().children()[2]).html()){
        str='<a href="#">[聚焦]金牌卖家再起航</a><a href="#">[功能]<span class="notice_color">橱窗规格升级啦</span></a><a href="#">[话题]又爱又恨优惠劵</a><a href="#">[工具]活动接单神器！</a>';
    }else if($(this).html()==$($(this).parent().children()[3]).html()){
        str='<a href="#" class="notice_color">卡单、失效都是骗人的</a><a href="#">卖家防范红包欺诈提醒</a><a href="#">更换收货地址的陷阱！</a><a href="#">注意骗子技术升级了！</a>';
    }else if($(this).html()==$($(this).parent().children()[4]).html()){
        str='<a href="#">公益宝贝全新上线详解</a><a href="#">大众评审赢公益金公仔</a><a href="#">助尘肺父亲撑无尘天空</a><a href="#">公益机构淘宝开店攻略</a>';
    };
    $(".notice").html(str);
})
$(".roll_img_right ul li").mouseout(function(){
    $(".notice").html('<a href="#">阿里投资新加坡邮政</a><a href="#">电商时尚 乐视天猫合作</a><a href="#">淘宝成主流生活方式</a><a href="#">天猫360万粽子被抢空</a>');
})
//便民服务图片效果
$(".service-btn a img").mouseover(function(){
    $(this).animate({margin:"-30px 0 40px 0"},100);
    $(this).animate({margin:"10px 0 0 0"},100);
})
//男女服饰图片效果
$(".show_tupian div").mouseover(function(){
    $($(this).children()[3]).animate({"margin-top":"-8px"},100);
})
$(".show_tupian div").mouseout(function(){
    $($(this).children()[3]).animate({"margin-top":"0"},100);
})


$(".show_tupian_two div").mouseover(function(){
    $($(this).children()[3]).attr({"class":"showimg"});
    $(this).attr({"class":"heightback"});
    for(var i=0;i<$(this).parent().children().length;i++){
        if($(this).html()!=$($(this).parent().children()[i]).html()){
            $($(this).parent().children()[i]).attr("class","resizehight");
            $($($(this).parent().children()[i]).children()[3]).attr("class","hide");
        }
    }

})
$(".show_tupian_two div").mouseover(function(){
    $($(this).children()[3]).animate({"margin-top":"-5px"},100);
})
$(".show_tupian_two div").mouseout(function(){
    $($(this).children()[3]).animate({"margin-top":"0"},100);
})



//当前热点栏图片效果
$(".curhot-img").mouseover(function(){
     $($(this).children()[0]).animate({"margin-left":20},100);
})

$(".curhot-img").mouseout(function(){
    $($(this).children()[0]).animate({"margin-left":10},100);
})
//换一批试试图片效果
$(".shantu").mouseover(function(){
    $(this).children()[0].className="hide";
    $(this).children()[1].className="show";
})
$(".shantu").mouseout(function(){
    $(this).children()[0].className="show";
    $(this).children()[1].className="hide";
})


$(".channel-item").mouseover(function(){
        $(this).css({"border-color":"red"})
})


$(".channel-item").mouseout(function(){
        $(this).css({"border-color":"transparent","width":168,"borderRight":"1px solid #EAEAEA"})
})
//搜索框
$(window).scroll(function(){
    if($(window).scrollTop()>=120){
        $(".searchinfo").css({"position":"fixed","top":35,"left":0,"width":"100%","paddingLeft":"300px","zIndex":2,"backgroundColor":"#fff"})
    }else{
        $(".searchinfo").css({"position":"static","width":"","paddingLeft":0})
    }
})