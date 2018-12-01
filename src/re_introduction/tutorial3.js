var a = 1;
var b = 2;

console.log(a);
console.log(b);

(function() {
    var b = 3;
    a += b;
})();

console.log(a);
console.log(b);



// ## Custom Objects
// instead, JavaScript uses functions as classes.
// ↑ここだけおぼえとけばいいか


// こっからのmake Person はuglyな例
function ug_makePerson(first, last) {
    return {
        first: first,
        last: last
    };
}

function personFullName_0(person) {
    return person.first + ' ' + person.last;
}

function personFullNameReversed_0(person) {
    return person.last + ' ' + person.first;
}

var ss = ug_makePerson('Simon', 'Willson');
console.log(personFullName_0(ss));
console.log(personFullNameReversed_0(ss));

// こここまでmake Person はuglyな例
function makePerson(first, last) {
    return {
        first: first,
        last: last,
        fullName: function() {
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function() {
            return this.last + ', ' + this.first;
        }
    };
}


var u = makePerson('Sano', 'Say');
console.log(u.fullName());
console.log(u.fullNameReversed());

// Personクラスとしてfunctionを用意するのと、thisでスコープをちゃんと分けろって話
function Person_1(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
        return this.first + ' ' + this.last;
    };
    this.fullNameReversed = function() {
        return this.last + ', ' + this.first;
    };

}



var t = new Person_1('oguni', 'shohei');
console.log(t.fullName());
// jsにおける new とはなにか。new は this と強い関係を持っている。真新しいオブジェクトを作成する。

// Personオブジェクトは良くなってきた。が、まだ醜い。personオブジェクトが new されるたびに、2つの新しい関数( fullName, fullNameReversed)もまた作成される。この共通部分を良い感じにシェアできないだろうか？
//

function personFullName() {
    return this.first + ' ' + this.last;
}


function personFullNameReversed() {
    return this.last + ' ' + this.first;
}

function Person_2(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = personFullName;
    this.fullNameReversed = personFullNameReversed;
}

// これでまた少し良くなった。personFullName, personFullNameReversedは一度だけ呼び出され、コンストラクタの中ではそのポインタだけが指定される。
// もっといい方法はないだろうか。答えはイエスだ。

function Person_3(first, last) {
    this.first = first;
    this.last = last;
}

Person_3.prototype.fullName = function() {
    return this.first + ' ' + this.lsat;
};

Person_3.prototype.fullNameReversed = function() {
    return this.last + ' ' + this.first;
};

// Person_3.prototype はPerson_3 のすべてのインスタンス共通のオブジェクトだ。
// JSはPerson_3の中→prototypeの順にnamespaceを探っていく。
// こいつは信じられないほど協力なツールだ。あとからオブジェクトメソッドの拡張ができてしまうのだ。

var hoge = new Person_3('aiueo', 'tarou');
console.log(hoge.fullNameReversed());
// console.log(hoge.firstNameCaps()); // TypeError: undefined

Person_3.prototype.firstNameCaps = function() {
    return this.first.toUpperCase();
};
console.log(hoge.firstNameCaps());

// 興味深いことに、JSのビルトインオブジェクトにも prototype を定義できる。

var aa = 'aaaaaaaaaAAAAAaaBBBBBBBBBbbb';
//console.log(a.reversed()); // TypeError: undefined

String.prototype.reversed = function() {
    var r = '';
    for (var i = this.length - 1; i >= 0; i--) {
        r += this[i];
    }
    return r;
};

console.log(aa);
console.log(aa.reversed());
console.log('ABCDEFG'.reversed());

console.log(hoge.toString()); // [object Object]
// すでにprototypeに定義されている関数は、オーバーライドもできる。
Person_3.prototype.toString = function() {
    return '<Person: ' + this.fullName() + '>';
};
console.log(hoge.toString());

// 第一引数にnullを持っていた avg.apply() を覚えているだろうか？(tutorial2.js) いまこいつに再訪してみよう。apply()の第一引数は`this`のことだ。pythonでいえばselfみたいなもんか。オブジェクト自身を渡している。
// たとえば、遊びとしてこんな new の拡張を考えてみようか。


function trivialNew(constructor, ...args) {
    var o = {}; // Create empty object
    constructor.apply(o, args);
    return o;
}

// こいつは厳密な new の拡張ではない。prototypeのセットアップをしていないからね。
var bill = trivialNew(Person_3, 'William', 'Orrange');
// こいつは、下にある new と大体一緒だ。
var hill = new Person_3('William', 'Orange');

// applyってのは、 call っていう姉妹関数を持っている

function lastNameCaps() {
    return this.last.toUpperCase();
}

const s = new Person_3('Simon', 'Willson');
console.log(lastNameCaps.call(s));
// これは、以下と同じことだ
s.lastNameCaps = lastNameCaps;
console.log(s.lastNameCaps());

// ## Inner functions
// JSの関数宣言は、関数の内側でだって可能だ。重要な点は、ネストされた関数は、その親の変数にもアクセス可能だってこと。pythonでも似たようなものがあるよね



function parentFunc() {
    var a = 1;

    function nestedFunc() {
        var b = 4; // 親の関数からはアクセスできないけど…
        return a + b; // ネストされた関数は親の変数がスコープに含まれる
    }
    return nestedFunc(); // 5
}

console.log(parentFunc());