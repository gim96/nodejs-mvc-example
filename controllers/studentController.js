const db = require("../models");
const student = db.student;
const Op = db.Op;

exports.findAllStudent = (req, res) => {
  student
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some erres.!",
      });
    });
};
exports.findStudent = (req, res) => {
  student
    .findAll({ where: { id: req.params.id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some erres.!",
      });
    });
};
exports.createStudent = (req, res) => {
  const newStudent = {
    name: req.body.name,
    age: req.body.age,
  };

  student
    .create(newStudent)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some erres.!",
      });
    });
};
exports.deleteStudent = (req, res) => {
  student
    .destroy({ where: { id: req.params.id } })
    .then((code) => {
      if (code === 1) {
        res.send({ message: "success" });
      } else {
        res.send({ message: "fail" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some erres.!",
      });
    });
};

exports.updateStudent = (req, res) => {
  student
    .update(req.body, { where: { id: req.params.id } })
    .then((code) => {
      if (code === 1) {
        res.send({ message: "success" });
      } else {
        res.send({ message: "fail", code: code });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some erres.!",
      });
    });
};
