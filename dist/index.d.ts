type ConversionDirection = 'romanToInt' | 'intToRoman';
type RomanConversionRecord = {
    direction?: ConversionDirection;
    romanNumber?: string;
    intNumber?: number;
};
export declare class RomanUtils {
    private romanBuilder;
    private intBuildier;
    private keepRecord;
    record: RomanConversionRecord[];
    constructor(keepRecord?: boolean);
    parse(char: string | number): RomanConversionRecord;
    clearHistory(): void;
}
export {};
