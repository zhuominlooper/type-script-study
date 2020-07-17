
//es5函数定义

function run(){
    return "111"
}
var fun1=function(){
    return '111'
}
//箭头函数
var fun2=()=>{return '111'}

//ts中函数
function run4():string{
    return '111'
}
function run5():number{
    return 111
}
let run6=function():string{
    return '111'
}

//函数参数
function run7(name,age):string{
    return `name is ${name} and age is ${age}`
}//不定义形参的类型默认是any
console.log(run7('looper',11)) 

//设置默认值，不传参数就是取默认值,放在最后面
//es5中的func的参数可以不一致，es6必须一致，但是设置了默认参数就可以不传
//es6中的箭头函数可以设置默认参数
function run8(name='234',age=55):string{
    return `name is ${name} and age is ${age}`
}//不定义形参的类型默认是any
console.log(run8('looper'))
console.log(run8('looper',66))

//可选参数,f放在最后面
//用问号标识
function run9(name,age?):string{
    return `name is ${name} and age is ${age}`
}//不定义形参的类型默认是any
console.log(run9('looper'))
console.log(run9('looper',44))

//ts中的函数重载
//es5中，出现同名的方法，下面会覆盖上面

//ts中，先定义形参不同的func,，在定义执行体
function run10(name:string):string
function run10(age:number):number
 //执行体
function run10(value:any):any{
    if(typeof value ==='string'){
        return `我的名字是${value}`
    }
    else{
        return value
    }
}
console.log(run10(11))
console.log(run10('looper'))
// console.log(run10([1,2,3]))//报错，因为[]参数不存在

