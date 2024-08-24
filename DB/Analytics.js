import db from "./HealthIndexDB.js";

async function userInf(id) {
  const result = await db.query("select * from hr_static where userid=$1;", [
    id,
  ]);
  if (result.rowCount == 0) {
    return {};
  }
  return result.rows[0];
}

async function userWorking(userid, starting_date, ending_date) {
  const result = await db.query(
    "select * from hr_dynamic where userid=$1 and joining_date>=$2 and joining_date<=$3 ORDER BY joining_date DESC;",
    [userid, starting_date, ending_date]
  );

  

  return result.rows;
}

async function shopInf(shodid) {
  const result = await db.query("select * from shop where shopid=$1;", [
    shodid,
  ]);
  if (result.rowCount == 0) {
    return {};
  }
  return result.rows[0];
}

async function shopEnv(id, starting_date, ending_date) {
  const result = await db.query(
    "select * from shop_env where shopid=$1 and date>=$2 and date<=$3 ORDER BY date DESC;",
    [id, starting_date, ending_date]
  );
  return result.rows;
}

async function medical(userid, starting_date, ending_date) {
  const ohc = await db.query(
    "SELECT * FROM ohc where userid = $1 and date>=$2 and date<=$3 ORDER BY date DESC;",
    [userid, starting_date, ending_date]
  );

  const opd = await db.query(
    "SELECT * FROM opd where userid = $1 and date>=$2 and date<=$3 ORDER BY date DESC;",
    [userid, starting_date, ending_date]
  );

  const ipd = await db.query(
    "SELECT * FROM ipd WHERE userid = $1 AND (discharge_date IS NULL OR (discharge_date >= $2 AND discharge_date <= $3)) ORDER BY discharge_date DESC;",
    [userid, starting_date, ending_date]
  );

  const medicine = await db.query(
    "SELECT * FROM medicine where userid = $1 and date>=$2 and date<=$3 ORDER BY date DESC;",
    [userid, starting_date, ending_date]
  );

  const pathology = await db.query(
    "SELECT * FROM pathology where userid = $1 and date>=$2 and date<=$3 ORDER BY date DESC;",
    [userid, starting_date, ending_date]
  );

  return {
    ohc: ohc.rows,
    opd: opd.rows,
    ipd: ipd.rows,
    medicine: medicine.rows,
    pathology: pathology.rows,
  };
}

export { medical, shopEnv, shopInf, userInf, userWorking };
