import express from "express";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import YelpRoutes from "./routes/YelpRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api", YelpRoutes);

const folder = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(folder, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile;
    path.resolve(folder, "frontend", "build", "index.html");
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
