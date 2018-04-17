"use strict";
class Natural {
    constructor(str) {
        this.digits = str.split('').map((i) => +i).reverse();
    }
    toString() {
        return this.digits.slice().reverse().join('');
    }
    strip() {
        while (this.digits[this.digits.length - 1] == 0)
        this.digits.length--
        return this;
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
		return 0; 
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

function MUL_Nk_N(first, k) {
	for(let i = 0; i < k; i++)
		first += 0;
	first.strip();
	return first;
}