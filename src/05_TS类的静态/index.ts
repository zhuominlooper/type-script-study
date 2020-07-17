
//静态类和静态属性

//静态类里只能放静态属性，静态属性的调用不需要实例化调用
class Animals {
    age: number = 12
    static nameStatic: string = ''
    static getAnimalInfo() {
        return `Animal name is ${this.nameStatic}`
    }
    eat() { }
}
Animals.nameStatic = "cat"
console.log(Animals.getAnimalInfo())//Animal name is cat

//类的多态
//多态就是子类实现父类的方法的不同表现形式，即方法的重写

class Dog extends Animals {
    eat() {
        return "狗在吃东西"
    }
}
class Cat extends Animals {
    eat() {
        return "猫在吃东西"
    }
}

let dog = new Dog()
let cat = new Cat()
console.log(dog.eat())//狗在吃东西
console.log(cat.eat()) //狗在吃东西


//抽象类和抽象方法
//抽象类应该至少有一个抽象方法，抽象类不能实例化
//子类继承抽象类必须重写抽象方法
//抽象类可以有方法实现
abstract class abAnimal{
 name:string=''   
 abstract eat():any//申明抽象方法
}

class abDog extends abAnimal{
    eat():string {
        return "狗在吃东西"
    }

}

let abdog=new abDog()
console.log(abdog.eat())//狗在吃东西
