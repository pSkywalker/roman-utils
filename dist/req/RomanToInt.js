"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomanToInteger = void 0;
const DataStructs_1 = require("./DataStructs");
class RomanNum {
    constructor(string) {
        this.string = string;
        this.number = 0;
    }
    addRomanNum(string) {
        this.string += string;
    }
    convert() {
        for (let x = 0; x < this.string.length; x++) {
            //console.log(this.string[x] < this.string[x+1], this.string[x] < this.string[x+1] );
            if (DataStructs_1.RomanDictionary.get(this.string[x]) < DataStructs_1.RomanDictionary.get(this.string[x + 1])) {
                this.number =
                    DataStructs_1.RomanDictionary.get(this.string[x + 1])
                        -
                            DataStructs_1.RomanDictionary.get(this.string[x]);
                x += 1;
            }
            else {
                this.number += DataStructs_1.RomanDictionary.get(this.string[x]), 31;
            }
            //this.number = RomanDictionary.get(this.string[x]);
        }
    }
}
class RomanToInteger {
    constructor() {
        this.string = "";
        this.stringRead = false;
        this.iterator = 0;
        //this.string = string;
        this.translatedNumber = 0;
        this.romanNums = [];
    }
    addString(string) {
        this.string = string;
    }
    readNumber() {
        this.iterator = 0;
        this.stringRead = false;
        while (this.iterator < this.string.length) {
            let rm = new RomanNum(this.string[this.iterator]);
            //console.log( rm  , 44);
            if (DataStructs_1.romanArray.indexOf(this.string[this.iterator])
                <=
                    DataStructs_1.romanArray.indexOf(this.string[this.iterator + 1])) {
                this.readPair(rm);
                //if( this.stringRead ){ 
                //    iterator = this.string.length;
                //}
            }
            //console.log( this.iterator ); 
            //console.log( rm );
            this.iterator++;
            rm.convert();
            this.romanNums.push(rm);
        }
        //console.log( this.romanNums );
    }
    readPair(rm) {
        let localIterator = this.iterator;
        while (localIterator < this.string.length) {
            if (DataStructs_1.romanArray.indexOf(this.string[localIterator])
                <=
                    DataStructs_1.romanArray.indexOf(this.string[localIterator + 1])) {
                rm.addRomanNum(this.string[localIterator + 1]);
                this.iterator = localIterator + 1;
            }
            else {
                localIterator = this.string.length;
            }
            localIterator++;
        }
    }
    translateRomanToInt() {
        for (let x = 0; x < this.romanNums.length; x++) {
            this.translatedNumber += this.romanNums[x].number;
        }
    }
}
exports.RomanToInteger = RomanToInteger;
