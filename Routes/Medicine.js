import express from "express";

import {
  addMedicine,
  allMedicine,
  deleteMedicine,
  queryMedicine,
  updateMedicine,
} from "../DB/Medicine.js";

import dotenv from "dotenv";
import multer from "multer";
import path from "node:path";

dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${process.env.HOSPITALFILES}`);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const onlyName = file.originalname.split(".")[0];
    cb(null, `${onlyName}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

const Medicine = express();

Medicine.get("/", async (req, res) => {
  const Medicines = await allMedicine();
  res.send(Medicines);
});

Medicine.get("/:id", async (req, res) => {
  const id = req.params.id;
  const information = await queryMedicine(id);
  res.send(information);
});

Medicine.post("/:id", upload.single("file"), async (req, res) => {
  const Medicine = {
    Medicineid: req.params.id,
    ...req.body,
    medicine_path: req.file.path,
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
