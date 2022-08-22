export declare enum Role {
    USER = "user",
    ADMIN = "admin",
    ROOT = "root"
}
export declare enum Report {
    JSON = "JSON",
    XML = "XML"
}
export interface AccessTokenPayload {
    userId: number;
    userName: string;
}
