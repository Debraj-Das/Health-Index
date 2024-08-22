import db from "./HealthIndexDB.js";

async function allPathology() {
  const result = await db.query("select * from pathology;");
  return result.rows;
}

async function queryPathology(id) {
  const result = await db.query("select * from pathology where userid=$1;", [
    id,
  ]);
  return result.rows[0];
}

async function addPathology(pathology) {
  const { userid, date, test, result, result_path } = pathology;

  if (date == "") {
    date = null;
  }

  const results = await db.query(
    "insert into pathology (userid, date, test, result, result_path) values ($1, $2, $3, $4, $5) returning *;",
    [userid, date, test, result, result_path]
  );

  return results.rows[0];
}

async function updatePathology(pathology) {
  const { userid, date, test, result } = pathology;

  const results = await db.query(
    "update pathology set date = $2, test = $3, result = $4 where userid = $1 returning *;",
    [userid, date, test, result]
  );

  return results.rows[0];
}

async function deletePathology(id) {
  const result = await db.query(
    "delete from pathology where userid = $1 returning *;",
    [id]
  );

  return result.rows[0];
}

export {
  addPathology,
  allPathology,
  deletePathology,
  queryPathology,
  updatePathology,
};
