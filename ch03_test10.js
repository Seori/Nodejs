var Users = [{name:'Girls Generation', age:20}, {name:'iu', age:21}, {name:'tiara', age:25}];

console.log('array item count : %d', Users.length);

for (var i = 0; i < Users.length; i++){
    console.log('array item ' + i + ' : ' + Users[i].name);
}

console.log('array foreach');

Users.forEach(function (item, index){
    console.log('array item #' + index + ' : ' + item.name);
});