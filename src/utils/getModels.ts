import fs from "fs/promises";

export default async function getModels(): Promise<string[]> {
  const path = "./public/models";
  const models = await fs.readdir(path);
  return models;
}
