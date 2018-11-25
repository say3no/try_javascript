// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

// おさらい。Promise型で返すと method chainが使えて非同期処理が書きやすい
function hoge(num) {
    console.log(num);
    return new Promise((resolve, reject) => {
        if (0 < num) {
            resolve(num--);
        } else {
            reject('err');
        }
    })
}

// 上は非同期関数にする旨味ゼロのクソ関数だが、まあようするにPromiseで返しましょうっていう話ですな
hoge(5).then(hoge(4).then(hoge(3)));

// async ってのはってのは関数の接頭辞なんやな。非同期関数なんやな
// pythonっぽく言うと、async は Promise の decorater だ。
// Promiseを返す。resloveとrejectも当然セットでついてくる
async function fuga(bool) {
    if (bool === true) {
        return 'aaaaaaaa';
    } else {
        throw new Error('reject reject reject reject');
    }
}

fuga(true).then(a => {
    console.log(a);
}).catch(e => {
    console.log(e);
});

fuga(false).then(a => {
    console.log(a);
}).catch(e => {
    console.log(e);
});

// await は Promise の結果が返されるまで、次の処理を待つ
// つーか asyncとawaitあればもう then とかいらないよねもう
async function piyo() {
    const result = await fuga(true);
    console.log(result);
}

piyo();

// await はmap, Promise.all, Promise.race なんかも awaitできていい感じ
async function rapid() {
    console.log("hayai");
    return 'hayai';
}

async function normal() {
    console.log('futu-dayonn');
    return 'futu-dayonn';
}

async function slowly() {
    console.log('slowly slowly slowyly');
    return 'slowy slowy slowy';
}

function promise_all() {
    const a = rapid();
    const b = normal();
    const c = slowly();

    return Promise.all([a, b, c]).then((a, b, c) => {
        console.log("zenbu owatta yo -----");
    });
}

promise_all();

function promise_race() {
    const a = rapid();
    const b = normal();
    const c = slowly();

    return Promise.race([a, b, c]).then((first) => {
        console.log(first + "が一番や!");
    });
}

promise_race();

// アロー関数にもasync,awaitできる
// これ、 mapでasyncのラップしたら関数の配列全部asyncになってハッピーやない？

function sampleResolve(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, 2000);
    })
}

async function sample() {
    const array = [5, 10, 15];
    const promiseAll = await Promise.all(array.map(
        async(value) => {
            return await sampleResolve(value) * 2;
        }));

    return promiseAll;
}

sample().then(([a, b, c]) => {
    console.log(a, b, c); // => 10 20 30
});