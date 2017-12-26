/**
 * Created by Administrator on 2017/12/21 0021.
 */
//jQuery
    //尝试隐藏功能
//    $(document).ready(function()
//    {
//    $(".video").hide();
//    })
$(document).ready(function()
    {

    //测试显示/隐藏
    $("#suiJi").mouseover(function()       //经测试click是button或者a标签才可以用的，普通的li标签无效
    {
        $("p.pMess").css("color","Blue").hide(1000).show(1000);
    });
    $("#suiJi").click(function()  //当点击“随记”时
    {
        $("p.pMess").css({"color":"red","fontSize":"20px"}).append("，<b>测试append</b>");
    });
    //多重测试
    $("#zhaoPian").mouseover(function()
    {
        $("ul.nav").animate({opacity:'0.5',marginTop:"100px"},500).animate({opacity:0.7,marginTop:0},500).animate({opacity:1,marginTop:"60px"},500);
    });
    //测试淡入淡出效果
    $("#zhaoPian").click(function()//当点击“照片”时
    {
        //$("ul.nav").fadeToggle();
        //$("div.day1").fadeToggle();
        //$("div.day2").fadeToggle();
        $("ul.nav").stop(true)
    });
    $("#xinQing").dblclick(function() //当双击“心情”时
    {
        $("ul.nav").slideToggle("slow").fadeToggle(2000).animate({opacity:0.5},2000,function(){
            $("ul.nav").animate({opacity:1},2000)
        });
    });
    $("#xinQing").click(function()
    {
        $(".nav").animate({opacity:0},800).animate({opacity:1},800);
    });
    //1、animate可以重复用
    //2、单击和双击事件都加给同一个对象时会先执行单击再执行双击。
});
