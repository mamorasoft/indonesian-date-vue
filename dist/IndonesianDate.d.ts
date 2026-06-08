export declare class IndonesianDate {
    private static months;
    private static shortMonths;
    private static days;
    private static shortDays;
    /**
     * Format a date using Indonesian day and month names.
     * Supports standard formatting characters similar to PHP date().
     */
    static format(date: Date | string | number | null | undefined, formatStr: string): string;
    /**
     * Get the Indonesian month name.
     */
    static month(date?: Date | string | number | null, short?: boolean): string;
    /**
     * Get the Indonesian day name.
     */
    static day(date?: Date | string | number | null, short?: boolean): string;
    /**
     * Get the year.
     */
    static year(date?: Date | string | number | null): string;
    /**
     * Get the full Indonesian date (e.g. "4 Juni 2026" or "Kamis, 4 Juni 2026").
     */
    static date(date?: Date | string | number | null, withDay?: boolean, shortMonth?: boolean): string;
    /**
     * Parse input into a Date object.
     */
    static parseDate(date?: Date | string | number | null): Date;
}
