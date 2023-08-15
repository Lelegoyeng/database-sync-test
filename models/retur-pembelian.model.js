const ReturPembelian = (sequelize, Sequelize) =>
  sequelize.define(
    'retur_pembelian',
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
      id_supplier: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_admin: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_gudang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      no_retur_pembelian: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      total_ppn: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      total_akhir: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      print_counter: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    }
  )

module.exports = ReturPembelian
