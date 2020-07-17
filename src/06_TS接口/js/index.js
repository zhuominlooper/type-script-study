"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printName(value) {
    return "name is " + value.name;
}
function ajaxTest(config) {
    var xhr = new XMLHttpRequest(); //实例化请求对象
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("请求成功");
            console.log(xhr.response);
        }
    };
}
var info = function (key, value) {
    return value;
};
console.log(info('23432', 111));
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.eat = function (str) {
        console.log("狗在吃：" + str);
    };
    return Dog;
}());
var dog = new Dog();
dog.eat("骨头");
var C = /** @class */ (function () {
    function C() {
        this.value = "我在学习";
    }
    C.prototype.print = function () {
        console.log("我在学习");
    };
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    D.prototype.b = function () {
        console.log("打印了b");
    };
    D.prototype.a = function () {
        console.log("打印了a");
    };
    return D;
}(C));
var d = new D();
d.print();
d.b();
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
var arrayNumber = [1, 2, 3, 3, 5, 7, 6, 4, 3];
var sumIndex = {};
arrayNumber.forEach(function (x) {
    console.log(111, x);
    if (Object.keys(sumIndex).filter(function (y) { return y !== x.toString(); }).length < 1) {
        console.log(x);
        sumIndex[x] = 1;
    }
    else {
        sumIndex[x]++;
    }
});
console.log(sumIndex);
