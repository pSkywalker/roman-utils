import { RomanDictionary, romanArray } from "./DataStructs"

class RomanDigit{
    number: number;
    string: string;
    isFourOrNine: boolean;
    romanNumber: string;
    constructor ( number : number , string: string, isFourOrNine: boolean ){ 
        this.number = number;
        this.string = string;
        this.isFourOrNine = isFourOrNine;
        this.romanNumber = "";
    }
}
export class RomanDigitBuilder{ 
    number: number = 0;
    
    expandedNumber: RomanDigit[];

    completeNumber;

    constructor(  ) { 
        //this.number = number;
        
        this.expandedNumber = [];

        this.completeNumber = "";
    }

    public addNumber( number: number ){ 
        this.number = number;
    } 

    expandNumber(){ 
        let stringifiedNumber = this.number.toString();
        for( let x = 0; x < stringifiedNumber.length; x++ ){ 
            let en = [ parseInt( stringifiedNumber[ x ] ) ];
            for ( let y = x+1; y < stringifiedNumber.length; y++ ){ 
                en.push( 0 );
            }
            let numb = en.join("");
            this.expandedNumber.push( 
                new RomanDigit(  
                    parseInt(numb) , 
                    numb ,
                    ( numb[0] === "9" || numb[0] === "4") ? true : false
                ) 
            );
        }
        //console.log( this.expandedNumber );
    }  

    buildRomanNumeral( ){ 
        
        for( let x = 0; x < this.expandedNumber.length; x++ ){ 
            if( this.expandedNumber[x].isFourOrNine ){ 
                //let initialIndex = 0;
                for( let y = 0; y < romanArray.length ; y++ ){ 
                    let rd = "";
                    let numberFound = false;
                    //console.log( numberFound == false , this.expandedNumber[x].number , RomanDictionary.get( romanArray[y] ) );
                    while( numberFound == false && this.expandedNumber[x].number < RomanDictionary.get( romanArray[y] ) ){ 
                        //console.log( romanArray[y] );
                        rd += romanArray[y];
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
                    if( numberFound ){ 
                        let index = y-1;
                        if( romanArray[index] === "D" ){ 
                            index--;
                        }
                        else if( romanArray[index] === "L" ){ 
                            index--;
                        }
                        else if( romanArray[index] === "V" ){ 
                            index--;
                        }
                        this.expandedNumber[x].number - RomanDictionary.get(romanArray[index]);
                        rd += romanArray[index];
                        this.expandedNumber[x].romanNumber = rd.split("").reverse().join("");
                        y = romanArray.length;
                    }
                }
            }
            else{ 
                for( let y = romanArray.length ; y > -1 ; y-- ){ 
                    while( this.expandedNumber[x].number >= RomanDictionary.get( romanArray[y] ) ){ 
                        //console.log( this.expandedNumber[x].number, this.expandedNumber[x].number - RomanDictionary.get( romanArray[y] )) ;
                        this.expandedNumber[x].number -= RomanDictionary.get( romanArray[y] );
                        this.expandedNumber[x].romanNumber += romanArray[y];
                    }

                }
            }
        }
        for( let x = 0; x < this.expandedNumber.length; x++ ){ 
            this.completeNumber += this.expandedNumber[x].romanNumber;
        }
    } 


}