import type { Request, Response, NextFunction } from "express";

import { superheroServices } from "#services";
import { ApiError } from "#errors";

// class for request-response handling
class SuperheroController {
  public async getAllSuperheroes(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const superheroes = await superheroServices.getAllSuperheroes();
      res.status(200).json(superheroes);
    } catch (error) {
      next(error);
    }
  }

  public async getSuperheroById(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const superhero = await superheroServices.getSuperheroById(req.params.id);
      res.status(200).json(superhero);
    } catch (error) {
      next(error);
    }
  }

  public async createSuperhero(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const newSuperhero = await superheroServices.createSuperhero(req.body);
      res.status(201).json(newSuperhero);
    } catch (error) {
      next(error);
    }
  }

  public async updateSuperhero(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const id = req.params.id;
      const updateData = req.body;
      if (Object.keys(updateData).length === 0) {
        throw new ApiError(400, "No data to update");
      }
      const updatedSuperhero = await superheroServices.updateSuperhero(
        id,
        updateData,
      );
      res.status(200).json({
        message: "Citation updated successfully",
        updatedSuperhero,
      });
    } catch (error) {
      next(error);
    }
  }

  public async deleteCitation(req: Request, res: Response, next: NextFunction) {
    try {
      const superHeroId = req.params.id;
      await superheroServices.deleteSuperhero(superHeroId);
      res
        .status(200)
        .json({ message: "Superhero deleted successfully", superHeroId });
    } catch (error) {
      next(error);
    }
  }
}

export const superheroController = new SuperheroController();
