import express from "express";

import {
  addPathology,
  allPathology,
  deletePathology,
  queryPathology,
  updatePathology,
} from "../DB/Pathology.js";

const Pathology = express();

Pathology.get("/", async (req, res) => {
  // get all Pathology informations
  const Pathologys = await allPathology();
  res.send(Pathologys);
});

Pathology.get("/:id", async (req, res) => {
  // get Pathology information with working information
  const id = req.params.id;
  const information = await queryPathology(id);
  res.send(information);
});

Pathology.post("/:id", async (req, res) => {
  // add Pathology information
  const Pathology = {
    Pathologyid: req.params.id,
    ...req.body,
  };
  const newPathology = await addPathology(Pathology);
  res.send(newPathology);
});

Pathology.put("/:id", async (req, res) => {
  // update Pathology information
  const Pathology = {
    Pathologyid: req.params.id,
    ...req.body,
  };

  const updatedPathology = await updatePathology(Pathology);
  res.send(updatedPathology);
});

Pathology.delete("/:id", async (req, res) => {
  // delete Pathology information
  const id = req.params.id;
  const deletedPathology = await deletePathology(id);
  res.send(deletedPathology);
});

export default Pathology;
