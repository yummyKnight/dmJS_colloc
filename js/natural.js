"use strict";
class Natural {
    constructor(str) {
        this.digits = str.split('').map((i) => +i).reverse();
    }
    toString() {
        return this.digits.slice().reverse().join('');
    }
    strip() {
        while (this.digits[this.digits.length] == 0 && this.digits.length > 1) {
			this.digits.length--;
		}
        return this;
	}
	static get zero() {
		return new Natural('0');
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

function ADD_NN_N(first, second) {
	let a = new Natural(first.toString())
	let b = new Natural(second.toString())
	if(COM_NN_D(a, b) == 1) {
		b = new Natural(first.toString())
		a = new Natural(second.toString())
	}
	for(let i=0; i < a.digits.length; i++) {
		if(i < b.digits.length)
			a.digits[i] += b.digits[i];
		if(a.digits[i] > 9) {
			a.digits[i + 1] = a.digits[i + 1] ? a.digits[i + 1] + 1 : 1;
			a.digits[i] %= 10;
		}
	}
	return a;
}

function SUB_NN_N(first, second) {
	let a = new Natural(first.toString())
	let b = new Natural(second.toString())
	if(COM_NN_D(a, b) == 0)
		return Natural.zero;
	else if(COM_NN_D(a, b) == 1) {
			b = new Natural(first.toString())
			a = new Natural(second.toString())
		}
	for(let i=0; i < a.digits.length; i++) {
		if(i < (a.digits.length - 1)) {
			a.digits[i + 1]--;
			a.digits[i] += 10;
		}
		if(i < b.digits.length)
			a.digits[i] -= b.digits[i];
		if(a.digits[i] > 9) {
			a.digits[i + 1]++;
			a.digits[i] %= 10;
		}
	}
	a.strip();
	return a;
}

function MUL_ND_N(first, b) {
	let a = new Natural(first.toString())
	let i;
	for(i = 0; i < a.digits.length; i++)
		a.digits[i] *= b;
	for(i = 0; i < a.digits.length; i++) {
		if((a.digits[i] > 9) && (i < (a.digits.length - 1))) {
			a.digits[i + 1] += Math.floor(a.digits[i]/10);
			a.digits[i] %= 10;
		}
		if((a.digits[i] > 9) && (i == (a.digits.length - 1))) {
			a.digits[i + 1] = Math.floor(a.digits[i]/10);
			a.digits[i] %= 10;
		}
	}
	a.strip();
	return a;
}

function MUL_Nk_N(first, k) {
	first = first.toString();
	if(first == 0)
		return Natural.zero;
	for(let i = 0; i < k; i++)
		first += 0;
	first = new Natural(first);
	return first;
}

function MOD_NN_N(first, second) {
	let a = new Natural(first.toString())
	let b = new Natural(second.toString())
	if(COM_NN_D(a, b) == 1) {
		b = new Natural(first.toString())
		a = new Natural(second.toString())
	}
  let col = DIV_NN_N(a, b);
  a = SUB_NDN_N(a, col, b);
  return a;
}

function GCF_NN_N(first, second) {
  let a = new Natural(first.toString());
  let b = new Natural(second.toString());
  if(COM_NN_D(a, b) == 1) {
    b = new Natural(first.toString());
    a = new Natural(second.toString());
  }
  while (MOD_NN_N(a,b) != 0) {
    if (COM_NN_D(a, b) == 2) {
      a = SUB_NN_N(a, b);
    } else if (COM_NN_D(a, b) == 1) {
      b = SUB_NN_N(b, a);
    }
  }
  return a;
}
