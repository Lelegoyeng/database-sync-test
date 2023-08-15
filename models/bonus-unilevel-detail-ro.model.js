const BonusUnilevelDetailRO = (sequelize, Sequelize) =>
  sequelize.define(
    "bonus_unilevel_detail_ro",
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
      id_bonus_unilevel_ro: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_member: {
        type: Sequelize.INTEGER
      },
      summary_bonus: {
        type: Sequelize.FLOAT,
      }
    },
    {
      tableName: "bonus_unilevel_detail_ro",
    }
  );

module.exports = BonusUnilevelDetailRO;
