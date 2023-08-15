const OrderDetail = (sequelize, Sequelize) =>
  sequelize.define(
    'order_detail',
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
      id_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_barang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      value : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      harga: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      hpp: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      berat: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      persen_ppn: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      ppn: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      dpp: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      }
    }
  )

module.exports = OrderDetail
