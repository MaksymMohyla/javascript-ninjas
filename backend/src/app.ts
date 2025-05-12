import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";

import cors from "cors";
import logger from "morgan";
import sequelize from "./db.ts";

import { configs } from "#configs";
import { router } from "#routes";
import { ApiError } from "#errors";

const PORT = configs.PORT || 5500;

(async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Successfully connected to database!");
  } catch (error) {
    console.error("❌ Error connecting database:", error);
  }
})();

const app = express();

app.use(
  cors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }),
);

app.use(express.json());

app.use(logger("dev"));

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the first initial home page!");
});

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(404, "Invalid endpoint"));
});

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({ message: err.message });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
export { server };
