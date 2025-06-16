"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomanDigitBuilder = void 0;
const DataStructs_1 = require("./DataStructs");
class RomanDigit {
    constructor(number, string, isFourOrNine) {
        this.number = number;
        this.string = string;
        this.isFourOrNine = isFourOrNine;
        this.romanNumber = "";
    }
}
class RomanDigitBuilder {
    constructor() {
        //this.number = number;
        this.number = 0;
        this.expandedNumber = [];
        this.completeNumber = "";
    }
    addNumber(number) {
        this.number = number;
    }
    expandNumber() {
        let stringifiedNumber = this.number.toString();
        for (let x = 0; x < stringifiedNumber.length; x++) {
            let en = [parseInt(stringifiedNumber[x])];
            for (let y = x + 1; y < stringifiedNumber.length; y++) {
                en.push(0);
            }
            let numb = en.join("");
            this.expandedNumber.push(new RomanDigit(parseInt(numb), numb, (numb[0] === "9" || numb[0] === "4") ? true : false));
        }
        //console.log( this.expandedNumber );
    }
    buildRomanNumeral() {
        for (let x = 0; x < this.expandedNumber.length; x++) {
            if (this.expandedNumber[x].isFourOrNine) {
                //let initialIndex = 0;
                for (let y = 0; y < DataStructs_1.romanArray.length; y++) {
                    let rd = "";
                    let numberFound = false;
                    //console.log( numberFound == false , this.expandedNumber[x].number , RomanDictionary.get( romanArray[y] ) );
                    while (numberFound == false && this.expandedNumber[x].number < DataStructs_1.RomanDictionary.get(DataStructs_1.romanArray[y])) {
                        //console.log( romanArray[y] );
                        rd += DataStructs_1.romanArray[y];
                        // console.log("rd", rd)
                        numberFound = true;
                        //console.log( this.expandedNumber[x].number, romanArray[y] );
                        //for( let z = y - 1; z > -1; z-- ){ 
                        //console.log( romanArray[z] );
                        //let currentNum = RomanDictionary.get( romanArray[y-1] );
                        //console.log( currentNum , RomanDictionary.get( romanArray[z] ) , this.expandedNumber[x].number );   
                        /*
                        while( this.expandedNumber[x].number currentNum - RomanDictionary.get( romanArray[z] ) == this.expandedNumber[x].number ){
                            rd+= romanArray[z];
                            console.log( rd );
                            //console.log( this.expandedNumber[x].number , RomanDictionary.get( romanArray[z] ) );
                            this.expandedNumber[x].number -= RomanDictionary.get( romanArray[z] );
                        }
                        */
                        //}
                        break;
                    }
                    if (numberFound) {
                        let index = y - 1;
                        if (DataStructs_1.romanArray[index] === "D") {
                            index--;
                        }
                        else if (DataStructs_1.romanArray[index] === "L") {
                            index--;
                        }
                        else if (DataStructs_1.romanArray[index] === "V") {
                            index--;
                        }
                        this.expandedNumber[x].number - DataStructs_1.RomanDictionary.get(DataStructs_1.romanArray[index]);
                        rd += DataStructs_1.romanArray[index];
                        this.expandedNumber[x].romanNumber = rd.split("").reverse().join("");
                        y = DataStructs_1.romanArray.length;
                    }
                }
            }
            else {
                for (let y = DataStructs_1.romanArray.length; y > -1; y--) {
                    while (this.expandedNumber[x].number >= DataStructs_1.RomanDictionary.get(DataStructs_1.romanArray[y])) {
                        //console.log( this.expandedNumber[x].number, this.expandedNumber[x].number - RomanDictionary.get( romanArray[y] )) ;
                        this.expandedNumber[x].number -= DataStructs_1.RomanDictionary.get(DataStructs_1.romanArray[y]);
                        this.expandedNumber[x].romanNumber += DataStructs_1.romanArray[y];
                    }
                }
            }
        }
        for (let x = 0; x < this.expandedNumber.length; x++) {
            this.completeNumber += this.expandedNumber[x].romanNumber;
        }
    }
}
exports.RomanDigitBuilder = RomanDigitBuilder;
