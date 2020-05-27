
console.log('argv properties parameter count : ' + process.argv.length);
console.dir(process.argv);

if (process.argv.length > 2){
    console.log('third parameter is %s', process.argv[2]);
}

process.argv.forEach(function(item, index){
    console.log(index + ' -- ', item);
});