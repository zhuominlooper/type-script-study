
//泛型的作用
//泛型就是解决类，接口，方法的复用性，以及特定的数据类型支持
//any可以解决泛型的设计，但是舍弃了类型的检查，并且ts着重是强类型
//方法的重载也是可以实现，但是需要写很多重复代码

import { isNumber } from "util"
//泛型的方法
function getData<T>(value: T): T {
    return value
}
console.log("泛型的返回结果：", getData<number>(123))
console.log("泛型的返回结果：", getData<string>("我是一个字符串"))

//泛型的类
class MinNumber<T>{
    public list: T[] = []//泛型数组
    public minNumber: T | undefined
    public Add(value: T): void {
        if (isNumber(value)) {
            this.list.push(value)
        }
    }
    public getMinNumber(): T | undefined {
        if (this.list.length < 1) {
            return undefined
        }
        (this.minNumber as any) = Math.min.apply(null, (this.list as any))//类型转为any防止T不匹配number[]
        return this.minNumber
    }
}

let obj = new MinNumber<number>()//代表类型是number
obj.Add(2)
obj.Add(3)
obj.Add(1)
//obj.Add('3')报错
console.log("获取到的最小值是：", obj.getMinNumber())

//定义一个函数类型的接口
//约束：形参必须是两个，第一个string，第二个是number，返回值是string
interface funcControl {
    (key: string, value: number): void
}

let funcTest: funcControl = function (name: string, age: number): void {//声明一个函数，并对其使用接口约束

    console.log(`我的名字是${name}，我今年${age}岁`)
}

funcTest("张三", 25)//我的名字是张三，我今年25岁

//定义一个函数类型的泛型接口
//第一种写法
interface funcControl1 {
    <T>(key:T):T
}
let funcTest1: funcControl1 = function<T> (value: T):T {//声明一个函数，并对其使用接口约束

  return value
}
console.log("返回数字类型：",funcTest1<number>(123))
console.log("返回字符串类型：",funcTest1<string>("123"))

