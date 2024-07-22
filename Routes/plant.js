import express from "express";
import {
  addPlant,
  addPlantEnviroment,
  allPlant,
  plantEnviroment,
  plantInf,
  updatePlant,
} from "../DB/plant.js";

const plant = express();

plant.get("/", async (req, res) => {
  // get all plant information
  const plants = await allPlant();
  res.send(plants);
});

plant.post("/", async (req, res) => {
  // add plant information
  const plant = req.body;
  const newPlant = await addPlant(plant);
  res.send(newPlant);
});

plant.put("/:id", (req, res) => {
  // update plant information
  const plant = {
    id: req.params.id,
    ...req.body,
  };
  const updatedPlant = updatePlant(plant);
  res.send(updatedPlant);
});

plant.get("/:id", async (req, res) => {
  const id = req.params.id;
  const information = await plantInf(id);
  const environment = await plantEnviroment(id);
  res.send({ information, environment });
});

plant.post("/:id", async (req, res) => {
  // add plant environment
  const plant = {
    id: req.params.id,
    ...req.body,
  };

  const newPlant = await addPlantEnviroment(plant);
  res.send(newPlant);
});

plant.delete("/:id", async (req, res) => {
  // delete plant information with environment
  const id = req.params.id;
  const deletedPlant = await deletePlant(id);
  res.send(deletedPlant);
});

export default plant;
