interface LoggerParams {
    service: string;
    method: string;
    url: string;
    startTime?: [number, number];
    status?: number;
    statusText?: string;
}
export declare const httpLog: ({ service, method, url, startTime, status, statusText, }: LoggerParams) => void;
export {};
