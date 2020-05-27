function add(a, b, callback){
    var result = a + b;
    callback(result);
    
    var history = function(){
        return a + ' + ' + b + ' = ' + result;
    };
    
    return history;
}

var add_history = add(10, 10, function(result){
    console.log('parameter pass callback function called.');
    console.log('plus 10 + 10 : ' + result);
});

console.log('result value run function result : ' + add_history());