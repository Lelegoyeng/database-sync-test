const BonusPassUp = (sequelize, Sequelize) =>
  sequelize.define(
    "bonus_pass_up",
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
    { tableName: "bonus_pass_up" }
  );

module.exports = BonusPassUp;
