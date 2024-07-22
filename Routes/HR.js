import express from "express";
import {
  addUser,
  addUserWorking,
  allUser,
  updateUser,
  userInf,
  userWorking,
} from "../DB/HR.js";

const hr = express();

hr.get("/", async (req, res) => {
  // get all user informations
  const users = await allUser();
  res.send(users);
});

hr.post("/", async (req, res) => {
  // add user information
  const user = req.body;
  const newUser = await addUser(user);
  res.send(newUser);
});

hr.get("/:id", async (req, res) => {
  // get user information with working information
  const id = req.params.id;
  const information = await userInf(id);
  const working = await userWorking(id);
  res.send({ information, working });
});

hr.put("/:id", (req, res) => {
  // update user information
  const user = {
    userid: req.params.id,
    ...req.body,
  };
  const updatedUser = updateUser(user);
  res.send(updatedUser);
});

hr.post("/:id", async (req, res) => {
  // add user working information
  const user = {
    userid: req.params.id,
    ...req.body,
  };
  const newUserWorking = await addUserWorking(user);
  res.send(newUserWorking);
});

export default hr;
