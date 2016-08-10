/// < reference path="typings/index.d.ts" />

(function () {
    function getFileData(filepath) {
        var promise = new Promise(function (resolve, reject) {
            var fs = require('fs');
            fs.readFile(filepath, 'utf8', function (err, data) {
                if (err) reject(err);
                setTimeout(function () {
                    resolve(data);
                }, 500);

            });
        });
        return promise;
    }
    var myPromise = getFileData('promise.js');
    myPromise.then(function (data) {
        console.log(data);
    })
        .catch(function (error) {
            console.log(error);
        });
        
        console.log('Complete');
} ());


