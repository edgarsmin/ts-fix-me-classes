import {BankAccount} from "./src/bank-account";
import {Car} from "./src/car";
import {Person} from "./src/person";
import {Rectangle} from "./src/rectangle";

const myAccount = new BankAccount(500)
console.log(myAccount.deposit(100))// After fixing: will print 600

const car = new Car('Toyota', 100)
console.log(car.accelerate(20))

const john = new Person('John', 30)
console.log(john.getName()) // After fixing: will print "John"
console.log(john.getAge())  // After fixing: will print 30

const rect = new Rectangle(5, 10)
console.log(rect.getArea()) // After fixing: will print 50
