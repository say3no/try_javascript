// Arrow funciton expressionは関数の記述についての糖衣構文で、こいつは this, arguments, super, new.targetを記述しない。
// この記法は non-method functions に適していて、コンストラクタには使用できない。
var materials = [
    'hoge',
    'haaa',
    'fuhihi'
];

console.log(materials.map(material => material.length))

// map関数は、ある関数xに対して、配列の各要素を引数として処理したものを配列で返すというもの（だと思う)


// ## Shorter functions
var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

// 今までの記法だと、こうなる
a = elements.map(function(element) {
    return element.length
});
// 上記は、以下すべてと等価なのだ

// わかるわ
b = elements.map(element => {
    return element.length
});

// わかるわ
c = elements.map(element => element.length);

// わからないわ
// 引数が持っている属性、メソッドがスコープに入っていて、それと一致していたらそれを使える??
d = elements.map(({
    length
}) => length);

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// ## No separate this

// 矢印記法が存在する前の世界では、すべての新しい関数はthisの値とし定義されていた.
function Person_1() {
    this.age = 0;

    setInterval(function growUP() {
        // `this` のスコープが違うので、アクセスできない。growUPのthisと、Personのコンストラクタのthisは別のものを指している。
        console.log("Person_1: " + this.age++);
    }, 1000);
}


// ECMAScript3/5では、この`this`の問題は次のように解決していた。あほくさ
function Person_2() {
    var that = this;
    that.age = 0;

    setInterval(function growUP() {
        console.log("Person_2 : " + that.age++);
    }, 1000);
}



// ECMA 6(2015) 以降では、次のようなアロー演算子で次のように書いて、期待通りの結果が獲られる
function Person_3() {
    this.age = 0;

    setInterval(() => {
        console.log("Person_3 :" + this.age++);
    }, 1000);
}

// var p1 = new Person_1(); // NaN, NaN, NaN, ...
// var p2 = new Person_2();
// var p3 = new Person_3();

// ### strict-modeとの関わり
// よくわからんのでむし


// ### Invoked through call or apply
// adder っていうオブジェクトについて考えると…
var adder = {
    base: 1,

    add: function(a) {
        var f = v => v + this.base;
        return f(a);
    },

    // これ、なにを示したくて書かかせた？？？？？？？
    addThruCall: function(a) {
        var f = v => v + this.base;
        var b = {
            base: 2
        };
        return f.call(b, a);
    }
};

console.log(adder.add(1))
console.log(adder.add(1))
console.log(adder.add(1))


// ## No binding of arguments
// Arrow functionは arguments objectを持たない。
var arguments = [1, 2, 3]
var arr = () => arguments[0];

console.log("arr():" + arr()) // 1

function foo(n) {
    var f = () => arguments[0] + n; // 2倍
    return f();
}

console.log("foo(3)" + foo(3))

// そもそもargumentsじゃなくてargs使おうね
function bar(n) {
    var f = (...args) => args[0] + n;
    return f(10)
}

console.log(bar(1)); // 11
console.log(bar(1, 2, 3, 4, 5)); // 11