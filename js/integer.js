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
    if (NZER_N_B(input) ==  true){
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

function ADD_ZZ_Z(first,second) {
  let a = new Integer(first.toString());
  let b = new Integer(second.toString());
  var aNeg = POZ_Z_D(a);
  var bNeg = POZ_Z_D(b);
  if (aNeg == 0) {
    return b;
  }
  if (bNeg == 0) {
    return a;
  }
  a = ABS_Z_N(a);
  b = ABS_Z_N(b);
  var com = COM_NN_D(a, b);
  if ((aNeg == bNeg) && (aNeg == 2)) {
    return TRANS_N_Z(ADD_NN_N(a, b));
  }
  if ((aNeg == bNeg) && (aNeg == 1)) {
    return MUL_ZM_Z(TRANS_N_Z(ADD_NN_N(a, b)));
  }
  if ((aNeg == 2) && (bNeg == 1)) {
    if (com == 2) {
      return TRANS_N_Z(SUB_NN_N(a, b));
    }
    if (com == 1) {
      return MUL_ZM_Z(TRANS_N_Z(SUB_NN_N(a, b)));
    }
    if (com == 0) {
      return 0;
    }
  }
  if ((aNeg == 1) && (bNeg == 2)) {
    if (com == 1) {
      return TRANS_N_Z(SUB_NN_N(b, a));
    }
    if (com == 2) {
      return MUL_ZM_Z(TRANS_N_Z(SUB_NN_N(a, b)));
    }
    if (com == 0) {
      return 0;
    }
  }
}

function SUB_ZZ_Z(first,second) {
  let a = new Integer(first.toString());
  let b = new Integer(second.toString());
  b = MUL_ZM_Z(b);
  let res = ADD_ZZ_Z(a,b);
  return res;
}
