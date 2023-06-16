const pgp = require("pg-promise")();
const { DB_CNN } = process.env;

const dbConnection = async () => {
  try {
    const db = pgp(DB_CNN);
    await db.connect();
    console.log("database connected");
  } catch (error) {
    console.log(error);
    throw new Error("error connecting to the database");
  }
};

module.exports = {
  dbConnection,
};

