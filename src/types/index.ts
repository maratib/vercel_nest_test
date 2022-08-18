export enum Role {
  USER = 'user',
  ADMIN = 'admin',
  ROOT = 'root',
}

export enum Report {
  JSON = 'JSON',
  XML = 'XML',
}

export interface AccessTokenPayload {
  userId: number;
  userName: string;
}
