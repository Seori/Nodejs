process.on('exit', function(){
   console.log('exit event on');
});

setTimeout(function(){
    console.log('shutdown system after 2 seconds.');
    process.exit();
}, 2000);