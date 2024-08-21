import express from "express";
import { medical, shopEnv, userWorking } from "../DB/Analytics.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const useid = req.query.useid;
  const starting_date = req.query.starting_date;
  const ending_date = req.query.ending_date;

  const userWork = await userWorking(useid, starting_date, ending_date);

  const userMedical = await medical(useid, starting_date, ending_date);

  const shopEnviroment = {};
  let ending = ending_date;
  for (let i = 0; i < userWork.length; i++) {
    const shopid = userWork[i].shopid;
    const starting = userWork[i].joining_date;
    const currentShopEnv = await shopEnv(shopid, starting, ending);
    ending = starting;
    console.log(...currentShopEnv);
    if (currentShopEnv.length > 0) {
      shopEnviroment.push(...currentShopEnv);
    }
  }

  res.send({ userWork, userMedical, shopEnviroment });
});

export default router;
