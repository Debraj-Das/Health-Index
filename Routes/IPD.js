import express from "express";
import { addIPD, allIPD, deleteIPD, queryIPD, updateIPD } from "../DB/IPD.js";

const IPD = express();

IPD.get("/", async (req, res) => {
  // get all IPD informations
  let IPDs = [];
  try {
    IPDs = await allIPD();
  } catch (e) {
    console.log(e);
    IPDs = []
  }
  res.send(IPDs);
});

IPD.get("/:id", async (req, res) => {
  // get IPD information with working information
  const id = req.params.id;
  let information = {};
  try {
    information = await queryIPD(id);
  } catch (e) {
    information = {};
  }
  res.send(information);
});

IPD.post("/:id", async (req, res) => {
  // add IPD information
  const IPD = {
    IPDid: req.params.id,
    ...req.body,
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
  // update IPD information
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
  // delete IPD information
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
