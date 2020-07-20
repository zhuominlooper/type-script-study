"use strict";
//装饰器，相当于注解
//相当于c#里的特性
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//类装饰器可以动态扩展类(无法传参)
function logClass(params) {
    console.log(params);
    params.prototype.name = "普通类装饰器"; //params就是MyTest类，在它的原型上扩展name的属性
}
var MyTest = /** @class */ (function () {
    function MyTest() {
    }
    MyTest = __decorate([
        logClass
    ], MyTest);
    return MyTest;
}());
var test = new MyTest();
console.log(test.name); //运行这个ts文件可能会报错，转成js就可以
//装饰器工厂(装饰器可以传参)
function logClass1(params) {
    return function (target) {
        target.prototype.name = "我是装饰器工厂";
        console.log("传入的参数是:" + params);
    };
}
var MyTest1 = /** @class */ (function () {
    function MyTest1() {
    }
    MyTest1 = __decorate([
        logClass1("装饰器工厂")
    ], MyTest1);
    return MyTest1;
}());
var test1 = new MyTest1();
console.log(test1.name); //运行这个ts文件可能会报错，转成js就可以
//属性装饰器
//定义在属性上，用来修改属性的值和处理
//属性装饰器传参两个参数，第一个是类的原型对象，第二个是属性名
function logPropotype(params) {
    return function (target, attr) {
        console.log(target); //类的原型对象，相当于xxx.prototype
        target[attr] = params;
    };
}
var MyPropotype = /** @class */ (function () {
    function MyPropotype() {
    }
    __decorate([
        logPropotype("我是一个属性装饰器")
    ], MyPropotype.prototype, "name", void 0);
    return MyPropotype;
}());
console.log("属性装饰器的结果：", new MyPropotype().name);
function logFunc(params) {
    return function (target, methodName, desc) {
        console.log(111, params);
        console.log(222, target);
        console.log(333, methodName);
        console.log(444555, desc.value);
    };
}
//方法装饰器,和属性装饰器基本相同
var MyFunc = /** @class */ (function () {
    function MyFunc() {
    }
    MyFunc.prototype.name = function (value) {
    };
    __decorate([
        logFunc("我是一个方法装饰器")
    ], MyFunc.prototype, "name", null);
    return MyFunc;
}());
new MyFunc().name(123);
