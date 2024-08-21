import express from "express";

import {
  addPathology,
  allPathology,
  deletePathology,
  queryPathology,
  updatePathology,
} from "../DB/Pathology.js";

import dotenv from "dotenv";
import multer from "multer";
import path from "node:path";

dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${process.env.HOSPITAL_FILES}`);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const onlyName = file.originalname.split(".")[0];
    cb(null, `${onlyName}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

const Pathology = express();

Pathology.get("/", async (req, res) => {
  const Pathologys = await allPathology();
  res.send(Pathologys);
});

Pathology.get("/:id", async (req, res) => {
  const id = req.params.id;
  const information = await queryPathology(id);
  res.send(information);
});

Pathology.post("/:id", upload.single("file"), async (req, res) => {
  const Pathology = {
    Pathologyid: req.params.id,
    ...req.body,
    result_path: req.file.path,
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
