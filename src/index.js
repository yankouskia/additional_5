module.exports = function check(str, bracketsConfig) {
    let result = false;
    let brackets = parse(str, bracketsConfig);

    //checking first&last brackets
    if (!brackets[0].isOpening || brackets[brackets.length-1].isOpening){
        return result;
    }

    //counters for every type of bracket: '(', '[', '{', '|', etc.
    let checksum = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        checksum.push(0);
    }

    for (let i = 0; i < brackets.length; i++) {
        let bracket = brackets[i];
        let nextBracket = brackets[i + 1];

        //there are 2 ways after the opening brackets: close it Or open any other one
        if (bracket.isOpening){
            checksum[bracket.type]++;//increment when opening
            if (!nextBracket.isOpening && nextBracket.type !== bracket.type){
                return result;
            }
        } else {
            checksum[bracket.type]--;//increment when closing
        }

        //the bracket-type counter can't fall below zero
        if (checksum[bracket.type] < 0){
            return result;
        }
    }

    //final checking counters...
    for (let i = 0; i < checksum.length; i++) {
        if (checksum[i] !== 0){
            return false;
        }
    }
    return true;
};

class Bracket {
    constructor(symbol, type, isOpening, isUniversal = false) {
        this.symbol = symbol;
        this.type = type;
        this.isOpening = isOpening;
        this.isUniversal = isUniversal;
    }

    corresponds(symbol) {
        return symbol === this.symbol;
    }

    //just for Universal bracket
    switchOpening(){
        this.isOpening = !this.isOpening;
        return this;
    }

    copy(){
        return new Bracket(this.symbol, this.type, this.isOpening, this.isUniversal)
    }
}

function parse(str, bracketsConfig) {
    let bracketsSet = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
            bracketsSet.push(new Bracket(bracketsConfig[i][0], i, true, true));
        } else {
            bracketsSet.push(new Bracket(bracketsConfig[i][0], i, true));
            bracketsSet.push(new Bracket(bracketsConfig[i][1], i, false));
        }
    }

    let alterBrackets = [];
    for (let i = 0; i < str.length; i++) {
        for (let bracket of bracketsSet) {
            if (bracket.corresponds(str[i])){
                alterBrackets.push(bracket.copy());
                if (bracket.isUniversal) bracket.switchOpening();
                break;
            }
        }
    }
    return alterBrackets;
}

