"use strict";
class Integer {
    constructor(str) {
        if (str[0] == '-') {
            this.isNegative = true;
            str = str.slice(1);
        } else {
            this.isNegative = false;
        }
        this.num = new Natural(str);
    }
    toString() {
        return (this.isNegative) ? '-' + this.num : '' + this.num;
    }
    strip() {
        this.num.strip();
        return this;
    }
}

function MUL_ZZ_Z(first,second) {
    let number = MUL_NN_N(first.num,second.num);
    let result = TRANS_N_Z(number);
    //set isNegative
    result.isNegative = first.isNegative != second.isNegative;
    return result;
}

function DIV_ZZ_Z(first,second) {
    let number = DIV_NN_N(first.num,second.num);
    let result = TRANS_N_Z(number);
    //set isNegative
    result.isNegative = first.isNegative != second.isNegative;
    return result;
}

function MOD_ZZ_Z(first,second) {
    let number = MOD_NN_N(first.num,second.num);
    let result = TRANS_N_Z(number);
    //set isNegative
    result.isNegative = first.isNegative != second.isNegative;
    return result;
}
