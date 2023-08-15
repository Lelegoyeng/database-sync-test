const PenerimaanBarang = (sequelize, Sequelize) =>
  sequelize.define(
    'penerimaan_barang',
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
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      no_penerimaan_barang: {
        type: Sequelize.STRING,
      },
      id_purchase: {
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
      id_supplier: {
        type: Sequelize.INTEGER,
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
      dibayar: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      retur: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      hutang: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      jatuh_tempo :{
        type: Sequelize.DATEONLY,
      },
      print_counter: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    }
  )

module.exports = PenerimaanBarang;
