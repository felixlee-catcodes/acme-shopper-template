const Sequelize = require("sequelize");
const { STRING, UUID, UUIDV4 } = Sequelize;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT = process.env.JWT;

const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_shopping_db"
);

const User = conn.define("user", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  username: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

//hook to hash the user's password, limited to only rehash if the password gets updated not any other user detail
User.addHook("beforeSave", async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 5);
  }
});

//finding a user by their JWT token
User.findByToken = async function (token) {
  try {
    const { id } = jwt.verify(token, process.env.JWT);
    const user = await this.findByPk(id);
    if (user) {
      return user;
    }
    throw "user not found";
  } catch (ex) {
    const error = new Error("bad credentials");
    error.status = 401;
    throw error;
  }
};

//setting up authentication
User.authenticate = async function ({ username, password }) {
  //find out if user exists
  const user = await this.findOne({
    where: {
      username,
    },
  });
  if (user && bcrypt.compare(password, user.password)) {
    return jwt.sign({ id: user.id }, JWT);
  }
  const error = new Error("bad credentials");
  error.status = 401;
  throw error;
};

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [moe, lucy, larry] = await Promise.all([
    User.create({ username: "moe", password: "123" }),
    User.create({ username: "lucy", password: "123" }),
    User.create({ username: "larry", password: "123" }),
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
