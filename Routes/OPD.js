import express from "express";
import { addOPD, allOPD, deleteOPD, queryOPD, updateOPD } from "../DB/OPD.js";

const OPD = express();

OPD.get("/", async (req, res) => {
  // get all OPD informations
  const OPDs = await allOPD();
  res.send(OPDs);
});

OPD.get("/:id", async (req, res) => {
  // get OPD information with working information
  const id = req.params.id;
  const information = await queryOPD(id);
  res.send(information);
});

OPD.post("/:id", async (req, res) => {
  // add OPD information
  const OPD = {
    OPDid: req.params.id,
    ...req.body,
  };
  const newOPD = await addOPD(OPD);
  res.send(newOPD);
});

OPD.put("/:id", async (req, res) => {
  // update OPD information
  const OPD = {
    OPDid: req.params.id,
    ...req.body,
  };
  const updatedOPD = await updateOPD(OPD);
  res.send(updatedOPD);
});

OPD.delete("/:id", async (req, res) => {
  // delete OPD information
  const id = req.params.id;
  const deletedOPD = await deleteOPD(id);
  res.send(deletedOPD);
});

export default OPD;
