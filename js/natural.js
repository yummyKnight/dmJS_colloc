"use strict";
class Natural {
    constructor(str) {
        this.digits = str.split('').map((i) => +i).reverse();
    }
    toString() {
        return this.digits.slice().reverse().join('');
    }
}


function COM_NN_D(first, second) {
    if (first.digits.length != second.digits.length) {
        return (first.digits.length > second.digits.length) ? 2 : 1;
    } else {
        for (let i = first.digits.length - 1; i >= 0; i--) {
            if (first.digits[i] != second.digits[i]) {
                return (first.digits[i] > second.digits[i]) ? 2 : 1;
            }
        }
        return 0;
    }
}

function ADD_1N_N(num) {
    num = new Natural(num.toString())
    num.digits[0] += 1;
    for (let i = 0; i < num.digits.length; i++) {
        if (num.digits[i] > 9) {
            num.digits[i] %= 10;
            num.digits[i + 1] = num.digits[i + 1] ? num.digits[i + 1] + 1 : 1;
        } else {
            break;
        }
    }
    return num;
}