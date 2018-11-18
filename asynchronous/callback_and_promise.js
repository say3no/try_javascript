// JavaScriptの同期、非同期、コールバック、プロミス辺りを整理してみる - Qiita 
// https://qiita.com/YoshikiNakamura/items/732ded26c85a7f771a27

// ## 同期処理の基礎
// 上から解決されていく
console.log(1);
console.log(2);
console.log(3);

// ## 非同期の基礎
console.log(1);

// 1病後にさせてるので、1, 3, 2 となる。第一引数がcallback func. 終了時に第一引数を実行する。
// setTimeout(B, A)というような順序関係が実現できる
setTimeout(() => console.log(2), 1000);
console.log(3);

// setTimeoutの第一引数をN回ネストさせるような事象をcallback事象となる。こんな感じ

var asyncBuyApple = function(payment, callback) {
    setTimeout(function() {
        if (payment >= 150) {
            callback(payment - 150, null);
        } else {
            callback(null, '金額が足りません。');
        }
    }, 1000);
}

//りんごをひとつだけ買う場合
asyncBuyApple(500, function(change, error) {
    if (change !== null) {
        console.log('おつりは' + change + '円です。');
    }
    if (error !== null) {
        console.log('エラーが発生しました：' + error);
    }
});
console.log('500円払いました。');

//りんごをたくさん買う場合（コールバック地獄）
asyncBuyApple(500, function(change, error) {
    if (change !== null) {
        console.log('１回目のおつりは' + change + '円です。');
        asyncBuyApple(change, function(change, error) {
            if (change !== null) {
                console.log('２回目のおつりは' + change + '円です。');

                asyncBuyApple(change, function(change, error) {
                    if (change !== null) {
                        console.log('３回目のおつりは' + change + '円です。');
                    }
                    if (error !== null) {
                        console.log('３回目でエラーが発生しました：' + error);
                    }
                });
            }
            if (error !== null) {
                console.log('２回目でエラーが発生しました：' + error);
            }
        });
    }
    if (error !== null) {
        console.log('１回目でエラーが発生しました：' + error);
    }
});

console.log("============== Promise =================")
    // ## Promise
    // このようなcallback地獄はPromiseを使ってよりスマートに実装できる
var promiseBuyApple = function(payment) {
    return new Promise(function(resolve, reject) {
        if (payment >= 150) {
            resolve(payment - 150);
        } else {
            reject('金額が足りません。');
        }
    });
}

// Promise型はコンストラクタで成功時と失敗時を定義して、そいつがおわったら.then(成功時)と.catch(失敗時)の定義で、
// で次の処理を記述できる。
promiseBuyApple(400).then(function(change) {
    console.log('おつりは' + change + '円です');
}).catch(function(error) {
    console.log('エラーが発生しました：' + error);
});

// すべての処理における例外はひとまとめに定義する。だから、thenを連続させたとしても、このようにcatchは一つ
//りんごをたくさん買う
promiseBuyApple(400).then(function(change) {
    console.log('おつりは' + change + '円です');
    return promiseBuyApple(change);
}).then(function(change) {
    console.log('おつりは' + change + '円です');
    return promiseBuyApple(change);
}).then(function(change) {
    console.log('おつりは' + change + '円です');
}).catch(function(error) {
    console.log('エラーが発生しました：' + error);
});