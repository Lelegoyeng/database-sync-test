const SettingUnilevelRO = (sequelize, Sequelize) =>
  sequelize.define(
    "setting_unilevel_ro",
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
      levels: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      max_sponsored: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      summary: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comments: "Minimal rentang bonus ro",
      },
      bonus_per_sponsored: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comments:
          "Bonus dibayar ketika bonus member mencapai kualified",
      },
    },
    {
      tableName: "setting_unilevel_ro",
    }
  );

module.exports = SettingUnilevelRO;