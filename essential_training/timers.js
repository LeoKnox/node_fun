var waitTime = 3000;
var currentTime = 0;
var waitInterval = 100;
var percentWaited = 0;

function writeWaitingPercent(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`)
}

var interval = setInterval(function() {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    console.log(` waiting ${currentTime/1000} seconds ...`);
    writeWaitingPercent(percentWaited);
}, waitInterval);

console.log("Wait for it");
setTimeout(function() {
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\n done");
}, waitTime)

process.stdout.write("\n");
writeWaitingPercent(percentWaited);