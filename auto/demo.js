// while(!click("朋友圈"))
// sellp(1000)
// scrollUp()
// home()
// while(!click("发现"))
// sleep(1000);
// while(!click("朋友圈"))
// while(!click("步数排行榜"))
// sleep(1000);
// scrollDown();
// longClick("小伊的后援摸鱼群")
// scrollUp();

// setText("测试你好")
// sleep(1000)
// while(!click("发送"))
// var text = text("seek").findOne();
// log(text)
// text.parent().click(0)
// var a = className('android.widget.TextView')
// console.log(a)
//.click();

// while(!click('微信运动'))
// sleep(1000)
// while(!click('步数排行榜'))
// sleep(1000)
// var x = className('android.widget.ListView').findOne().child(0).bounds().centerX()
// var y = className('android.widget.ListView').findOne().child(0).bounds().centerY()
// log(x,y)
// click(x,y)

// console.log(className('android.widget.Relative.Layout').find())

// var x = text('发现').findOne().bounds().centerX()
// var y = text('发现').findOne().bounds().centerY()
// click(x,y)
// log(text('发现').findOne())


// id('com.tencent.mm:id/hga').find().forEach(child => {
//     click(child.text())
//     sleep(2000)
//     back()
//     sleep(1000)
// })
// var a = id('com.tencent.mm:id/hga').find().findOne(text('微信运动'))

// var n = id('com.tencent.mm:id/hga').find().empty()
// log(a)



//color
// var red = colors.toString(255)
// var red = colors.isSimilar('#000000','#000001',4)
// var red = colors.equals('#000000','#000000')
// log(red)

//image
// var image = images.read('./1.png')
// image.recycle()
// var img = caputerScreen()//截图

// var img = images.load('https://file.yechengxu.cn/wbp3.0/orange.png')
// log(img.getWidth(), img.getHeight())
// log(getPath())
// log(img.pixel(100,100))

// log(colors.toString(img.pixel(100,10)))
// img.saveTo('/sdcard/imgbg.png')

// images.save(img,'/sdcard/imgbg2.png',"png",50)
// var res = http.get('https://file.yechengxu.cn/wbp3.0/orange.png')
// var img =  images.clip(res,100,100,10,10)
// // var b = res.body.bytes()
// // var img = images.fromBytes(b)
// sleep(1000)
// img.saveTo('/sdcard/imgbg10.png')
// log(img)



//截图
// if(!requestScreenCapture()){
//     toast('截图失败');
//     exit();
// }
// home();

// sleep(3000)
// var screen = images.captureScreen();
// var img = images.clip(screen,64,195,385-64,358-195);
// img.saveTo('/sdcard/imgbg4.png')
// console.log(img)
// toast('111');


// function getImage(x1,y1,x2,y2,path){
//     var screen = images.captureScreen();
//     var img = images.clip(screen,x1,y1,x2-x1,y2-y1);
//     img.saveTo(path)
//     img.recycle()
// }

//自动点击获取权限，根据自己的手机型号修改
threads.start(function(){
    while(true){
        if(text('允许').findOne()){
            text('允许').findOne().click();
        }else{
            sleep(2000)
        }
    }
})
if(!requestScreenCapture()){
    toast('截图失败');
    exit();
}

// sleep(1000)

//循环找色，找到红色（#ff0000）时停止并报告坐标
// var i = 0
// while (i<5) {
//     //截图
//     i ++;
//     var img = captureScreen()
//     // var point = findColor(img,'#ff0000',{
//     //     threshold:0
//     // })
//     // log(point)
//     // if(point){
//     //     toast("找到红色坐标为（"+point.x+","+point.y+")");
//     // }else{
//     // }
//     // sleep(2000)
//     // toast('正在寻找');


//     var point = findColor(img,"#ff0000",{
//         region:[100,100,800,1700],//x,y,width,height
//         threshold:4
//     })

//     if(point){
//         toast('找到了' + point);
//     }else{
//         toast('没找到');
//     }
//     sleep(2000)
// }
// 681.1201

var img = captureScreen()
// sleep(2000);
// var col = img.pixel(131,1196)
// sleep(2000);
// log(colors.toString(col))
// log('421')
var m = images.findMultiColors(img,'#03d96b',[[10,10,"#ffffff"]])
log(m)
// #03d96b

// fffff

