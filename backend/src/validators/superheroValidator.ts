import joi from "joi";

class SuperheroValidator {
  private static nickname = joi.string().min(1).max(100).trim();
  private static real_name = joi.string().min(1).max(100).trim();
  private static origin_description = joi.string().min(1).max(500).trim();
  private static superpowers = joi.string().min(1).max(200).trim();
  private static catch_phrase = joi.string().min(1).max(100).trim();
  private static images = joi.array().items(joi.string().uri()).min(1);

  public static createSuperhero = joi.object({
    nickname: this.nickname.required(),
    real_name: this.real_name.required(),
    origin_description: this.origin_description.required(),
    superpowers: this.superpowers.required(),
    catch_phrase: this.catch_phrase.required(),
    images: this.images.required(),
  });

  public static updateSuperhero = joi.object({
    nickname: this.nickname,
    real_name: this.real_name,
    origin_description: this.origin_description,
    superpowers: this.superpowers,
    catch_phrase: this.catch_phrase,
    images: this.images,
  });
}

export { SuperheroValidator };
