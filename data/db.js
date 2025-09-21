import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// * connessione al database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_NAME || "db_movies",
  port: process.env.DB_PORT || 3306
});


connection.connect((err) => {
  if (err) {
    console.error("Errore di connessione: ", err);
    return;
  }
  console.log("Connesso al database");
});

export default connection;