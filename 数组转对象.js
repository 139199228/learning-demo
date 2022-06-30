var arr1 =  ['orange,https://file.yechengxu.cn/test/20220110/5de…454f22a21b0fdbb414e833.jpg?imageMogr2/auto-orient', '111,https://file.yechengxu.cn/test/20220118/ebb182…af427b8e041aa3465a05cc.jpg?imageMogr2/auto-orient', '测试一下,https://file.yechengxu.cn/test/20220509/b4e35…9b439aa18f988d3ac1d53a.jpg?imageMogr2/auto-orient']
var newArr = []
arr1.forEach(function(v,index){
    console.log(index)
    var arr = v.split(',')
    var obj = {}
    for(var i=0;i<arr.length;i++){
        obj.name = arr[0]
        obj.url = arr[1]
    }
    
    newArr.push(obj)
})
console.log(newArr)