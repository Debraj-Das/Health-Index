import express from "express";
import {
  addUser,
  addUserWorking,
  allUser,
  updateUser,
  userInf,
  userMedical,
  userWorking,
} from "../DB/HR.js";

const hr = express();

hr.get("/", async (req, res) => {
  const users = await allUser();
  res.send(users);
});

hr.post("/", async (req, res) => {
  const user = req.body;
  const newUser = await addUser(user);
  res.send(newUser);
});

hr.get("/:id", async (req, res) => {
  const id = req.params.id;
  const information = await userInf(id);
  const working = await userWorking(id);
  const medical = await userMedical(id);
  res.send({ information, working, medical });
});

hr.put("/:id", (req, res) => {
  const user = {
    userid: req.params.id,
    ...req.body,
  };
  const updatedUser = updateUser(user);
  res.send(updatedUser);
});

hr.post("/:id", async (req, res) => {
  const user = {
    userid: req.params.id,
    ...req.body,
  };
  const newUserWorking = await addUserWorking(user);
  res.send(newUserWorking);
});

export default hr;
