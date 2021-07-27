module.exports = {
  host: "localhost",
  username: "root",
  password: "WMgim@96",
  database: "test",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
