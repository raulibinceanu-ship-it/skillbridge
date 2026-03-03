const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());
pool
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
  })
  .catch((err) => {
    console.error("DB connection error", err);
  });

app.get("/", (req, res) => {
  res.send("SkillBridge API running");
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
