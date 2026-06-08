import { App } from 'vue';

export declare const IndonesianDatePlugin: {
    install(app: App): void;
};
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $indoDate: (date?: Date | string | number | null, withDay?: boolean, shortMonth?: boolean) => string;
        $indoMonth: (date?: Date | string | number | null, short?: boolean) => string;
        $indoDay: (date?: Date | string | number | null, short?: boolean) => string;
        $indoFormat: (date: Date | string | number | null | undefined, formatStr: string) => string;
    }
}
