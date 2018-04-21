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
            if ((monomes[i] == '+' || monomes[i] == '-') && i) {
                monomes_split.push(string);
                string = monomes[i];
            } else {
                string += monomes[i];
            }
        }
        if (monomes.length) {
            monomes_split.push(string);
        }
        //console.log(monomes_split);
        monomes = monomes_split.map((i) => {
                             // Process monomes
                            let pair;
                            i = i.trim();
                            if (i[0] == '+') {
                                i = i.slice(1);
                            }
                            //console.log(i);
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
                            pair[0] = pair[0].length ? new Rational(pair[0]) : new Rational("1");
                            pair[1] = new Natural(pair[1].slice(1))
                            // //console.log(pair)
                            return pair;
                         });
        // Store monomes in Object
        this.monomes = {}
        for (const monome of monomes) {
            this.monomes['' + monome[1]] = monome[0];
        }
    }
    toString() {
        this.deleteZero();
        let result = ''
        // Form string with '+' and '-'
        for (let i of this.sortedDegs){
            result += this.monomes[i].numerator.isNegative ? '' : '+';
            result += i == '0' ? `${this.monomes[i]}` : `${this.monomes[i]}x^${i}`;
        }
        // Strip '+' and trim string
        //console.log(result);
        result = result[1] == '+' ? result.slice(2).trim() : result.trim();
        return result != '' ? result : '0';
    }
    get sortedDegs() {
        return Object.keys(this.monomes).sort((a, b) => {
            // Slow part of code, need to refactor
            let res = COM_NN_D(new Natural(a), new Natural(b));
            if (res == 0) {
                return res
            } else if (res == 1) {
                return 1;
            } else {
                return -1;
            }
        })
    }
    static get zero() {
        return new Polynome('0');
    }
    // idk why not working
    deleteZero()
    {
        for (let i of Object.keys(this.monomes))
        {
            if (COM_NN_D(this.monomes[i].numerator.num.strip(), Natural.zero) == 0) {
                delete this.monomes[i];
            }
        }
        return this;
    }
}

function DEG_P_N(first) {
    //console.log("Shhhh");
    if (!Object.keys(first.monomes).length) {
        return Natural.zero;
    }
    return new Natural(first.sortedDegs[0]);
}

function MUL_PP_P(first, second) {
    let result = Polynome.zero;
    for (let i of Object.keys(first.monomes)) {
        //console.log('hereeeeeeee');
        let np = MUL_PQ_P( // Mul second poly with current poly coeff
            second,
            first.monomes[i]
        );
        //console.log('a');
        let npp = MUL_PXk_P( // Mul result of previous operation by x^i, i is current monome deg
            np,
            new Natural(i)
        );
        //console.log('b');
        result =ADD_PP_P( // Add to result
            result,
            npp
        );
        //console.log(`np = ${np}, npp = ${npp}, result = ${result}`);
    }
    return result;
}

function DIV_PP_P(first, second) {
    let result = Polynome.zero;
    const secondDeg = DEG_P_N(second);
    const secondCoef = second.monomes[secondDeg];
    // While degree of the first poly is greater or equals degree of the second
    //console.log("Here");
    while (COM_NN_D(DEG_P_N(first), secondDeg) != 1) {
        //console.log("Not here");
        // Finding new monome, that would be added to result
        // The rule here is coeff of new monome would be coeff at the max degree of first
        // divided by the coeff at max degree of second (which is const), and the deg of monome
        // is simply delta between first degree and second degree.
        let deltaDeg = SUB_NN_N(DEG_P_N(first), secondDeg);
        // console.log(`${deltaDeg.toString()} dd`);
        let deltaCoef = DIV_QQ_Q(first.monomes[DEG_P_N(first)], secondCoef                                                                                                                      );
        // console.log(`${deltaCoef.toString()} dc`);
        let currentMonome = new Polynome(`${deltaCoef}x^${deltaDeg}`);
        // console.log(`cm is = ${currentMonome}`)
        result = ADD_PP_P(result, currentMonome);
        // console.log(`${MUL_PP_P(second, currentMonome)} cur ${first} is first`);
        first = SUB_PP_P(first, MUL_PP_P(second, currentMonome));
        // console.log(`after ${first} is first`);
    }
    return result;
}

