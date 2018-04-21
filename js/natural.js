"use strict";
class Natural {
    constructor(str) {
        this.digits = str.split('').map((i) => +i).reverse();
    }
    toString() {
        return this.digits.slice().reverse().join('');
    }
    strip() {
        while (this.digits[this.digits.length - 1] == 0 && this.digits.length > 1) {
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
function NZER_N_B(num)
{
num = new Natural(num.toString())
// if(num === Natural.zero)
if(num.digits.length==1 && num.digits[0]==0)
{return true;}
else
{return false;}
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
	if(COM_NN_D(a, b) == 0) {
		return Natural.zero;
	} else if (COM_NN_D(a, b) == 1) {
		// This branch is for testing purpose
		return Natural.zero;
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
	return new Natural(first);
}

function SUB_NDN_N(first, num, second) {
    // Here check for first - second * num > 0, else throw error
    return SUB_NN_N(first, MUL_ND_N(second, new Natural('' + num)));
}

function DIV_NN_Dk(first, second) {
    const secondLength = second.digits.length;
    const firstLength = first.digits.length;
	let temp = first.toString().slice(0, secondLength)
    if (COM_NN_D(new Natural(temp), second) == 1) {
        // If second number is greater than first digits of first number, then take one more
        temp = first.toString().slice(0, secondLength + 1);
    }
	temp = new Natural(temp);
	let tempLength = temp.digits.length;
	//console.log(`${temp} - temp\n${second}`);
    let i = 0;
    while (COM_NN_D(temp, second) != 1) {
        // While temp is greater or equal than second
		i++;
		//console.log(i);
        temp = SUB_NN_N(temp, second);
        // //console.log(`temp is ${temp} after ${i}-th substraction`);
	}
	// //console.log(`${temp} - tmp, ${firstLength} - fl, ${temp.digits.length} - tl`);
    return MUL_Nk_N(new Natural(String(i)), firstLength - tempLength);
}

function MUL_NN_N(first, second){ 
	let result = Natural.zero;
	for(let i = 0;i < second.digits.length;i++){ 
		let cc = MUL_ND_N(first, second.digits[i]); 
		cc = MUL_Nk_N(cc, i); 
		result = ADD_NN_N(result, cc); 
	} 
	return result
}

function DIV_NN_N(first, second) { 
	if (COM_NN_D(first, second) == 1) {
		return Natural.zero;
	} else {
		let result = Natural.zero;
		do { 
			let dd = DIV_NN_Dk(first, second); 
			result = ADD_NN_N(result, dd);
			let cc = MUL_NN_N(second, dd);
			// //console.log(`${first}, ${cc}`);
			first = SUB_NN_N(first, cc);
			// //console.log(`${first} is first`); 
		} while (COM_NN_D(first, second) != 1);
		return result;	
	}
	 
}

function MOD_NN_N(first, second) {
	if(COM_NN_D(first, second) == 1) {
		return first;
	}
  return SUB_NN_N(first, MUL_NN_N(DIV_NN_N(first, second), second));
}

function GCF_NN_N(a, b) {
  while (COM_NN_D(MUL_NN_N(a,b), Natural.zero) != 0) {
    if (COM_NN_D(a, b) == 2) {
      a = MOD_NN_N(a, b);
    } else {
      b = MOD_NN_N(b, a);
    }
  }
  return ADD_NN_N(a, b);
}

function LCM_NN_N(first, second)
{
let a,b,c;
a = MUL_NN_N(first, second);
b = GCF_NN_N(first, second);
c = DIV_NN_N(a,b);
return c;
}
