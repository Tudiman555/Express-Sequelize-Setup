// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

export const APP_PORT = process.env.APP_PORT ? +process.env.APP_PORT : 4000;
export const MYSQL_USER = process.env.MYSQL_USER;
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
export const MYSQL_DB = process.env.MYSQL_DB;
export const MYSQL_HOSTNAME = process.env.MYSQL_HOSTNAME;
