declare class RomanNum {
    string: string;
    number: number;
    constructor(string: string);
    addRomanNum(string: string): void;
    convert(): void;
}
export declare class RomanToInteger {
    string: string;
    translatedNumber: number;
    stringRead: boolean;
    romanNums: RomanNum[];
    iterator: number;
    constructor();
    addString(string: string): void;
    readNumber(): void;
    readPair(rm: RomanNum): void;
    translateRomanToInt(): void;
}
export {};
