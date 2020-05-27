var Users = [{name:'Girls Generation', age:20}, {name:'iu', age:21}];

var add = function(a, b){
    return a+b;
}

Users.push(add);

console.log('array item count : ' + Users.length);
console.log('third item is function : ' + Users[2](10, 10));

console.dir(Users);