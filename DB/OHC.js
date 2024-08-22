import db from "./HealthIndexDB.js";

async function allOHC() {
  const result = await db.query("select * from ohc;");
  return result.rows;
}

async function queryOHC(id) {
  const result = await db.query("select * from ohc where userid=$1;", [id]);
  return result.rows[0];
}

async function addOHC(ohc) {
  const { userid, date, doctor, prescription, prescription_path } = ohc;

  if (date == "") {
    date = null;
  }

  const result = await db.query(
    "insert into ohc (userid, date, doctor, prescription, prescription_path) values ($1, $2, $3, $4, $5) returning *;",
    [userid, date, doctor, prescription, prescription_path]
  );

  return result.rows[0];
}

async function updateOHC(ohc) {
  const { userid, date, doctor, prescription } = ohc;

  const result = await db.query(
    "update ohc set date = $2, doctor = $3, prescription = $4 where userid = $1 returning *;",
    [userid, date, doctor, prescription]
  );

  return result.rows[0];
}

async function deleteOHC(id) {
  const result = await db.query(
    "delete from ohc where userid = $1 returning *;",
    [id]
  );

  return result.rows[0];
}

export { addOHC, allOHC, deleteOHC, queryOHC, updateOHC };
