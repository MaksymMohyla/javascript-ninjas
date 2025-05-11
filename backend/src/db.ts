import { Sequelize } from "sequelize";
import { configs } from "#configs";

const DB_URL = configs.DATABASE_URL;

if (!DB_URL) {
  console.error("Database URL is not defined");
  process.exit(1);
}

const sequelize = new Sequelize(DB_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },

  logging: console.log,
});

export default sequelize;
