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

describe("MUL_QQ_Q", function() {
it("Тест 1 : 3/2 * 10/8 = 15/8", function() {
assert.equal(MUL_QQ_Q(new Rational ("3/2"), new Rational ("10/8")), 15/8); // Проверяет на совпадение value_1 и value_2
});
it("Тест 2 : 1/1000 * 54/99 = 3/5500", function() {
assert.equal(MUL_QQ_Q(new Rational ("1/1000"), new Rational ("54/99")), 1/5500); // Проверяет на совпадение value_1 и value_2
});
it("Тест 3 : 833/500 * 653/1000000000 = 543949/5000000000000", function() {
assert.equal(MUL_QQ_Q(new Rational ("1/1000"), new Rational ("54/99")),543949/5000000000000); // Проверяет на совпадение value_1 и value_2
});
});
function MUL_QQ_Q(num1, num2)
{
var result = new Rational(num.toString());
result.numerator = MUL_ZZ_Z(num1.numerator, num2.numerator);
result.denominator = MUL_NN_N(num1.denominator, num2.denominator);
return result;
}
