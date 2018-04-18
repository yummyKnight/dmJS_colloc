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
    strip() {
        this.numerator.strip();
        this.denominator.strip();
        return this;
    }
    static get zero() {
        return new Rational("0/1");
    }
}

function TRANS_Z_Q(num)
{
    return new Rational(num.toString());
}
function TRANS_Q_Z(num)
{   // no checking that denum == 1. Need to throw Error?
    return new Integer(num.numerator.toString());
}

function INT_Q_B(num)
{
var MOD = MOD_ZZ_Z (num.numerator, num.denominator);
return MOD == 0 ? 1 : 0;
}
