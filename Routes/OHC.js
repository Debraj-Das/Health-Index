import express from "express";
import multer from "multer";
import { addOHC, allOHC, deleteOHC, queryOHC, updateOHC } from "../DB/OHC.js";

import path from 'node:path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/prescriptions'); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

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


OHC.post("/:id",upload.single("file"), async (req, res) => {

  // add OHC information
  const OHC = {
    OHCid: req.params.id,
    ...req.body,
    prescription_path: req.file.path
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
