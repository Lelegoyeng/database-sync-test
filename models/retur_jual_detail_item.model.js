const ReturJualDetailItem = (sequelize, Sequelize) =>
  sequelize.define(
    'retur_jual_detail_item',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      public_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      id_retur_jual_detail: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_order_detail_item: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_item: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hpp: {
        type: Sequelize.DOUBLE,
        allowNull: false,
defaultValue: 0,
      }
    }
  )

module.exports = ReturJualDetailItem;
