declare class RomanDigit {
    number: number;
    string: string;
    isFourOrNine: boolean;
    romanNumber: string;
    constructor(number: number, string: string, isFourOrNine: boolean);
}
export declare class RomanDigitBuilder {
    number: number;
    expandedNumber: RomanDigit[];
    completeNumber: string;
    constructor();
    addNumber(number: number): void;
    expandNumber(): void;
    buildRomanNumeral(): void;
}
export {};
