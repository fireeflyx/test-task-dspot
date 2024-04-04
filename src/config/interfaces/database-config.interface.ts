export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  migrations: string[];
  synchronize: boolean;
}
