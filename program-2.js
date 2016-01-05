(function () {
    var sum = 0;
    process.argv.forEach(function (arg, index) {
        if(index >= 2) {
            sum += Number(arg);
        }   
    });

    console.log(sum);
})();
