// Numbers

console.log(0.1 + 0.2);
console.log(Math.sin(3.5));
let r = 3;
var circumference = 2 * Math.PI * r;
console.log(circumference);
console.log(parseInt('123', 10));
console.log(parseInt('010', 10));
console.log(parseInt('010'));
console.log(parseInt('0x123'));
console.log(parseInt('0x010'));
console.log(parseInt('11', 2));
console.log(parseInt('1111', 2));


// + '42'とかってやると自動でNumberにParseしてくれる。
console.log(+'42'); // Syntax Errorにならない…だと…

// Strings
console.log('\'hello\'.length: ' + 'hello'.length);
console.log('\'hello\'.charAt(0): ' + 'hello'.charAt(0));
console.log('\'hello\'.charAt(999): ' + 'hello'.charAt(999));

console.log('\'hello, world\'.replace(\'world\', \'mars\'): ' + 'hello, world'.replace('world', 'mars'));
console.log('\'hello\'.toUpperCase() : ' + 'hello'.toUpperCase());


// Other types 
// null, undefinedは別。そうだ、jsにはこういうのあったの思い出してきた。
// この辺は実践でやりながらやったほうが良さそうなのでパス。実務を伴わないとおぼえられん

// Variables

// letはblockレベルの変数
let a;
let name = 'Simon';


// myLetVariable is *not* visible out here
for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
    // myLetVariable is only visible in here
    console.log(myLetVariable);
}
// myLetVariable is *not* visible out here

// 定数
const Pi = 3.14;
//Pi = 1 // エラーになる

// global variable: var
var v_name = 'Simon';


// myVarVariable is *not* visible out here
for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
    // myVarVariable is only visible in here
    console.log(myVarVariable);
}
// myVarVariable is *not* visible out here
console.log('Out of for_sentenfe: ' + myVarVariable);

// Operators
// 気になるところだけ
// == だと、評価前に「おせっかい」をしてるらしい。 
console.log(123 == '123');
console.log(1 == true);
// === で完全一致、というか慣れ親しんだ比較ができる
console.log(123 === '123');
console.log(1 === true);


// Control structures
var hoge = 'unpoko';
if (hoge == 'puppies') {
    hoge += ' aaaaaaaa';
} else if (hoge == 'unpoko') {
    hoge += ' fugafugafuga';
} else {
    hoge += '!';
}

console.log(hoge);

while (true) {
    console.log('in while');
    break;
}


do {
    console.log('in do');
} while (false);