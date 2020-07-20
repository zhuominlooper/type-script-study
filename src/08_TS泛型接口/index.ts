

interface DBI<T>{
    add(info:T):boolean
    delate(info:T):boolean
    update(info:T):boolean
    get(info:T):any[]
}

//实现泛型接口，类也必须是泛型
class MySqlDb<T> implements DBI<T>{
    add(info: T): boolean {
      console.log(info)
      return true
    }
    delate(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    get(info: T): any[] {
        throw new Error("Method not implemented.");
    }
}

class UserInfo{
    name:string|undefined
    age:number|undefined
}
var user=new UserInfo()
user.age=22
user.name="looper"


var mySql=new MySqlDb<UserInfo>()

mySql.add(user)

