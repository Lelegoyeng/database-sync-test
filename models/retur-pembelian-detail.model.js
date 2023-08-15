const ReturPembelianDetail = (sequelize, Sequelize) =>
  sequelize.define(
    'retur_pembelian_detail',
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
      id_retur_pembelian: {
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

module.exports = ReturPembelianDetail
