import db from "./HealthIndexDB.js";

async function allIPD() {
  const result = await db.query("select * from ipd;");
  return result.rows;
}

async function queryIPD(id) {
  const result = await db.query("select * from ipd where userid=$1;", [id]);
  return result.rows;
}

async function addIPD(ipd) {
  let {
    userid,
    admit_no,
    admission_date,
    discharge_date,
    doctor,
    prescription,
    prescription_path,
    status,
  } = ipd;

  if (admission_date == "") {
    admission_date = null;
  }

  if (discharge_date == "") {
    discharge_date = null;
  }

  const result = await db.query(
    "insert into ipd (userid, admit_no, admit_date, discharge_date, doctor, prescription, prescription_path, status) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *;",
    [
      userid,
      admit_no,
      admission_date,
      discharge_date,
      doctor,
      prescription,
      prescription_path,
      status,
    ]
  );
  return result.rows[0];
}

// updata and delete work remaining

async function updateIPD(ipd) {
  const {
    userid,
    admit_no,
    admission_date,
    discharge_date,
    doctor,
    prescription,
    status,
  } = ipd;
  const result = await db.query(
    "update ipd set admit_no = $2, admit_date = $3, discharge_date = $4, doctor = $5, prescription = $6, status = $7 where userid = $1 returning *;",
    [
      userid,
      admit_no,
      admission_date,
      discharge_date,
      doctor,
      prescription,
      status,
    ]
  );
  return result.rows[0];
}

async function deleteIPD(id) {
  const result = await db.query(
    "delete from ipd where userid = $1 returning *;",
    [id]
  );
  return result.rows[0];
}

export { addIPD, allIPD, deleteIPD, queryIPD, updateIPD };
