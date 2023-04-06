import {
  MYSQL_DB,
  MYSQL_HOSTNAME,
  MYSQL_PASSWORD,
  MYSQL_USER,
} from "../secrets";

export const databaseConfig = {
  dialect: "mysql",
  host: MYSQL_HOSTNAME,
  database: MYSQL_DB, // name of your database
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  logging: false, // logs raw sql queries on your console
  benchmark: false, // logs out time taken by query
};
