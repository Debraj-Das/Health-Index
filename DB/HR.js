import db from "./HealthIndexDB.js";

async function allUser() {
  const result = await db.query("select * from hrstatic;");
  return result.rows;
}

async function userInf(id) {
  const result = await db.query("select * from hrstatic where userid=$1;", [
    id,
  ]);
  return result.rows[0];
}

async function addUser(user) {
  const { userid, name, dob, gender, phone, email } = user;
  const result = await db.query(
    "insert into hrstatic (userid, name, dob, gender, phone, email) values ($1, $2, $3, $4, $5, $6) returning *;",
    [userid, name, dob, gender, phone, email]
  );
  return result.rows[0];
}

async function updateUser(user) {
  const { userid, name, dob, gender, phone, email } = user;
  const result = await db.query(
    "update hrstatic set name = $2, dob = $3 , gender = $4, phone = $5, email = $6 where userid = $1 returning *;",
    [userid, name, dob, gender, phone, email]
  );
  return result.rows[0];
}

async function userWorking(id) {
  const result = await db.query("SELECT * FROM hrdynamic where userid = $1;", [
    id,
  ]);
  return result.rows;
}

async function addUserWorking(user) {
  const { userid, plantid, startdate, enddate, shift } = user;
  const result = await db.query(
    "insert into hrdynamic (userid, plantid, starting_date, ending_date, shift) values ($1, $2, $3, $4, $5) returning *;",
    [userid, plantid, startdate, enddate, shift]
  );
  return result.rows[0];
}

export { addUser, addUserWorking, allUser, updateUser, userInf, userWorking };
