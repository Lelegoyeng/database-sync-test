const BonusAnnualReward = (sequelize, Sequelize) =>
  sequelize.define(
    "bonus_annual_reward",
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
      periode_bonus: {
        type: Sequelize.DATEONLY,
      },
      id_member: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_upline: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      member: {
        type: Sequelize.STRING,
      },
      levels: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      self_omset: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      real_omset: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      bonus_rp: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      minimal_income: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      bonus_nominal_rp: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      is_kualified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      is_checked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      notes: {
        type: Sequelize.STRING,
      },
      id_user: {
        type: Sequelize.INTEGER
      }
    },
    {
      tableName: "bonus_annual_reward",
    }
  );

module.exports = BonusAnnualReward;