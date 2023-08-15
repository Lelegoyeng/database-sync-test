const DetailPurchaseOrder = (sequelize, Sequelize) =>
  sequelize.define(
    'detail_purchase_order',
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
      id_purchase_order: {
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
      harga: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      ppn: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
    }
  )

module.exports = DetailPurchaseOrder
