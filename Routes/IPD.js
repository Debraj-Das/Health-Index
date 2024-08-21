import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import path from "node:path";
import { addIPD, allIPD, deleteIPD, queryIPD, updateIPD } from "../DB/IPD.js";

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

const IPD = express();

IPD.get("/", async (req, res) => {
  let IPDs = [];
  try {
    IPDs = await allIPD();
  } catch (e) {
    console.log(e);
    IPDs = [];
  }
  res.send(IPDs);
});

IPD.get("/:id", async (req, res) => {
  const id = req.params.id;
  let information = {};
  try {
    information = await queryIPD(id);
  } catch (e) {
    information = {};
  }
  res.send(information);
});

IPD.post("/:id", upload.single("file"), async (req, res) => {
  const IPD = {
    IPDid: req.params.id,
    ...req.body,
    prescription_path: req.file.path,
  };
  let newIPD = {};
  try {
    newIPD = await addIPD(IPD);
  } catch (e) {
    newIPD = {};
  }

  res.send(newIPD);
});

IPD.put("/:id", async (req, res) => {
  const IPD = {
    IPDid: req.params.id,
    ...req.body,
  };
  let updatedIPD = {};
  try {
    updatedIPD = await updateIPD(IPD);
  } catch (e) {
    updateIPD = {};
  }
  res.send(updatedIPD);
});

IPD.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let deletedIPD = {};
  try {
    deletedIPD = await deleteIPD(id);
  } catch (e) {
    deleteIPD = {};
  }
  res.send(deletedIPD);
});

export default IPD;
