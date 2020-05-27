process.on('tick', function(count){
    console.log('tick event called. %s', count);
});

setTimeout(function(){
    console.log('send event after 2 seconds.');
    process.emit('tick', '2');    
}, 2000);