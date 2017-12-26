//这套框架可以实现多个值同时运动，如果忘了参考12.2
function getStyle(obj,name)
{
    if(obj.currentStyle)//此处适配ie6
    {
        return obj.currentStyle[name]
    }
    else               //此处适配谷歌
    {
        return getComputedStyle(obj,false)[name];
    }
}
//此处用json代替了属性与目标值，在json中以类似数组形式表示，达到可以同时设置多个属性运动的效果。
function startMove(obj,json,fnEnd)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var bStop=true;    //为了解决json前后问题做的一个假设：假设所有值都已经到了目标点

        for(var par in json)  //这里的par为json中的属性名，类似于数组中的[i]只是json中的par是以字符串形式表现的
        {
            var cur=0;

            if(par=='opacity')
            {
                cur=Math.round(parseFloat(getStyle(obj,par))*100);
            }
            else{
                cur=parseInt(getStyle(obj,par));//cur为要运动的属性的当前值
            }
            var speed=(json[par]-cur)/6;//此处的iTarget替换为json[par]，意为循环中的那个par的属性值
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //if(cur==json[par]) //遇到问题：json中其中一个属性达到目标时，计时器就会停止
            //{
            //    clearInterval(obj.timer);
            //
            //    if(fnEnd)fnEnd();
            //}
            //else
            //{}
                if(cur!=json[par])  //当本次计时器运算时还有任何一个当前值没有达到目标值时，则让bStop为假；
                    bStop=false;
                if(par=='opacity')
                {
                    obj.style[par]=(cur+speed)/100;
                }
                else
                {
                    obj.style[par]=cur+speed+'px';
                }
             }
        if(bStop)  //当json中有一个属性没达到目标点时，不会生效，当所有属性都到达时，bStop不会再变成false。注意：这条if一定要放在for循环外面，如果放在里面的话相当于第一个属性到达时就立马会报true。
        {
            clearInterval(obj.timer);
            if(fnEnd)fnEnd();
        }
    },30)
}/**
 * Created by xyf on 2017/10/28.
 */
