const SettingBonusAnnualReward = (sequelize, Sequelize) =>
  sequelize.define(
    "setting_bonus_annual_reward",
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
      income_min: {
        type: Sequelize.DOUBLE,
      },
      bonus_reward_rp: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      notes: {
        type: Sequelize.STRING,
      }
    },
    {
      tableName: "setting_bonus_annual_reward",
    }
  );

module.exports = SettingBonusAnnualReward;