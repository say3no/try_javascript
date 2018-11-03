FRAME_TIME = 1000;
//setInterval(() => { console.log('hogehge') }, FRAME_TIME);

(function loop() {
    setTimeout(loop, FRAME_TIME);
    console.log(Date.now());
})();
/*var timer = Date.now();
(function loop() {
    var now = Date.now();
    if (now - timer > FRAME_TIME) {
        console.log(now);
        timer = now;
    }
    requestAnimationFrame(loop);
})();
*/