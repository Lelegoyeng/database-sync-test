const StokHarian = (sequelize, Sequelize) =>
  sequelize.define(
    'stok_harian',
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
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      id_item: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_gudang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      awal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      beli: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      modifikasi: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      jual: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      retur_jual: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      transfer: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      penyesuaian: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      akhir: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      hpp_awal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      hpp_akhir: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      }
    }
  )

module.exports = StokHarian
