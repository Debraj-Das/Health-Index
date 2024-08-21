import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import path from "node:path";
import { addOPD, allOPD, deleteOPD, queryOPD, updateOPD } from "../DB/OPD.js";

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

OPD.post("/:id", upload.single("file"), async (req, res) => {
  // add OPD information
  const OPD = {
    OPDid: req.params.id,
    ...req.body,
    prescription_path: req.file.path,
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
