const BonusAnnualRank = (sequelize, Sequelize) =>
  sequelize.define(
    "bonus_annual_rank",
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
        unique: true
      },
      id_member: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      level: {
        type: Sequelize.STRING
      },
      jumlah_pair: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      level_pair_tercapai: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      bonus_dibayar: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      periode_awal: {
        type: Sequelize.DATE
      },
      periode_akhir: {
        type: Sequelize.DATE
      }
    },
    {
      tableName: "bonus_annual_rank",
    }
  );

module.exports = BonusAnnualRank;
