const BonusPairReward = (sequelize, Sequelize) =>
  sequelize.define(
    "bonus_pair_reward",
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
      tanggal: {
        type: Sequelize.DATE,
      },
      ranked: {
        type: Sequelize.STRING,
      },
      pair: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      bonus_dibayar: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      }
    },
    {
      tableName: "bonus_pair_reward",
    }
  );

module.exports = BonusPairReward;
