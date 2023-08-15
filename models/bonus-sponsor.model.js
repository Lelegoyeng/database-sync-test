const BonusSponsor = (sequelize, Sequelize) =>
  sequelize.define(
    'bonus_sponsor',
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
      id_bonus: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_sponsor_pending : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bonus_dibayar: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      }
    },
    {tableName: 'bonus_sponsor'}
  )

module.exports = BonusSponsor
