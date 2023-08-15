const SettingBonusAnnualRank = (sequelize, Sequelize) =>
  sequelize.define(
    "setting_bonus_annual_rank",
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
      level: {
        type: Sequelize.ENUM('MANAGER','GENERAL MANAGER','SUPERVISOR','DIREKTUR','PRESIDEN','KOMISARIS'),
        allowNull: false
      },
      avatar: {
        type: Sequelize.STRING,
      },
      minimal_pair: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nilai_bonus: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      }
    },
    {
      tableName: "setting_bonus_annual_rank",
    }
  );

module.exports = SettingBonusAnnualRank;