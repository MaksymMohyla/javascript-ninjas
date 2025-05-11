import { Model, DataTypes } from "sequelize";
import type { ISuperhero } from "#types";
import sequelize from "../db.ts";

const Superhero = sequelize.define<Model<ISuperhero>>("Superhero", {
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  real_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  origin_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  superpowers: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  catch_phrase: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
});

export default Superhero;
