const Gudang = (sequelize, Sequelize) =>
  sequelize.define(
    'gudang',
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
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lokasi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_provinsi_kirim: {
        type: Sequelize.INTEGER,
      },
      id_kota_kirim: {
        type: Sequelize.INTEGER,
      },
      id_kecamatan_kirim: {
        type: Sequelize.INTEGER,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      is_gudang_retur: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }
    }
  )

module.exports = Gudang
