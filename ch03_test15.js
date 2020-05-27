function add(a, b, callback){
    var result = a + b;
    callback(result);
}

add(10, 10, function(result){
    console.log('parameter sending callback function called.');
    console.log('plus 10 + 10 result : ' + result);
});