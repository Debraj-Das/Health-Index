import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("server is working");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
  api -> how to use all the api in the project it's documentation

   APIs
    // Plant Management System
   1. api/plant

   // Human Resource Management System
   2. api/HR

   // Hospital Management System
   3. api/OHC
   4. api/OPD
   5. api/IPD
   6. api/medicine
   7. api/pathology 
*/

import plant from "./Routes/plant.js";
app.use("/api/plant", plant);

import hr from "./Routes/HR.js";
app.use("/api/HR", hr);

import OHC from "./Routes/OHC.js";
app.use("/api/OHC", OHC);

import OPD from "./Routes/OPD.js";
app.use("/api/OPD", OPD);

import IPD from "./Routes/IPD.js";
app.use("/api/IPD", IPD);

import Medicine from "./Routes/Medicine.js";
app.use("/api/medicine", Medicine);

import Pathology from "./Routes/Pathology.js";
app.use("/api/pathology", Pathology);
