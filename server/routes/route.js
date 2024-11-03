const express = require("express");
const router = express.Router();
const Student = require("../schema/student");

router.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

router.get("/insert-student", async (req, res) => {
  const student = await Student.create({ name: "John Doe", age: 20 });
  res.json(student);
});

module.exports = router;
