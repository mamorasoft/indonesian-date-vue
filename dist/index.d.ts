import { IndonesianDate } from './IndonesianDate';
import { IndonesianDatePlugin } from './plugin';

export { IndonesianDate, IndonesianDatePlugin };
/**
 * Format a date into Indonesian format.
 * Mimics the php helper function indo_date().
 */
export declare function indoDate(date?: Date | string | number | null, withDay?: boolean, shortMonth?: boolean): string;
/**
 * Get Indonesian month name.
 * Mimics the php helper function indo_month().
 */
export declare function indoMonth(date?: Date | string | number | null, short?: boolean): string;
/**
 * Get Indonesian day name.
 * Mimics the php helper function indo_day().
 */
export declare function indoDay(date?: Date | string | number | null, short?: boolean): string;
/**
 * Format date using a custom pattern mimicking PHP's format specifiers.
 */
export declare function indoFormat(date: Date | string | number | null | undefined, formatStr: string): string;
