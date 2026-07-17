export interface ApiResponse<T = undefined> {
    rc: string;
    message: string;
    msg?: string;
    status?: number;
    data: T;
}
