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

function MUL_QQ_Q(num1, num2)
{
var a = new Rational(num1.toString());
var b = new Rational(num2.toString());
a.numerator = MUL_ZZ_Z(a.numerator, b.numerator);
a.denominator = MUL_NN_N(a.denominator, b.denominator);
return a;
}

function ADD_QQ_Q (num1, num2)
{
var a = new Rational(num1.toString());
var b = new Rational(num2.toString());
if(COM_NN_D(a.denominator, b.denominator) == 0) {//Если знаменатели равны
a.numerator = ADD_ZZ_Z(a.numerator,b.numerator);//Складываем числители
}else{//иначе
var lcm = LCM_NN_N(a.denominator,b.denominator);//Находим НОК
a.numerator = MUL_ZZ_Z(a.numerator,DIV_NN_N(lcm, a.denominator)); //Умножаем числитель первого числа на НОК/знаменатель первого числа
b.numerator = MUL_ZZ_Z(b.numerator,DIV_NN_N(lcm, b.denominator));//Умножаем числитель второго числа на НОК/знаменатель первого числа
a.numerator = ADD_ZZ_Z(a.numerator,b.numerator)// Складываем
a.denominator = lcm;
}
return a;
}

function SUB_QQ_Q(num1, num2)
{
  var a = new Rational(num1.toString());
  var b = new Rational(num2.toString());
  if(COM_NN_D(a.denominator, b.denominator) == 0) {//Если знаменатели равны
    a.numerator = SUB_ZZ_Z(a.numerator,b.numerator);//Вычитаем числители
  }else{
      var lcm = LCM_NN_N(a.denominator,b.denominator);//Находим НОК
      a.numerator = MUL_ZZ_Z(a.numerator,DIV_NN_N(lcm, a.denominator)); //Умножаем числитель первого числа на НОК
      b.numerator = MUL_ZZ_Z(b.numerator,DIV_NN_N(lcm, b.denominator));//Умножаем числитель второго числа на НОК
      a.numerator = SUB_ZZ_Z(a.numerator,b.numerator)// Складываем
      a.denominator = lcm;
  }
}
