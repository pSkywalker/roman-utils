"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomanUtils = void 0;
const IntToRoman_1 = require("./req/IntToRoman");
const RomanToInt_1 = require("./req/RomanToInt");
class RomanUtils {
    constructor(keepRecord = true) {
        this.record = [];
        this.romanBuilder = new IntToRoman_1.RomanDigitBuilder();
        this.intBuildier = new RomanToInt_1.RomanToInteger();
        this.keepRecord = keepRecord;
    }
    parse(char) {
        let r = {};
        if (typeof char === 'string') {
            this.intBuildier.addString(char);
            this.intBuildier.readNumber();
            this.intBuildier.translateRomanToInt();
            r.direction = 'romanToInt';
            r.romanNumber = char;
            r.intNumber = this.intBuildier.translatedNumber;
        }
        else {
            this.romanBuilder.addNumber(char);
            this.romanBuilder.expandNumber();
            this.romanBuilder.buildRomanNumeral();
            r.direction = 'intToRoman';
            r.romanNumber = this.romanBuilder.completeNumber;
            r.intNumber = char;
        }
        if (this.keepRecord) {
            this.record.push(r);
        }
        return r;
    }
    clearHistory() {
        this.record = [];
    }
}
exports.RomanUtils = RomanUtils;
