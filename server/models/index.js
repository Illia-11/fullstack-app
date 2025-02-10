const mongoose = require("mongoose");
const dbConfig = require("../config/db.json");
const User = require("./user");

async function main(params) {
  await mongoose.connect(dbConfig.connectionString);
}

main().catch((err) => console(err));

module.exports = { User };
