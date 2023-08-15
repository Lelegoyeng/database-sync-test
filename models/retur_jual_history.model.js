const ReturJualHistory = (sequelize, Sequelize) =>
  sequelize.define(
    'retur_jual_history',
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
      id_retur : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_admin: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    }
  )

module.exports = ReturJualHistory;
