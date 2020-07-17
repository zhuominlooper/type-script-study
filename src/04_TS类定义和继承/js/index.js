"use strict";
//ts中定义类和es6相似
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
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = '';
        console.log("调用了父类构造方法");
        this.name = name;
        this.age = age;
    }
    Animal.prototype.getAnimalInfo = function () {
        return "name is " + this.name + " and age is " + this.age;
    };
    return Animal;
}());
var animal = new Animal('dog', 12);
console.log(animal.getAnimalInfo());
//ts中的继承
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, sex) {
        var _this = _super.call(this, name, age) || this;
        _this.sex = '';
        console.log("调用了子类构造方法");
        _this.sex = sex;
        return _this;
    }
    Dog.prototype.getAnimalInfo = function () {
        return "\u8FD9\u662F\u5B50\u7C7B\u7684\u65B9\u6CD5\uFF0Cname is " + this.name + " and age is " + this.age;
    };
    return Dog;
}(Animal));
var dog = new Dog("dog", 11, "母"); //如果子类自己的方法和父类相同，优先使用子类的方法
console.log(dog.getAnimalInfo() + "and sex is " + dog.sex);
//ts中的类里修饰符
//public：在父类，子类，类外部都可以使用
//protect：在父类，子类，类外部不可以使用
//private：只能在父类使用，体现了封装
