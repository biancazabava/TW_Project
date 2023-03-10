const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite/alimente.db",
});

sequelize.sync().then(() => {
  console.log("All models were syncronized successfully!");
});

module.exports = sequelize;
