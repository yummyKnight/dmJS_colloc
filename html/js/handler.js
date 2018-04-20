"use strict";
function handle(func, num) {
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let third =  document.getElementById("third");
    let result = document.getElementById("result");
    let ff;
    if (num == 0) {
        ff = (i) => new Natural(i);
    } else if (num == 1) {
        ff = (i) => new Integer(i);
    } else if (num == 2) {
        ff = (i) => new Rational(i);
    } else {
        ff = (i) => new Polynome(i);
    }
    first = ff(first.value);   
    if (first && second && third) {
        second = ff(second.value);
        third = ff(third.value);
        result.value = func(first, second, third);
    } else if (first && second) {
        second = ff(second.value);
        result.value = func(first, second);
    } else {
        result.value = func(first);
    }
}