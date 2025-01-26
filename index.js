"use strict";
function isLegal(age) {
    if (age > 18) {
        return "user is legal";
    }
    else {
        return "user is underage";
    }
}
console.log(isLegal(21));
