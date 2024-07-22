import express from "express";
import { addOHC, allOHC, deleteOHC, queryOHC, updateOHC } from "../DB/OHC.js";

const OHC = express();

OHC.get("/", async (req, res) => {
  // get all OHC informations
  const OHCs = await allOHC();
  res.send(OHCs);
});

OHC.get("/:id", async (req, res) => {
  // get OHC information with working information
  const id = req.params.id;
  const information = await queryOHC(id);
  res.send(information);
});

OHC.post("/:id", async (req, res) => {
  // add OHC information
  const OHC = {
    OHCid: req.params.id,
    ...req.body,
  };
  const newOHC = await addOHC(OHC);
  res.send(newOHC);
});

OHC.put("/:id", async (req, res) => {
  // update OHC information
  const OHC = {
    OHCid: req.params.id,
    ...req.body,
  };
  const updatedOHC = await updateOHC(OHC);
  res.send(updatedOHC);
});

OHC.delete("/:id", async (req, res) => {
  // delete OHC information
  const id = req.params.id;
  const deletedOHC = await deleteOHC(id);
  res.send(deletedOHC);
});

export default OHC;
