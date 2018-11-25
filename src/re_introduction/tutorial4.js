// ## Closures
// このセクションは、この再入門の内JSがもたらすものの中で最も協力なものの一つだが、同時にもっとも混乱させる可能性を秘めているセクションでもある。 クロージャとはなんだろう？

function makeAdder(a) {
    return function(b) {
        return a + b;
    };
}

var x = makeAdder(5);
var y = makeAdder(20);
console.log(x(6)); // 11
console.log(y(7)); // 27
console.log(x(100)); // 105
console.log(y(1000)); // 1020

// makeAdder()という名の関数は、こういった振る舞いをする。
// 作成時の引数で与えられた値 a を持ち続け、次にとる引数は bとなる
// なんか他にもいろいろあったけどめどいので飛ばす