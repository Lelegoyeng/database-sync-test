const SuspendType = (sequelize, Sequelize) =>
  sequelize.define(
    'suspend_type',
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
      },
      type: {
        type: Sequelize.ENUM("LOGIN","TRANSACTION"),
      },
      keterangan: {
        type: Sequelize.STRING,
      }
    }
  )

module.exports = SuspendType