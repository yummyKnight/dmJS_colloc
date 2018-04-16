"use strict";

class Polynome {
    constructor(in_str) {
        let re = /[-+]/;
        // Get rid of spaces
        let monomes = in_str.replace(new RegExp(/\s/, 'g'), '');
        // Split into monomes
        let monomes_split = [];
        let string = '';
        for (let i = 0; i < monomes.length; i++) {
            if (monomes[i] == '+' || monomes[i] == '-') {
                monomes_split.push(string);
                string = monomes[i];
            } else {
                string += monomes[i];
            }
        }
        monomes_split.push(string);
        console.log(monomes_split);
        monomes = monomes_split.map((i) => {
                             // Process monomes
                            let pair;
                            i = i.trim();
                            if (i[0] == '+') {
                                i = i.slice(1);
                            }
                            if (i.indexOf('x') != -1) {
                                if (i.indexOf('^') != -1) {
                                    pair = i.split('x');
                                } else {
                                    pair = [i.slice(0, -1), '^1'] 
                                }
                            } else {
                                    pair = [i, '^0']
                            }
                            // Form pair of coeffs
                            pair[0] = new Rational(pair[0]);
                            pair[1] = new Natural(pair[1].slice(1))
                            // console.log(pair)
                            return pair;
                         });
        // Store monomes in object
        this.monomes = {}
        for (const monome of monomes) {
            this.monomes['' + monome[1]] = monome[0];
        }
    }
    toString() {
        let result = ''
        // Form string with '+' and '-'
        for (let i of Object.keys(this.monomes)){
            result += this.monomes[i].numerator.isNegative ? '' : ' + ';
            result += i == '0' ? `${this.monomes[i]}` : ` ${this.monomes[i]}x^${i} `;
        }
        // Strip '+' and trim string
        console.log(result);
        result = result[1] == '+' ? result.slice(2).trim() : result.trim();
        return result;
    }
}