import express from "express";

import {
  addMedicine,
  allMedicine,
  deleteMedicine,
  queryMedicine,
  updateMedicine,
} from "../DB/Medicine.js";

const Medicine = express();

Medicine.get("/", async (req, res) => {
  // get all Medicine informations
  const Medicines = await allMedicine();
  res.send(Medicines);
});

Medicine.get("/:id", async (req, res) => {
  // get Medicine information with working information
  const id = req.params.id;
  const information = await queryMedicine(id);
  res.send(information);
});

Medicine.post("/:id", async (req, res) => {
  // add Medicine information
  const Medicine = {
    Medicineid: req.params.id,
    ...req.body,
  };
  const newMedicine = await addMedicine(Medicine);
  res.send(newMedicine);
});

Medicine.put("/:id", async (req, res) => {
  // update Medicine information
  const Medicine = {
    Medicineid: req.params.id,
    ...req.body,
  };
  const updatedMedicine = await updateMedicine(Medicine);
  res.send(updatedMedicine);
});

Medicine.delete("/:id", async (req, res) => {
  // delete Medicine information
  const id = req.params.id;
  const deletedMedicine = await deleteMedicine(id);
  res.send(deletedMedicine);
});

export default Medicine;
