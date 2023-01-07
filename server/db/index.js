const conn = require("./conn");
const User = require("./User");

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [moe, lucy, larry, felix] = await Promise.all([
    User.create({ username: "moe", password: "123" }),
    User.create({ username: "lucy", password: "123" }),
    User.create({ username: "larry", password: "123" }),
    User.create({ username: "felix", password: "123" }),
  ]);

  return {
    users: {
      moe,
      lucy,
      larry,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
};
