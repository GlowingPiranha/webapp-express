import express from "express";
import moviesRouter from "./routes/moviesRouter.js"
import notFound from "./middleware/notFound.js"
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();



const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());

app.use(express.json());

app.use(express.static("public"));

// rotte
app.use("/movies", moviesRouter);

// middleware custom
app.use(notFound);
app.use(errorHandler);


// * rotta base x test
app.get("/", (req, res) => {
  res.send("Server attivo e connesso al database");
});

// avvio
app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
