const Kecamatan = (sequelize, Sequelize) =>
  sequelize.define(
    'kecamatan',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      public_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      id_propinsi: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_kota: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    }
  )

module.exports = Kecamatan
