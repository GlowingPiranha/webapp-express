import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// * connessione al database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});


connection.connect((err) => {
  if (err) {
    console.error("Errore di connessione: ", err);
    return;
  }
  console.log("Connesso al database");
});

export default connection;
