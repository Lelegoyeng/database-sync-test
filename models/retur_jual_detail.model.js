const ReturJualDetail = (sequelize, Sequelize) =>
  sequelize.define(
    'retur_jual_detail',
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
      id_retur: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_order_detail: {
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
      harga: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      hpp:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      berat: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
    }
  )

module.exports = ReturJualDetail
