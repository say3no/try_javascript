/*
for (var i = 0; i < takusan; i++) {
    omotai(i, function () {
       console.log('おやっ？');
    });
}
*/

var takusan = 10;
var promises = [];
for (var i = 0; i < takusan; i++) {
    promises.push(omotaiPromise(i));
}
Promise.all(promises)
    .then(function(results) {
        // results配列の各要素で結果が取れる
    });

function omotaiPromise(arg) {
    new Promise(function(resolve, reject) {
        omotai(arg, function(err, result) {
            if (err != null) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}


function omotai(a) {
    setTimeout(function() {
        console.log(a);
    }, 1000);


}