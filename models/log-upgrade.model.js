const LogUpgrade = (sequelize, Sequelize) =>
  sequelize.define(
    'log_upgrade',
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
        type: Sequelize.CHAR(10),
      },
      kode_transaksi: {
        type: Sequelize.STRING,
      },
      status_upgrade: {
        type: Sequelize.ENUM('SUCCESS','FAILED'),
      },
      notes: {
        type: Sequelize.STRING,
      },
    },{
      tableName: 'log_upgrade'
    }
  )

module.exports = LogUpgrade
