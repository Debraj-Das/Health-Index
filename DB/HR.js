import db from "./HealthIndexDB.js";

async function allUser() {
  const result = await db.query("select * from hr_static;");
  return result.rows;
}

async function userInf(id) {
  const result = await db.query("select * from hr_static where userid=$1;", [
    id,
  ]);
  if (result.rowCount == 0) {
    return {};
  }
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
    shopid,
    distance,
    joining_date,
    shift,
    grade,
    allergy,
    medicine_resistant,
  } = user;

  if (dob == "") {
    dob = null;
  }
  if (joining_date == "") {
    joining_date = null;
  }

  let result = {},
    shopDetails = {};

  try {
    result = await db.query(
      "insert into hr_static (userid, name, dob, gender, phone, email, joining_date, allergy, medicine_resistant) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *;",
      [
        userid,
        name,
        dob,
        gender,
        phone,
        email,
        joining_date.allergy,
        medicine_resistant,
      ]
    );
    shopDetails = await db.query(
      "insert into hr_dynamic (userid, shopid,distance, shift, grade, joining_date) values ($1, $2, $3, $4, $5, $6) returning *;",
      [userid, shopid, distance, shift, grade, joining_date]
    );
  } catch (e) {
    console.log(e);
    return {};
  }

  return { ...result.rows[0], ...shopDetails.rows[0] };
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

  const previous = await db.query("select * from hr_static;");

  if (previous.rowCount == 0) {
    return { message: "user not present" };
  }

  if (name == "") {
    name = previous.name;
  }
  if (dob == "") {
    dob = previous.dob;
  }

  if (gender == "") {
    gender = previous.gender;
  }

  if (phone == "") {
    phone = previous.phone;
  }

  if (email == "") {
    email = previous.email;
  }

  if (joining_date == "") {
    joining_date = previous.joining_date;
  }

  if (leaving_date == "") {
    leaving_date = previous.leaving_date;
  }

  const result = await db.query(
    "update hr_static set name = $2, dob = $3 , gender = $4, phone = $5, email = $6, joining_date = $7, leaving_date= $8 where userid = $1 returning *;",
    [userid, name, dob, gender, phone, email, joining_date, leaving_date]
  );
  return result.rows[0];
}

async function userWorking(userid) {
  const result = await db.query(
    "SELECT * FROM hr_dynamic where userid = $1 ORDER BY id DESC;",
    [userid]
  );
  return result.rows[0];
}

// time according last entry in medical table
async function userMedical(userid) {
  const ohc = await db.query(
    "SELECT * FROM ohc where userid = $1 ORDER BY id DESC;",
    [userid]
  );

  const opd = await db.query(
    "SELECT * FROM opd where userid = $1 ORDER BY id DESC;",
    [userid]
  );

  const ipd = await db.query(
    "SELECT * FROM ipd where userid = $1 ORDER BY id DESC;",
    [userid]
  );

  const medicine = await db.query(
    "SELECT * FROM medicine where userid = $1 ORDER BY id DESC;",
    [userid]
  );

  const pathology = await db.query(
    "SELECT * FROM pathology where userid = $1 ORDER BY id DESC;",
    [userid]
  );

  return {
    ohc: ohc.rows[0],
    opd: opd.rows[0],
    ipd: ipd.rows[0],
    medicine: medicine.rows[0],
    pathology: pathology.rows[0],
  };
}

async function addUserWorking(user) {
  const { userid, shopid, shift, grade, joining_date } = user;
  if (joining_date == "") {
    joining_date = null;
  }
  // let result = [];
  // try{

  // }
  const result = await db.query(
    "insert into hr_dynamic (userid, shopid, shift, grade, joining_date) values ($1, $2, $3, $4, $5) returning *;",
    [userid, shopid, shift, grade, joining_date]
  );
  if (result.rowCount == 0) {
    return {};
  }
  return result.rows[0];
}

export {
  addUser,
  addUserWorking,
  allUser,
  updateUser,
  userInf,
  userMedical,
  userWorking,
};
