import express from "express";
import { addIPD, allIPD, deleteIPD, queryIPD, updateIPD } from "../DB/IPD.js";

const IPD = express();

IPD.get("/", async (req, res) => {
  // get all IPD informations
  const IPDs = await allIPD();
  res.send(IPDs);
});

IPD.get("/:id", async (req, res) => {
  // get IPD information with working information
  const id = req.params.id;
  const information = await queryIPD(id);
  res.send(information);
});

IPD.post("/:id", async (req, res) => {
  // add IPD information
  const IPD = {
    IPDid: req.params.id,
    ...req.body,
  };
  const newIPD = await addIPD(IPD);
  res.send(newIPD);
});

IPD.put("/:id", async (req, res) => {
  // update IPD information
  const IPD = {
    IPDid: req.params.id,
    ...req.body,
  };
  const updatedIPD = await updateIPD(IPD);
  res.send(updatedIPD);
});

IPD.delete("/:id", async (req, res) => {
  // delete IPD information
  const id = req.params.id;
  const deletedIPD = await deleteIPD(id);
  res.send(deletedIPD);
});

export default IPD;
