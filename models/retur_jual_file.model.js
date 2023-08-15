const ReturJualFile = (sequelize, Sequelize) =>
  sequelize.define(
    'retur_jual_file',
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
      id_retur: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM('image','video'),
        allowNull: false,
      },
      file: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    }
  )

module.exports = ReturJualFile;
