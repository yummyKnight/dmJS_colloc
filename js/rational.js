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
function RED_Q_Q(first)
{  // find NOD and / for numerator and denominator
    let NOD = GCF_NN_N(first.numerator.num,first.denominator); // natural
    first.numerator = DIV_ZZ_Z(first.numerator,TRANS_N_Z(NOD)); //integer
    first.denominator = DIV_NN_N(first.denominator,NOD);//natural
    return first;
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
  let MOD = MOD_ZZ_Z (num.numerator, TRANS_N_Z(num.denominator));
  if(MOD.num == 0)
  return 1;
  else
  return 0;
}

function MUL_QQ_Q(num1, num2)
{
    let a = new Rational(num1.toString());
    let b = new Rational(num2.toString());
    a.numerator = MUL_ZZ_Z(a.numerator, b.numerator);
    a.denominator = MUL_NN_N(a.denominator, b.denominator);
 a = RED_Q_Q(a);
    return a;
}

function ADD_QQ_Q (num1, num2)
{
    let a = new Rational(num1.toString());
    let b = new Rational(num2.toString());
    if(COM_NN_D(a.denominator, b.denominator) == 0) {//Если знаменатели равны
        a.numerator = ADD_ZZ_Z(a.numerator,b.numerator);//Складываем числители
    } else {//иначе
    let lcm = LCM_NN_N(a.denominator,b.denominator);//Находим НОК
    a.numerator = MUL_ZZ_Z(a.numerator,TRANS_N_Z(DIV_NN_N(lcm, a.denominator))); //Умножаем числитель первого числа на НОК/знаменатель первого числа
    b.numerator = MUL_ZZ_Z(b.numerator,TRANS_N_Z(DIV_NN_N(lcm, b.denominator)));//Умножаем числитель второго числа на НОК/знаменатель первого числа
    console.log(`anum = ${a.numerator}, bnum = ${b.numerator}`);
    a.numerator = ADD_ZZ_Z(a.numerator,b.numerator)// Складываем
    a.denominator = lcm;
  }
  return RED_Q_Q(a);
}

function SUB_QQ_Q(num1, num2)
{
    let a = new Rational(num1.toString());
    let b = new Rational(num2.toString());
    b.numerator.isNegative = !b.numerator.isNegative;
    let res = ADD_QQ_Q(a,b);
    return res;
//   if(COM_NN_D(a.denominator, b.denominator) == 0) {//Если знаменатели равны
//     a.numerator = SUB_ZZ_Z(a.numerator,b.numerator);//Вычитаем числители
//   }else{
//       var lcm = LCM_NN_N(a.denominator,b.denominator);//Находим НОК
//       a.numerator = MUL_ZZ_Z(a.numerator,DIV_NN_N(lcm, a.denominator)); //Умножаем числитель первого числа на НОК
//       b.numerator = MUL_ZZ_Z(b.numerator,DIV_NN_N(lcm, b.denominator));//Умножаем числитель второго числа на НОК
//       a.numerator = SUB_ZZ_Z(a.numerator,b.numerator)// Складываем
//       a.denominator = lcm;
//   }
}
function DIV_QQ_Q(num1, num2) {
    let result = new Rational('1/1');
    result.numerator.num = MUL_NN_N(ABS_Z_N(num1.numerator),num2.denominator);
    result.denominator = MUL_NN_N(num1.denominator, TRANS_Z_N(num2.numerator));
    result.numerator.isNegative = num1.numerator.isNegative ^ num2.numerator.isNegative;
    return RED_Q_Q(result);
    }
