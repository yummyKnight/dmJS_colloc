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
    static get zero() {
        return new Integer("0");
    }
}
function ABS_Z_N(num)
{
    let result = new Integer(num.toString());
    result.isNegative = false;
    return new Natural(result.toString());

}
function POZ_Z_D(num)
{
    let input = new Natural(num.toString());
    if (NZERN_N_B(input) ==  true){
        return 0;
    }
    if (num.isNegative == true){
        return 1;
    }
    else{
        return 2;
    }
}
function TRANS_Z_N(num)
{
    return ABS_Z_N(num);
}
function MUL_ZM_Z(num)
{   
    num.isNegative = num.isNegative ? false : true;
    return num;
}
function TRANS_N_Z(num)
{
        return new Integer(num.toString());
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
