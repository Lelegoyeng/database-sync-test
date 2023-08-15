const BonusPairDetails = (sequelize, Sequelize) =>
  sequelize.define(
    "bonus_pair_details",
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
      bonus_pair_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      jumlah_pair_dibayar: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      max_pair_dibayar: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bonus_per_pair: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      bonus_dibayar: {
        type: Sequelize.FLOAT,
      }
    },
    {
      tableName: "bonus_pair_details",
    }
  );

module.exports = BonusPairDetails;
