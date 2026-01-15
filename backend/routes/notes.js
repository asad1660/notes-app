const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

router.post("/", async (req, res) => {
  const note = new Note({ text: req.body.text });
  await note.save();
  res.status(201).json(note);
});

module.exports = router;
