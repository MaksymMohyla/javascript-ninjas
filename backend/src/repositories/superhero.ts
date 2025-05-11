import { Superhero } from "#models";
import type { ISuperhero } from "#types";

// class for database interaction
class SuperheroRepository {
  public async getAllSuperheroes() {
    return await Superhero.findAll();
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
