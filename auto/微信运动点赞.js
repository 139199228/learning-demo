// home();
// sleep(1000)
// while(!click('微信'));
// sleep(1000)
// while(!click('微信运动'));
// sleep(1000)
// while(!click('步数排行榜'));
// sleep(1000)

text('排行榜').waitFor();
sleep(1000);
var like = id('com.tencent.mm:id/cma').find()
like.forEach(function(child) {
    log(child)
})
toast('执行成功');

// threads.start(function(){
//     while(true){
//         if(text('允许').findOne()){
//             text('允许').findOne().click();
//         }else{
//             sleep(2000)
//         }
//     }
// })
// if(!requestScreenCapture()){
//     toast('截图失败');
//     exit();
// }