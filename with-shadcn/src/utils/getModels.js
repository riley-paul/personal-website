import fs from "fs/promises";

export default async function getModels() {
  const path = "./public/models";
  const models = await fs.readdir(path);
  return models;
}