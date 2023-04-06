import { QueryOptions } from "sequelize";
import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { databaseConfig } from "../config/database.config";

class DatabaseService {
  private static instance: DatabaseService;
  private readonly sequelize: Sequelize;

  private constructor() {
    console.log("Database Service Initialized");
    this.sequelize = new Sequelize(databaseConfig as SequelizeOptions);

    // add models here
    this.sequelize.addModels([]);

  }

  // singleton pattern
  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  async rawQuery(
    sql: string | { query: string; values: any[] },
    options?: QueryOptions
  ): Promise<any> {
    return this.sequelize.query(sql, options);
  }

  getSequelize(): Sequelize {
    return this.sequelize;
  }

  async authenticate(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      console.log("Database connection established");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      process.exit(1);
    }
  }
}

export const databaseService = DatabaseService.getInstance();
