const OrderDetailItem = (sequelize, Sequelize) =>
  sequelize.define(
    'order_detail_items',
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
      public_id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, allowNull: false, },
      id_order_detail: { type: Sequelize.INTEGER, allowNull: false},
      id_item: { type: Sequelize.INTEGER, allowNull: false},
      qty: { type: Sequelize.INTEGER, allowNull: false}, // belum dikalikan dengan detail_item qty
      hpp: {type: Sequelize.DOUBLE, allowNull: false, defaultValue: 0}
    }
  )

module.exports = OrderDetailItem
