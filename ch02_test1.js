var result = 0;

console.time('duration_sum');

for (var i = 1;i <= 1000; i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('1 to 100 plus sum result = %d', result );

console.log('now play filename = ' + __filename);
console.log('now play filepath = %s', __dirname);

var Person = {name:"Girls Generation", age:20};
console.dir(Person);