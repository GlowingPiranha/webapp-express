
import express from "express";
import mysql from "mysql2";

const app = express();
const PORT = 3000;




// * rotta base x test
app.get("/", (req, res) => {
  res.send("Server attivo e connesso al database");
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
