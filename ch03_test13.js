var Users = [{name:'Girls Generation', age:25}, {name:'iu', age:23}, {name:'lee', age:58}];
console.log('before delete count = ' + Users.length);

//delete Users[1];
Users.splice(2, 1);
console.log('after delete count = ' + Users.length);
console.log(Users);