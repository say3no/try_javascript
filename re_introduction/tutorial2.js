var obj = new Object();
var obje = {}; // same

obj = {
    name: 'Carrot',
    for: 'Max', // 予約後はだめ。かわりに '_for'を使おうね。でもエラーにはならない
    details: {
        color: 'orange',
        size: 12
    }
};
console.log(obj.for)

// どっちの書き方でも属性にアクセスできる。
console.log(obj.details.color);
console.log(obj['details']['size'])

// 関数の形でクラスを定義する。
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Define an object
var you = new Person('You', 24)
console.log(you.name)
console.log(you['age'])

// Arrays
var a = new Array();
a[0] = 'dog';
a[1] = 23;
console.log(a.length) // 2
a[100] = 2222
console.log(a.length) // 101
console.log(a[99]) // undefined

// for ele in list: みたいなやつ
for (const ele of a) { // 邪悪
    console.log(ele)
}

// ecam5からは配列型はforEach()をもつ
var b = ["a", "b", "unpoko"]
b.forEach(function(ele, index, arr) {
    console.log(ele)
});
b.push("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
b.forEach(function(ele, index, arr) {
    console.log(ele)
});



// Functions
function add(x, y) {
    var total = x + y;
    return total;
}


console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
console.log(add()) // NaN
console.log(add(3, 444)) // 447
console.log(add(3, 444, 1000)) // 447

// Functions
function add_() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) { // 関数はargumentsという配列型を常に持っている
        sum += arguments[i];
    }
    return sum;
}

console.log("aaaadksjf;kdsfjklsdjaf;kjdasl;kfjl;aksdj;lfkjadsl;fjals;dkjfkl;ajksdf")
console.log(add_(3, 444, 1000)) // 1447

// avg()は古臭い書き方をしている。
function avg() {
    var sum = 0
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

console.log(avg(2, 3, 4, 5)) // 3.5

// 可変長引数は配列
function new_avg(...args) {
    var sum = 0;
    for (let value of args) {
        sum += value;
    }
    return sum / args.length
}

console.log(new_avg(2, 3, 4, 5)) // 3.5

function avgArry(arr) {
    var sum = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

//これまでの例だと、平均の計算対象となる数列以外を引数に渡したい時にどうすればよいだろう？ apply() はすべての関数オブジェクトが持つメソッドで、こいつを使おう

console.log(avg.apply(null, [2, 3, 4, 5]))


// この第一引数の null については後で学ぶ。