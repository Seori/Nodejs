function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    console.log(speed + 'km speed walking');
}

var person01 = new Person('Girls Generation', 20);
var person02 = new Person('iu', 23);

console.log(person01.name + 'call walk(10)');
person01.walk(10);