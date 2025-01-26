"use strict";
function Delaycall(Fn) {
    setTimeout(Fn, 10000);
}
function log() {
    console.log("hi there");
}
Delaycall(log);
