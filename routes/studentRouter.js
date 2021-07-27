module.exports = (app) => {
  const student = require("../controllers/studentController.js");
  var router = require("express").Router();

  router.get("/", student.findAllStudent);
  router.get("/:id", student.findStudent);
  router.post("/", student.createStudent);
  router.delete("/:id", student.deleteStudent);
  router.put("/:id", student.updateStudent);

  app.use("/api/students", router);
};
