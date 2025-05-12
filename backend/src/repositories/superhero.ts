import { Superhero } from "#models";
import type { ISuperhero } from "#types";

// class for database interaction
class SuperheroRepository {
  public async getAllSuperheroes() {
    return await Superhero.findAll();
  }

  public async getPageWithSuperHeroes(page: string = "1") {
    const limit = 4;
    const offset = (parseInt(page, 10) - 1) * limit;
    return await Superhero.findAll({ limit, offset });
  }

  public async getTotalPages() {
    const count = await Superhero.count();
    const limit = 4;
    return Math.ceil(count / limit);
  }

  public async getSuperheroById(id: string) {
    const superhero = await Superhero.findByPk(id);
    return superhero;
  }

  public async createSuperhero(dto: ISuperhero) {
    return await Superhero.create(dto);
  }

  public async updateSuperhero(id: string, dto: Partial<ISuperhero>) {
    const superhero = await this.getSuperheroById(id);
    return await superhero?.update(dto);
  }

  public async deleteSuperhero(id: string) {
    const superhero = await this.getSuperheroById(id);
    await superhero?.destroy();
  }
}

export const superheroRepository = new SuperheroRepository();
