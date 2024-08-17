import db from "./HealthIndexDB.js";

async function allUser() {
  const result = await db.query("select * from hr_static;");
  return result.rows;
}

async function userInf(id) {
  const result = await db.query("select * from hr_static where userid=$1;", [
    id,
  ]);
  return result.rows[0];
}

async function addUser(user) {
  let {
    userid,
    name,
    dob,
    gender,
    phone,
    email,
    joining_date,
    leaving_date,
  } = user;
  if(dob == ""){
    dob = null
  }
  if(joining_date == ""){
    joining_date = null
  }
  if(leaving_date == ""){
    leaving_date = null
  }

  const result = await db.query(
    "insert into hr_static (userid, name, dob, gender, phone, email, joining_date, leaving_date) values ($1, $2, $3, $4, $5, $6, $7,$8) returning *;",
    [userid, name, dob, gender, phone, email, joining_date, leaving_date]
  );
  return result.rows[0];
}

async function updateUser(user) {
  const {
    userid,
    name,
    dob,
    gender,
    phone,
    email,
    joining_date,
    leaving_date,
  } = user;
  const result = await db.query(
    "update hr_static set name = $2, dob = $3 , gender = $4, phone = $5, email = $6, joining_date = $7, leaving_date= $8 where userid = $1 returning *;",
    [userid, name, dob, gender, phone, email, joining_date, leaving_date]
  );
  return result.rows[0];
}

async function userWorking(userid) {
  const result = await db.query("SELECT * FROM hr_dynamic where userid = $1;", [
    userid,
  ]);
  return result.rows;
}

async function addUserWorking(user) {
  const { userid, shopid, shift, grade, joining_shop } = user;
  const result = await db.query(
    "insert into hr_dynamic (userid, shopid, shift, grade, joining_shop) values ($1, $2, $3, $4, $5, $6, $7) returning *;",
    [userid, shopid, shift, grade, joining_shop]
  );
  return result.rows[0];
}

export { addUser, addUserWorking, allUser, updateUser, userInf, userWorking };
