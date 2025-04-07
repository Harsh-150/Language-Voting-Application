const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Language = require("./models/Language");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// GET all languages
app.get("/api/languages", async (req, res) => {
  const langs = await Language.find();
  res.json(langs);
});

// POST vote
app.post("/api/vote/:id", async (req, res) => {
  const lang = await Language.findById(req.params.id);
  lang.votes += 1;
  await lang.save();
  res.json(lang);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
