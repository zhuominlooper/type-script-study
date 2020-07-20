"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = exports.A = void 0;
var A;
(function (A) {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.eat = function () {
            console.log("狗在吃饭");
        };
        return Animal;
    }());
    A.Animal = Animal;
})(A = exports.A || (exports.A = {}));

var B;
(function (B) {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.eat = function () {
            console.log("猫在吃饭");
        };
        return Animal;
    }());
    B.Animal = Animal;
})(B = exports.B || (exports.B = {}));
