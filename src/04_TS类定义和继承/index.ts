//ts中定义类和es6相似

class Animal{
 public name:string=''
 public age:any
 constructor(name:string,age:number){
     console.log("调用了父类构造方法")
    this.name=name
    this.age=age
 }
 getAnimalInfo():string{
     return `name is ${this.name} and age is ${this.age}`
 }
}
let animal=new Animal('dog',12)
 console.log(animal.getAnimalInfo())

 //ts中的继承
 class Dog extends Animal{
     public sex:string=''
     constructor(name:string,age:number,sex:string){
         super(name,age)
         console.log("调用了子类构造方法")
         this.sex=sex
     }
     getAnimalInfo():string{
        return `这是子类的方法，name is ${this.name} and age is ${this.age}`
    }
 }

let dog=new Dog("dog",11,"母")//如果子类自己的方法和父类相同，优先使用子类的方法
console.log(dog.getAnimalInfo()+"and sex is "+dog.sex)

//ts中的类里修饰符
//public：在父类，子类，类外部都可以使用
//protect：在父类，子类，类外部不可以使用
//private：只能在父类使用，体现了封装



