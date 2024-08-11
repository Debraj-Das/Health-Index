import db from "./HealthIndexDB.js";

async function allShop() {
  const result = await db.query("select * from shop;");
  return result.rows;
}

async function ShopInf(shopid) {
  const result = await db.query("select * from shop where shopid=$1;", [
    shopid,
  ]);
  return result.rows[0];
}

async function addShop(shop) {
  const { shopid, location } = shop;
  const result = await db.query(
    "insert into shop (shopid, location) values ($1, $2) returning *;",
    [shopid, location]
  );
  return result.rows[0];
}

async function updateShop(shop) {
  const { shopid, location } = shop;
  const result = await db.query(
    "update plantstatic set location = $2 where shopid = $1 returning *;",
    [shopid, location]
  );
  return result.rows[0];
}

async function deleteShop(shopid) {
  const resultinf = await db.query(
    "delete from plantstatic where shopid = $1 returning *;",
    [shopid]
  );
  const resultEnv = await db.query(
    "delete from shop_env where shop = $1 returning *;",
    [shopid]
  );

  return { resultinf: resultinf.rows[0], resultEnv: resultEnv.rows[0] };
}

async function ShopEnviroment(shopid) {
  const result = await db.query("SELECT * FROM shop_env where plantid = $1;", [
    shopid,
  ]);
  return result.rows;
}

async function addShopEnviroment(shopEnv) {
  const { shopid, date, temparature, co2_label, humidity } = shopEnv;
  const result = await db.query(
    "insert into shop_env (shopid, date, temparature, co2_label, humidity) values ($1, $2, $3, $4, $5) returning *;",
    [shopid, date, temparature, co2_label, humidity]
  );
  return result.rows[0];
}

export {
  ShopEnviroment,
  ShopInf,
  addShop,
  addShopEnviroment,
  allShop,
  deleteShop,
  updateShop,
};
