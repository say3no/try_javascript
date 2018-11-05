// ## Arrow functions used as methods
// 説明の前の準備として、矢印関数記法は non-method functionsにめちゃあうってとこ見せまっせ。
// とりま下のコードやってみ。
'use strict';

var obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
        console.log(this.i, this);
    }
}


console.log("これ、同じ内容になると思うじゃん？でも違うんだな");
obj.b(); // undefined {}
obj.c(); // 10 { i: 10, b: [Function: b], c: [Function: c] }
console.log("アロー関数は、thisを参照できない。");
console.log("");

var hoge = {
    a: 10
}

// 他の例として、こういうのもあるよ。
Object.defineProperty(hoge, 'b', {
    get: () => {
        console.log(this.a, typeof this.a, this); //
        return this.a + 10;
    }
});

// でも、だめね。
console.log(hoge.b);

// ## Use of the new operator
// アロー関数はnewできない
var Foo = () => {} // 空っぽクラス関数をアロー関数でつくりますた
    //var foo = new Foo(); // コンストラクタじゃないからだめーでTypeError

// ## Use of prototype property
// アロー関数はprototypeプロパティを持ってない
var Bar = () => {};
console.log(Bar.prototype); //undefined


// # Function body
var func = x => x * x; //簡単なときはreturnいらないよ
console.log(func(6))

var func2 = (x, y) => {
    return x + y;
}; // {}でブロックつくったらreturn 必須
console.log(func2(4, 2))


// ## Returning object literals
var func3 = () => {
    foo: 1
}; // returnないからundefined
console.log(func3())

/*
var func4 = () => {
    foo: function() { return "hoge"}
}; // syntaxError
*/


// ## More exmples
let empty = () => {}; // undefined
(() => 'foobar')(); // Immediately Invoked Function Expression: IIFEってなんだ？

var simple = a => a > 15 ? 15 : a; // さんこーえんざんし
console.log(simple(16))
console.log(simple(10))

let max = (a, b) => a > b ? a : b;
console.log(max(23, 444));
console.log(max(1123, 444));

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => {
    console.log("a: " + a)
    console.log("b: " + b)
    return a + b
}); // 5,6を渡して、5+6=11を得る。11,13を渡して…
console.log(sum)
    // jsのarray.reduce(), なかなか便利な関数かもしれない

console.log(arr.map(v => v * 2))
console.log(arr.filter(v => 10 < v))
console.log(arr.reduce((a, b) => a + b))