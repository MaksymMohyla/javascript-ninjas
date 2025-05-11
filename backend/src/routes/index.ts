import { Router } from "express";

import superheroRouter from "./superhero.ts";

const router = Router();

router.use("/superheroes", superheroRouter);

export { router };
