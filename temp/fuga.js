'use strict';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

Promise.all(keys.map(
    value => sleep(Math.round(Math.random() * 10000)).then(() => console.log('done: ' + value))
)).then(
    () => console.log('[all done]'), // すべてresolveされた
    e => console.error(e) // ひとつでもrejectされた，または例外がスローされた
);