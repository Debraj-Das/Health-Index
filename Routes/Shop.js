import express from "express";
import {
  addShop,
  addShopEnviroment,
  allShop,
  deleteShop,
  ShopEnviroment,
  ShopInf,
  updateShop,
} from "../DB/Shop.js";

const shop = express();

shop.get("/", async (req, res) => {
  // get all shop information
  const shops = await allShop();
  res.send(shops);
});

shop.post("/", async (req, res) => {
  // add shop information
  const shop = req.body;
  const newshop = await addShop(shop);
  res.send(newshop);
});

shop.put("/:shopid", (req, res) => {
  // update shop information
  const shop = {
    shopid: req.params.shopid,
    ...req.body,
  };
  const updatedshop = updateShop(shop);
  res.send(updatedshop);
});

shop.get("/:shopid", async (req, res) => {
  const shopid = req.params.shopid;
  const information = await ShopInf(shopid);
  const environment = await ShopEnviroment(shopid);
  res.send({ information, environment });
});

shop.post("/:shopid", async (req, res) => {
  // add shop environment
  const shop = {
    shopid: req.params.id,
    ...req.body,
  };

  const newshop = await addShopEnviroment(shop);
  res.send(newshop);
});

shop.delete("/:shopid", async (req, res) => {
  // delete shop information with environment
  const shopid = req.params.shopid;
  const deletedshop = await deleteShop(shopid);
  res.send(deletedshop);
});

export default shop;
