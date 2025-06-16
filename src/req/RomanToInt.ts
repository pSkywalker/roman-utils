import { RomanDictionary, romanArray } from "./DataStructs"

class RomanNum{ 
    string : string;
    number: number;

    constructor( string: string){ 
        this.string = string;
        this.number = 0;
    }
    addRomanNum( string : string ){ 
        this.string += string;
    }
    convert(){
        for( let x = 0; x < this.string.length; x++ ){ 
            //console.log(this.string[x] < this.string[x+1], this.string[x] < this.string[x+1] );
            if( RomanDictionary.get( this.string[x] ) < RomanDictionary.get(  this.string[x+1] ) ){ 
                this.number =
                    RomanDictionary.get(  this.string[x+1] )
                    -
                    RomanDictionary.get( this.string[x] )
                ;
                x+=1;
            }
            else{ 
                this.number +=  RomanDictionary.get(this.string[x]), 31 ;
            }
            
            //this.number = RomanDictionary.get(this.string[x]);
        }
    }
}
export class RomanToInteger{ 
    string: string = "";
    translatedNumber: number;
    stringRead : boolean = false;
    romanNums : RomanNum[];
    iterator : number = 0;
    
    constructor( ){ 
        //this.string = string;
        this.translatedNumber = 0;
        this.romanNums = [];
    }

    public addString( string: string ){ 
        this.string = string;
    }

    readNumber(){ 
        this.iterator = 0;

        this.stringRead = false;
        while( this.iterator < this.string.length ){
            let rm = new RomanNum( this.string[this.iterator] ); 
            //console.log( rm  , 44);
            if( 
                romanArray.indexOf(this.string[this.iterator])
                <=
                romanArray.indexOf(this.string[this.iterator+1]) 
             ){ 
                this.readPair( rm );
                //if( this.stringRead ){ 
                //    iterator = this.string.length;
                //}
            }
            //console.log( this.iterator ); 
            //console.log( rm );
            this.iterator++; 
            rm.convert();
            this.romanNums.push( rm );
        }
        //console.log( this.romanNums );
    }

    readPair(rm: RomanNum){ 
        let localIterator = this.iterator;
        while( localIterator < this.string.length ){
            if( 
                romanArray.indexOf(this.string[ localIterator ])
                <=
                romanArray.indexOf( this.string[ localIterator+1 ] )
             ){ 
               rm.addRomanNum( this.string[localIterator + 1] );
                this.iterator = localIterator + 1;
            }
            else{
                localIterator = this.string.length;
            }
            localIterator++;
        }

    }

    translateRomanToInt(){ 
        for( let x = 0; x < this.romanNums.length; x++ ){ 
            this.translatedNumber += this.romanNums[x].number;
        }
    }
}