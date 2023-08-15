const PenerimaanBarangDetail = (sequelize, Sequelize) =>
  sequelize.define(
    'penerimaan_barang_detail',
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
      id_penerimaan_barang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_purchase_detail: {
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
      hpp_awal: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      hpp_akhir: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      }
    }
  )

module.exports = PenerimaanBarangDetail;
