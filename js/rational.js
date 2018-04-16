"use strict";
class Rational {
    constructor(str) {
        str = (str.indexOf('/') != -1) ? str.split('/') : [str, '1'];
        this.numerator = new Integer(str[0]);
        this.denominator = new Natural(str[1]);
    }
    toString() {
        return this.numerator + '/' + this.denominator;
    }
}