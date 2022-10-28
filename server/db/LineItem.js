const conn = require("./conn");
const { UUID, UUIDV4, INTEGER } = conn.Sequelize;

const LineItem = conn.define("lineItem", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  quantity: {
    type: INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
  productId: {
    type: UUID,
  },
  orderId: {
    type: UUID,
  },
});

module.exports = LineItem;
