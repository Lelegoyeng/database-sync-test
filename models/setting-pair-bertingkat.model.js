const SettingPairBertingkat = (sequelize, Sequelize) =>
  sequelize.define(
    "setting_pair_bertingkat",
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
      setting_posisi_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      jumlah_pair_tier: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bonus_pair: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    },
    {
      tableName: "setting_pair_bertingkat",
    }
  );

module.exports = SettingPairBertingkat;
