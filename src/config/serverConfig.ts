import dotenv from "dotenv";

dotenv.config();

export = {
  PORT: process.env.PORT || "3000",
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: parseInt(process.env.REDIS_PORT || "6379", 10),
};
