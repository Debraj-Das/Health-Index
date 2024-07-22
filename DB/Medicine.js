import db from "./HealthIndexDB.js";

async function allMedicine() {
  const result = await db.query("select * from medicine;");
  return result.rows;
}

async function queryMedicine(id) {
  const result = await db.query("select * from medicine where userid=$1;", [
    id,
  ]);
  return result.rows[0];
}

async function addMedicine(medicines) {
  const { useid, date, doctor, medicine } = medicines;

  const result = await db.query(
    "insert into medicine (userid, date, doctor, medicine) values ($1, $2, $3, $4) returning *;",
    [userid, date, doctor, medicine]
  );
  return result.rows[0];
}

async function updateMedicine(medicines) {
  const { userid, date, doctor, medicine } = medicines;

  const result = await db.query(
    "update medicine set date = $2, doctor = $3, medicine = $4 where userid = $1 returning *;",
    [userid, date, doctor, medicine]
  );
  return result.rows[0];
}

async function deleteMedicine(id) {
  const result = await db.query(
    "delete from medicine where userid = $1 returning *;",
    [id]
  );
  return result.rows[0];
}

export {
  addMedicine,
  allMedicine,
  deleteMedicine,
  queryMedicine,
  updateMedicine,
};
