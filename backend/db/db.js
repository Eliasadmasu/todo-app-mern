import mongoose, { connect } from "mongoose";
import "dotenv/config";

mongoose.connect(`${process.env.MONGOOSE_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Handling MongoDB connection successful
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default db;
