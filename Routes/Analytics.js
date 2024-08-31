import express from "express";
import {
  medical,
  shopEnv,
  shopInf,
  userInf,
  userWorking,
} from "../DB/Analytics.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const userid = req.query.userid;
  const starting_date = req.query.starting_date;
  const ending_date = req.query.ending_date;

  const userDetails = await userInf(userid);
  const userWork = await userWorking(userid, starting_date, ending_date);
  const userMedical = await medical(userid, starting_date, ending_date);

  const shopEnvironment = [];
  let ending = ending_date;
  for (let i = 0; i < userWork.length; i++) {
    const shopid = userWork[i].shopid;
    let starting = userWork[i].joining_date;

    starting = starting > starting_date ? starting : starting_date;

    const currentShopEnv = await shopEnv(shopid, starting, ending);

    ending = starting;
    if (currentShopEnv.length > 0) {
      shopEnvironment.push(...currentShopEnv);
    }
  }

  let currentShop = {};
  if (userWork.length > 0) {
    const shopid = userWork[0].shopid;
    currentShop = await shopInf(shopid);
  }

  res.send({
    userDetails,
    currentShop,
    userWork,
    userMedical,
    shopEnvironment,
  });
});

export default router;
