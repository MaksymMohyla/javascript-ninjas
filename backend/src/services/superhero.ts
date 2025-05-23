import { superheroRepository } from "#repositories";
import type { ISuperhero } from "#types";
import { ApiError } from "#errors";

// class for business logic and error handling
class SuperheroServices {
  public async getAllSuperheroes() {
    try {
      const superheroes = await superheroRepository.getAllSuperheroes();
      if (!superheroes || superheroes.length === 0) {
        throw new ApiError(404, "Superheroes not found");
      }
      return superheroes;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        500,
        "Internal server error: Failed to get all superheroes",
      );
    }
  }

  public async getPageWithSuperHeroes(page: string = "1") {
    try {
      if (!/^\d+$/.test(page) || parseInt(page, 10) <= 0) {
        throw new ApiError(400, "Page must be a positive integer string");
      }

      const superheroes =
        await superheroRepository.getPageWithSuperHeroes(page);

      if (!superheroes || superheroes.length === 0) {
        throw new ApiError(404, "No superheroes found for the given page");
      }

      return superheroes;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        500,
        "Internal server error: Failed to get superheroes by page",
      );
    }
  }

  public async getTotalPages() {
    try {
      return await superheroRepository.getTotalPages();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        500,
        "Internal server error: Failed to get total pages",
      );
    }
  }

  public async getSuperheroById(id: string) {
    try {
      const superhero = await superheroRepository.getSuperheroById(id);
      if (!superhero) {
        throw new ApiError(404, "Superhero not found");
      }
      return superhero;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        500,
        `Internal server error: Failed to get superhero by id: ${id}`,
      );
    }
  }

  public async createSuperhero(dto: ISuperhero) {
    try {
      return await superheroRepository.createSuperhero(dto);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        500,
        `Internal server error: Failed to create superhero "${dto.nickname}".`,
      );
    }
  }

  public async updateSuperhero(id: string, dto: Partial<ISuperhero>) {
    try {
      const updatedSuperhero = await superheroRepository.updateSuperhero(
        id,
        dto,
      );
      if (!updatedSuperhero) {
        throw new ApiError(404, "Superhero not found");
      }
      return updatedSuperhero;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        500,
        `Internal server error: Failed to update superhero: ${id}`,
      );
    }
  }

  public async deleteSuperhero(id: string) {
    try {
      const superhero = await superheroRepository.getSuperheroById(id);
      if (!superhero) {
        throw new ApiError(404, "Superhero not found");
      }
      await superheroRepository.deleteSuperhero(id);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        500,
        `Internal server error: Failed to delete superhero: ${id}`,
      );
    }
  }
}

export const superheroServices = new SuperheroServices();
