const Hutang = (sequelize, Sequelize) =>
  sequelize.define(
    'hutang',
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
      id_hutang: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0,
      },
      id_penerimaan_barang : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_supplier: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jenis: {
        type: Sequelize.ENUM("beli", "retur", "bayar"),
        allowNull:false, 
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      referensi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      awal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      debit: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      credit: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      akhir: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      }
    }
  )

module.exports = Hutang
