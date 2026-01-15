const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const noteRoutes = require("./routes/notes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/notes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
