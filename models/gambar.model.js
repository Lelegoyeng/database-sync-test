const Gambar = (sequelize, Sequelize) =>
  sequelize.define(
    'gambar',
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
      id_barang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lokasi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      default : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
      }
    }
  )

module.exports = Gambar
