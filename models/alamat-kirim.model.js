const AlamatKirim = (sequelize, Sequelize) =>
  sequelize.define(
    'alamat_kirim',
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
      id_member: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      label: {
        type: Sequelize.STRING,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alamat: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      id_kecamatan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_kota: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_propinsi: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kode_pos: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    }
  )

module.exports = AlamatKirim
