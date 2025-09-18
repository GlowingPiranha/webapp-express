
import express from "express";
import moviesRouter from "../routes/moviesRouter.js"
import notFound from "../middleware/notFound.js"
import errorHandler from "../middleware/errorHandler.js";



const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));

app.use("/movies", moviesRouter);

app.use(notFound);
app.use(errorHandler);


// * rotta base x test
app.get("/", (req, res) => {
  res.send("Server attivo e connesso al database");
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
