"use strict";
function handle(func) {
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let third =  document.getElementById("third");
    let result = document.getElementById("result");
    first = new Natural(first.value);    
    if (first && second && third) {
        second = new Natural(second.value);
        third = new Natural(third.value);
        result.value = func(first, second, third);
    } else if (first && second) {
        second = new Natural(second.value);
        result.value = func(first, second);
    } else {
        result.value = func(first);
    }
}