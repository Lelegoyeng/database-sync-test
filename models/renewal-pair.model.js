const RenewalPair = (sequelize, Sequelize) =>
  sequelize.define(
    'renewal_pair',
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
      tanggal_expired_pair: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      tanggal_reset_pair: {
        type: Sequelize.DATEONLY,
      },
      user_create: {
        type: Sequelize.INTEGER,
      },
      user_reset: {
        type: Sequelize.INTEGER,
      },
    },
    {
      tableName: 'renewal_pair'
    }
  )

module.exports = RenewalPair
