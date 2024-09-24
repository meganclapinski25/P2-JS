declare class D {
    tempDate: Date;
    months: string[];
    days: string[];
    suffix: string[];
    constructor(...args: [number, number, number?, number?, number?, number?, number?]);
    get year(): number;
    get yr(): string;
    get month(): string;
    get mon(): string;
    get day(): string;
    get dy(): string;
    get date(): number;
    get paddedDate(): string;
    get hrs(): number;
    get paddedHours(): string;
    get mins(): number;
    get paddedMins(): string;
    get secs(): number;
    get paddedSecs(): string;
    format(mask: string): string;
}
export { D };
