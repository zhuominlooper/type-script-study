
//对对象的约束，用于参数，
//可选参数可以不传（?标识）
//参数的顺序可以不一样，但是类型必须一样
interface FullName{
     name:string
     age?:string
}
function printName(value:FullName){

    return `name is ${value.name}`
}
//  var obj:FullName={
//      name:'111',
//  }

// console.log( printName(obj))//形参必须是对象，同时有接口属性

//使用接口用作ajax传值
interface Config{
    type:string
    url:string
    data?:any
}
function ajaxTest(config:Config){
    var xhr=new XMLHttpRequest()//实例化请求对象
    xhr.open(config.type,config.url,true)
    xhr.send(config.data)
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            console.log("请求成功")
            console.log(xhr.response)
        }
    }
}

//函数类型的接口
//让方法的形参和返回更加规范
interface encrypt{
    (key:string,value:number):string
    (key:string,value:number):number
}

var info:encrypt=function(key:string,value:number):any{

    return value
}
console.log(info('23432',111))

//可索引接口
//一种是字符串索引，对对象的约束
//一种是数字索引，对数组的约束
//这种约束方式也是TS中的索引签名

//数字索引
// interface numberIndex{
//     [index:number]:string
// }

// var numberTest:numberIndex=['111','222']
// console.log("数字索引的第一个值是："+numberTest[0])
// numberTest[0]='333'
// console.log("数字索引的第一个值是："+numberTest[0])


// //字符串索引
// interface stringIndex{
//     [index:string]:string
// }
// var stringTest:stringIndex={
//     name:'looper',
//     age:"20"
// }
// console.log("字符串索引的第一个值是："+stringTest.name)

//类类型接口
//对类的约束
interface Animal{
    name:string
    eat(str:string):void
}
class Dog implements Animal{
    name: string
    eat(str: string): void {//实现接口
      console.log("狗在吃："+str)
    }
    
}
var dog=new Dog()
dog.eat("骨头")

//接口的扩展
//接口继承接口
interface A{
    a():void
}

interface B extends A{
    b():void
}
 
class C {
    value="我在学习"
    print(){
        console.log("我在学习")
    }
}

class D extends C implements B{
    b(): void {
      console.log("打印了b")
    }
    a(): void {
        console.log("打印了a")
    }
}
var d=new D()
d.print()
d.b()


// //数组,里面存的值可以为各种类型
// var arr=[1,2,'3',{name:"looper"}]
// console.log("普通数组的第一个值"+arr[0])

// //数字索引
// //约束:只有一种类型，下标必须是number类型
// interface numberIndex{
//     [index:number]:string
// }
// var numberTest: numberIndex=['1','2','3',4]//numberTest的类型是numberIndex,约束了数组类型，并且是string
// console.log('数字索引的第一个值'+numberTest[0])

// //对象,展现形式是key--->value，value可以是任意类型
// var obj={
//     name:"looper",
//     age:12
// }
// console.log("普通对象的名字是"+obj.name)

// //字符串索引
// //约束:只有一种类型，下标必须是string类型
// interface strIndex{
//     [index:string]:string
// }
// var strTest:strIndex={
//     name:"looper--->字符串索引",
//     age:"12------>字符串索引",
//     sex:"男------>字符串索引"
// }//strTest的类型是strIndex,约束了对象类型，并且是string
// console.log("字符串索引的名字是"+strTest.name)

