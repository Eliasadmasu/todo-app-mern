import express from "express";
import "dotenv/config";
import db from "../db/db.js";
import TodoRoutes from "../routes/todoRoutes.js";

const app = express();
app.use(express.json());

app.use("/api", TodoRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on Port Number: ${PORT}`);
});
