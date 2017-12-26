/**
 * Created by xyf on 2017/9/26.
 */

//顶部登陆小tip开始


function toDep(){
    span1.style.display='inline-block';
}
function  outDep(){
    span1.style.display='none';
}
//顶部登陆小tip结束



/*        function chanGe()
        {
             var od=document.getElementById('ad1');
            if(od.src=='images/yanYe11.png'){
            od.src='images/ad2.png';
            }
         else {
                 od.src='images/yanYe11.png';
             }
        }*/
//为什么这里两个等号就不行？




//左右两边按钮换图开始
//function chanGe() {
//    var od = document.getElementById('ad1');
//    od.src='images/ad2.png'
//}
//
//function goLeft() {
//    var od = document.getElementById('ad1');
//    od.src='images/yanYe11.png';
//}
//左右两边按钮换图结束

//设置背景图切换开始
window.onload=function()
{
    var oAd=document.getElementById('ad1');
    var oLiBig=oAd.getElementsByTagName('li');
    var oOl=document.getElementById('ol1');
    var oLiSmall=oOl.getElementsByTagName('li');
    var nowzIndex=1;
    var now=0;
    //封装切换函数
    function Move1()
    {
        for(var i=0;i<oLiSmall.length;i++)
        {
            oLiSmall[i].className='';
        }
        oLiSmall[now].className='activeli';
        //当图片的zindex足够大时，归零开始，以免盖掉其他他内容
        if(nowzIndex==10)
        {
            nowzIndex=2;
            for(var j=0;j<oLiBig.length;j++)
            {
                oLiBig[j].style.zIndex=1;
                oLiBig[now].style.zIndex=2; //让当前图片提前先刷出来
            }
        }
        oLiBig[now].style.zIndex=nowzIndex++;
        oLiBig[now].style.height=0;
        oLiBig[now].style.opacity=0.6;
        startMove(oLiBig[now],{height:600,opacity:100});
    }
    //点击li时
    for(var i=0;i<oLiSmall.length;i++)
    {
        oLiSmall[i].index=i;
        oLiSmall[i].onclick=function()
        {
            if(now==this.index)return;  //当点击同一张图片时中断效果。
            now=this.index;
            Move1();
        }
    }
    //自动切换
    function Next()
    {
        now++;
        if(now==4)
        {now=0}
        Move1()
    }
    var timer=setInterval(Next,6000);
    oOl.onmouseover=function(){
        clearInterval(timer)
    };
    oOl.onmouseout=function(){
        timer=setInterval(Next,6000)
    };




//设置背景图切换结束

//设置左边文章板块开始
   var oDay1=document.getElementById('day1');
    var oUl1=document.getElementById('ul1');
   var oD1Li=oUl1.getElementsByTagName('li');
    var oDaydiv=oDay1.getElementsByTagName('div');

    for(var i=0;i<oD1Li.length;i++)
    {
        oD1Li[i].indee=i;
        oD1Li[i].onmouseover=function()
        {
            for(var i=0;i<oD1Li.length;i++)
            {
                oD1Li[i].className= '';
                oDaydiv[i].style.display='none';
            }
          this.className='active';
            oDaydiv[this.indee].style.display='block';
         }
    }
//设置左边文章板块结束

//设置右边文章板块开始（基本复制上面）
    var oDay2=document.getElementById('day2');
    var oUl2=document.getElementById('ul2');
    var oD2Li=oUl2.getElementsByTagName('li');
    var oDay2div=oDay2.getElementsByTagName('div');


    for(var i=0;i<oD2Li.length;i++)
    {
        oD2Li[i].indee=i;
        oD2Li[i].onmouseover=function()
        {
            for(var i=0;i<oD2Li.length;i++)
            {
                oD2Li[i].className= '';
                oDay2div[i].style.display='none';
            }
            this.className='active';
            oDay2div[this.indee].style.display='block';
        }
    }
//设置右边文章板块结束
var oVio=document.getElementById('video');
    var oA=oVio.getElementsByTagName('a');
    for(var i=0;i<oA.length;i++)
    {
        oA[i].target='_blank'
    }



//设置右边照片点击放大特效
    var oUlpic=document.getElementById('oUlpic');
    var aLipic=oUlpic.getElementsByTagName('li');
    var oUltopNow=0;   //设置一个变量，代表ulpic的当前top

    for(var i=0;i<aLipic.length;i++)
    {
        aLipic[i].onclick=function()
        {
            //若已放大则缩小，若没放大则放大
            if(this.style.position=='absolute')
            {
                if(parseInt(this.style.width)<548)return;//防止li错位，运动结束之前点击无效。self nice idea！
                for(var i=0;i<aLipic.length;i++)
                {
                    aLipic[i].style.display='block';
                }
                this.style.position='';
                this.style.width=200+'px';
                this.style.height=130+'px';
                this.style.marginTop=13+'px';
                this.firstElementChild.style.width=200+'px';
                this.firstElementChild.style.height=130+'px';
                oSpanbig.style.display='block';
                //复原原来的ul的top
                oUlpic.style.top=oUltopNow+'px';
            }
            else
            {
                //当前li运动时，其他li隐藏，更美观
                for(var i=0;i<aLipic.length;i++)
                {
                    aLipic[i].style.display='none'
                }
                this.style.display='block';
                this.style.position='absolute';
                startMove(this,{width:548,height:298,left:0,top:0,marginTop:0});
                this.firstElementChild.style.width=548+'px';
                this.firstElementChild.style.height=298+'px';
                oSpanbig.style.display='none';//图片放大时让滚动条隐藏
                oUltopNow=parseInt(getStyle(oUlpic,'top'));  //记录在放大前ul的top值
                oUlpic.style.top=0;
            }
        }
    }
//设置右边照片点击放大特效 结束

    //设置右边照片滚动条 开始

    //获取鼠标指针位置（带scrollTop，scrollLeft）
    function getPos(ev)
    {
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
        return {x:ev.clientX+scrollLeft,y:ev.clientY+scrollTop}
    }


    //设置拖拽滚动
    var oSpanbig=document.getElementById('span_scr');
    var oSpansmall=document.getElementById('span_son');
    var t=0;
    oSpansmall.onmousedown=function(ev)
    {
        var oEvent=ev||event;
        var disY=getPos(oEvent).y-oSpansmall.offsetTop;
        document.onmousemove=function(ev)
        {
            var oEvent=ev||event;
            t=getPos(oEvent).y-disY;
            if(t<0)
            {
                t=0
            }
            else if(t>oSpanbig.offsetHeight-oSpansmall.offsetHeight)
            {
                t=oSpanbig.offsetHeight-oSpansmall.offsetHeight
            }
            oSpansmall.style.top=t+'px';

            var scale=t/(oSpanbig.offsetHeight-oSpansmall.offsetHeight);
            oUlpic.style.top=-scale*290+'px';

            return false;//取消鼠标在拖动滚动条时的选中效果
        };
        document.onmouseup=function()
        {
            document.onmousedown=null;
            document.onmousemove=null;
        }

    };

    //设置自定义滚动条滚轮滚动
    function mousewheel(obj)
    {
        obj.onmousewheel=function(ev)
        {
            var oEvent=ev||event;
            //在全局中已经设置一个代表oSpansmall的top的变量t
            var bFlag=true;   //定义一个判断上滚还是下滚的变量

            if(oEvent.wheelDelta)  //如果滚动为真（当滚动时）
            {
                bFlag=oEvent.wheelDelta>0?true:false;
                // delta可以获取鼠标滚轮的方向和速度。如果delta的值是负的，那么滚轮就是向下滚动，正的就是向上。
            }
            else
            {
                bFlag=oEvent.detail<0?true:false;
                //这里的detail还不知道是什么意思？？？？？？？？当detail<0时向下滚
            }
            // return false;

            if(bFlag)  //如果bFlag变量为真（即wheelDelta>0,此时正在向上滚动）
            {
                t=t-20;//向上滚动时top减少
            }
            else
            {
                t=t+20; //同理
            }
            //若ospansmall的top小于0则等于0，避免移出spanbig
            if(t<0)
            {
                t=0
            }
            //同理。
            if(t>oSpanbig.offsetHeight-oSpansmall.offsetHeight)
            {
                t=oSpanbig.offsetHeight-oSpansmall.offsetHeight;
            }

            oSpansmall.style.top=t+'px';
            //和拖拽一样设置一个比例参数scale
            var scale=t/(oSpanbig.offsetHeight-oSpansmall.offsetHeight);
            oUlpic.style.top=-scale*290+"px";

            event.preventDefault&&event.preventDefault();
            return false;   //取消在ul中滚动滚轮时整个浏览器滚动的默认行为。
        }
    }

    //执行滚轮滚动函数
    mousewheel(oUlpic);
    mousewheel(oSpanbig);
    //右侧自定义滚动条结束




    //底部留言板区域开始
    //设置textarea与右侧ul关联
    var messageBtn=document.getElementById('message_btn');
    var messageTxt=document.getElementById('message_txt');
    var messageUl=document.getElementById('message_ul');


    messageBtn.onclick=function()
    {
        var messageLi=document.createElement('li');
        //messageUl.appendChild(messageLi); //这种方法是把li添加在后面
         messageUl.insertBefore(messageLi,messageUl.children[0]);//将li添加到ul的第一个儿子之前。
        messageLi.innerHTML=messageTxt.value;
        messageTxt.value='';
        var heightNow=messageLi.offsetHeight;
        messageLi.style.height=0;//此处的0不能设置在style里，否则无法读取offsetHeight！！！！！！！
        startMove(messageLi,{height:heightNow},function()
        {
            startMove(messageLi,{opacity:100})
        })
    };
    //追加点击留言的键盘事件
    onkeydown=function(ev)
    {
        var oEvent=ev||event;
        if(oEvent.keyCode==13)
        {
        messageBtn.onclick();
            return false;
        }
    }





};






