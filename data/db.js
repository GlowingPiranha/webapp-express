import mysql from "mysql2";

// * connessione al database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "db_movies"
});


connection.connect((err) => {
  if (err) {
    console.error("Errore di connessione: ", err);
    return;
  }
  console.log("Connesso al database");
});

export default connection;