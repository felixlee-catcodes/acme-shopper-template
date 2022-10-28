//file for our DB connection

const Sequelize = require("sequelize");
const config = {};

//turns off pg/sequelize logging if the env var is set to quiet
if (process.env.QUIET) {
  config.logging = false;
}

const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_shopping_db",
  config
);

module.exports = conn;
