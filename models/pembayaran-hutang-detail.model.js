const PembayaranHutangDetail = (sequelize, Sequelize) =>
  sequelize.define(
    'pembayaran_hutang_detail',
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
      id_pembayaran_hutang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_penerimaan_barang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tagihan: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      dibayar: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
    }
  )

module.exports = PembayaranHutangDetail
