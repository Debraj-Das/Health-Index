import db from "./HealthIndexDB.js";

async function allOPD() {
  const result = await db.query("select * from opd;");
  return result.rows;
}

async function queryOPD(id) {
  const result = await db.query("select * from opd where userid=$1;", [id]);
  return result.rows[0];
}

async function addOPD(opd) {
  const { userid, date, doctor, prescription, status } = opd;

  const result = await db.query(
    "insert into opd (userid, date, doctor, prescription, status) values ($1, $2, $3, $4, $5) returning *;",
    [userid, date, doctor, prescription, status]
  );

  return result.rows[0];
}

async function updateOPD(opd) {
  const { userid, date, doctor, prescription, status } = opd;

  const result = await db.query(
    "update opd set date = $2, doctor = $3, prescription = $4, status = $5 where userid = $1 returning *;",
    [userid, date, doctor, prescription, status]
  );

  return result.rows[0];
}

async function deleteOPD(id) {
  const result = await db.query(
    "delete from opd where userid = $1 returning *;",
    [id]
  );

  return result.rows[0];
}

export { addOPD, allOPD, deleteOPD, queryOPD, updateOPD };
