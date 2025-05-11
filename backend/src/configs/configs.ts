import dotenv from "dotenv";

dotenv.config();

const configs = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};

export { configs };
