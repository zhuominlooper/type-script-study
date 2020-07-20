//装饰器，相当于注解
//相当于c#里的特性


//类装饰器可以动态扩展类(无法传参)
function logClass(params:any)
{
    console.log(params)
    params.prototype.name="普通类装饰器"//params就是MyTest类，在它的原型上扩展name的属性
}

@logClass
class MyTest{
constructor(){
}
}
var test:any=new MyTest()
console.log(test.name)//运行这个ts文件可能会报错，转成js就可以


//装饰器工厂(装饰器可以传参)
function logClass1(params:string)
{
    return function(target:any){
           target.prototype.name="我是装饰器工厂"
           console.log("传入的参数是:"+params)
    }
}
@logClass1("装饰器工厂")
class MyTest1{
    constructor(){
    }
}
var test1:any=new MyTest1()
console.log(test1.name)//运行这个ts文件可能会报错，转成js就可以


//属性装饰器
//定义在属性上，用来修改属性的值和处理
//属性装饰器传参两个参数，第一个是类的原型对象，第二个是属性名
function logPropotype(params:any)
{
    return function(target:any,attr:string){
        console.log(target)//类的原型对象，相当于xxx.prototype
        target[attr]=params
    }
}
class MyPropotype{
  @logPropotype("我是一个属性装饰器")
public name:string|undefined
}
console.log("属性装饰器的结果：",new MyPropotype().name)


function logFunc(params:any)
{
    return function(target:any,methodName:any,desc:any){
        console.log(111,params)
        console.log(222,target)
        console.log(333,methodName)
        console.log(444555,desc.value)
    }
}
//方法装饰器,和属性装饰器基本相同
class MyFunc{
    @logFunc("我是一个方法装饰器")
    name(value:any){      
    }
  }
  new MyFunc().name(123)



