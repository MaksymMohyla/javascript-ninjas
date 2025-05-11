import { Router } from "express";

import { superheroController } from "#controllers";

import { commonMiddleware } from "#middleware";
import { SuperheroValidator } from "#validators";

const router = Router();
const { isBodyValid } = commonMiddleware;

router.get("/", superheroController.getAllSuperheroes);

router.get("/:id", superheroController.getSuperheroById);

router.post(
  "/add",
  isBodyValid(SuperheroValidator.createSuperhero),
  superheroController.createSuperhero,
);

router.patch(
  "/:id/update",

  isBodyValid(SuperheroValidator.updateSuperhero),
  superheroController.updateSuperhero,
);

router.delete("/:id/delete", superheroController.deleteCitation);

export default router;
