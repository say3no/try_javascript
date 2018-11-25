var express = require('express');

const app = express();
app.use('/', () => {
    console.log('aAAAAAAAAaaaaaaaaaaaaaaaaaaaaaa');
    return 'hello wolrd';
});
app.listen(4040, () => {
    console.log('aaaaaaaakjkdfjkafjkdsjfk');
});