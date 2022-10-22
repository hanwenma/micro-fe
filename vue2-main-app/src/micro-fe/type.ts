export interface MicroApp {
    name: string;
    entry: string;
    container: string;
    activeRule: string;
    [key: string]: any;
}