//布尔类型
let a:boolean=true
a=false 
console.log("布尔类型：",a)

//数字类型,ts没有对整形，浮点型做区别
let b:number=123
console.log("数字类型：",b)

//字符串类型
let c:string='123'
console.log('字符串类型',c)

//数组类型

var d=[1,2,3]//es5
let arr:number[]=[1,2,3]//定义数组的一种方式，只能有一种类型
let arr1:Array<number>=[1,1,3]//另一中方式
console.log('数组类型：',arr1)

//元组类型，特殊的数组
let tuple:[number,string,boolean]=[1,"1",false]
console.log("元祖类型：",tuple)

//枚举类型
enum Flag{
    success=1,
    error=-1
}//不赋值，就是默认索引赋值0,1,2
let f:Flag=Flag.error
console.log("枚举类型：",f)

//任意类型(any)，可以随便改变值
let anyTest:any=1
anyTest='123'
console.log("任意类型：",anyTest)

//空类型(null,undefined)
let ff:number|undefined
console.log("空类型：",ff)
//一个元素可能是null，有值，undefined
let fff:number|null|undefined

//void类型，一般用于方法
function Test():void{//没有返回不能写undefined
    console.log("void类型的方法")
}
Test()

//never类型，表示其他类型，代表不会出现的值
let fun:never
try{
    fun=(()=>{
        throw new Error("never类型")
      })()
}catch(err){
    console.log(err)
}



