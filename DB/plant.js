import db from "./HealthIndexDB.js";

async function allPlant() {
  const result = await db.query("select * from plantstatic;");
  return result.rows;
}

async function plantInf(id) {
  const result = await db.query("select * from plantstatic where plantid=$1;", [
    id,
  ]);
  return result.rows[0];
}

async function addPlant(plant) {
  const { id, name, location } = plant;
  const result = await db.query(
    "insert into plantstatic (plantId, name, location) values ($1, $2, $3) returning *;",
    [id, name, location]
  );
  return result.rows[0];
}

async function updatePlant(plant) {
  const { id, name, location } = plant;
  const result = await db.query(
    "update plantstatic set name = $2, location = $3 where plantId = $1 returning *;",
    [id, name, location]
  );
  return result.rows[0];
}

async function deletePlant(id) {
  const resultinf = await db.query(
    "delete from plantstatic where plantId = $1 returning *;",
    [id]
  );
  const resultEnv = await db.query(
    "delete from plantenviroment where plantId = $1 returning *;",
    [id]
  );

  return { resultinf: resultinf.rows[0], resultEnv: resultEnv.rows[0] };
}

async function plantEnviroment(id) {
  const result = await db.query(
    "SELECT * FROM plantenviroment where plantid = $1;",
    [id]
  );
  return result.rows;
}

async function addPlantEnviroment(plant) {
  const { id, date, temparature, co2_label, humidity } = plant;
  const result = await db.query(
    "insert into plantenviroment (plantId, date, temparature, co2_label, humidity) values ($1, $2, $3, $4, $5) returning *;",
    [id, date, temparature, co2_label, humidity]
  );
  return result.rows[0];
}

export {
  addPlant,
  addPlantEnviroment,
  allPlant,
  deletePlant,
  plantEnviroment,
  plantInf,
  updatePlant,
};
