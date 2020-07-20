"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//使用命名空间是防止在开发时候写了相同的类...冲突
//使用模块是侧重代码的复用，一个模块里面有多个命名空间
//命名空间就是一个立即执行函数的调用
var modules_1 = require("./modules");
var dog = new modules_1.A.Animal();
var cat = new modules_1.B.Animal();
dog.eat();
cat.eat();
