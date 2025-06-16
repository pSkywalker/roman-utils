import { RomanDigitBuilder } from "./req/IntToRoman";
import { RomanToInteger } from "./req/RomanToInt";

type ConversionDirection = 'romanToInt' | 'intToRoman';

// 2. The shape of the data for each conversion call
type RomanConversionRecord = {
  direction?: ConversionDirection;
  romanNumber?: string;  // Optional depending on direction
  intNumber?: number;    // Optional depending on direction
};

export class RomanUtils { 

    private romanBuilder: RomanDigitBuilder;
    private intBuildier : RomanToInteger;
    private keepRecord : boolean;
    public record : RomanConversionRecord[] = [];

    constructor( keepRecord: boolean = true ) { 
        this.romanBuilder = new RomanDigitBuilder();
        this.intBuildier = new RomanToInteger();
        this.keepRecord = keepRecord;
    }

    public parse( char: string|number ) : RomanConversionRecord{ 
        let r : RomanConversionRecord = {}; 
        if( typeof char === 'string' ){ 
            this.intBuildier.addString( char );
            this.intBuildier.readNumber();
            this.intBuildier.translateRomanToInt(); 
            r.direction = 'romanToInt';
            r.romanNumber = char;
            r.intNumber = this.intBuildier.translatedNumber;
        }
        else{ 
            this.romanBuilder.addNumber( char );
            this.romanBuilder.expandNumber();
            this.romanBuilder.buildRomanNumeral();
            r.direction = 'intToRoman';
            r.romanNumber = this.romanBuilder.completeNumber;
            r.intNumber = char;
        }
        if( this.keepRecord ){ 
            this.record.push( r );
        }
        return r;
    }
    public clearHistory(){ 
        this.record = [];
    }
}