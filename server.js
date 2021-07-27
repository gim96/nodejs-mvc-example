require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOption = {
  origin: "http://localhost:3000",
};
// app.use(cors());
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Nodejs-express-MVC" });
});

require("./routes/studentRouter")(app);

// console.log(require("crypto").randomBytes(64).toString("hex"));

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