function MOD_PP_P(first, second) {
    return SUB_PP_P(first, MUL_PP_P(second, DIV_PP_P(first, second)));
}

function GCD_PP_P(first, second) {
    while (COM_NN_D(DEG_P_N(first), Natural.zero) && COM_NN_D(DEG_P_N(second), Natural.zero)) {
        if (COM_NN_D(DEG_P_N(first), DEG_P_N(second)) == 2) {
            first = MOD_PP_P(first, second);
        } else {
            second = MOD_PP_P(second, first);
        }
    }
    return ADD_PP_P(first, second);
}
function ADD_PP_P(first, second)
{
    first = new Polynome('' + first);
    second = new Polynome('' + second);
for(let i of Object.keys(second.monomes))
{
    if(first.monomes[i] !== undefined)
    {    // if degree exists, sum coef
       first.monomes[i] = ADD_QQ_Q(first.monomes[i],second.monomes[i])
    }
    else
    {   // else creat such degree and copy coef from factor
        first.monomes[i] = second.monomes[i];
    }
}
    return first;
}
function  SUB_PP_P(first, second)
{   // change sign in every coef
    first = new Polynome(first + '');
    second = new Polynome(second + '');
    for(let i of Object.keys(second.monomes))
    {
        second.monomes[i].numerator.isNegative = !second.monomes[i].numerator.isNegative;
    }
    return ADD_PP_P(first,second);
}
function MUL_PQ_P(poly, num)
{
    poly = new Polynome(poly.toString());
    for(let i of Object.keys(poly.monomes))
    {
        //console.log(`${poly.monomes[i]}, ${num}`);
        poly.monomes[i] = MUL_QQ_Q(poly.monomes[i], num);
    }
    return poly;
}
// 100% work
function MUL_PXk_P(poly, num)
{
    let copy = new Polynome('');
    for(let i of Object.keys(poly.monomes))
    {
        copy.monomes[ADD_NN_N(i,num)] = poly.monomes[i];
    }
    return copy;
}
function DER_P_P(poly) {
    let res = Polynome.zero;
    for (let i of Object.keys(poly.monomes)) {
        let newDeg = SUB_NN_N(i, new Natural("1"));
        //console.log(i);
        if (i != "0") {
            //console.log(`Adding to ${newDeg} value ${poly.monomes[i]}`);
            res.monomes[newDeg] = MUL_QQ_Q(new Rational(i + ''), poly.monomes[i]);
        }
    }
    return res;
}
function LED_P_Q(poly)
{
   return new Rational(poly.monomes[DEG_P_N(poly)].toString());
}


function NMR_P_P(poly) {
    return DIV_PP_P(
            poly,
            GCD_PP_P(
                poly,
                DER_P_P(poly)
                )
        );
}

function FAC_P_Q(poly) {
    var K = new Rational('1');
    K.numerator = TRANS_N_Z(ABS_Z_N(poly.monomes[new Natural('0')].numerator));
    for (let i of Object.keys(poly.monomes)) {
        K.numerator = TRANS_N_Z(
            GCF_NN_N(
                K.numerator.num, poly.monomes[i].numerator.num
            )
        );
        K.denominator = LCM_NN_N(K.denominator,poly.monomes[i].denominator);
        //console.log(`poly[${i}] = ${poly.monomes[i]}; K = ${K}`)
    }
    //console.log(`poly = ${poly}, K = ${K}`)
    for (let i of Object.keys(poly.monomes)) {
        //console.log(`${poly.monomes[i]} / ${K}`)
        poly.monomes[i] = DIV_QQ_Q(poly.monomes[i], K);
    }
    return K;
}
