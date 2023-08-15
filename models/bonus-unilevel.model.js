const BonusUnilevel = (sequelize, Sequelize) =>
  sequelize.define(
    "bonus_unilevel",
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
      bonus_akumulasi: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
        comments: "Akumulasi bonus sponsor and pairing",
      },
      downline_sponsored: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comments: "Jumlah downline yang di sponsori",
      },
      downline_sponsored_qualified: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comments: "Jumlah downline yang di sponsori dan kualifikasi menerima bonus",
      },
      bonus_akumulasi_min: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        comments: "Bonus akumulasi yang di butuhkan untuk syarat kualifikasi"
      },
      downline_sponsored_max_dibayar: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bonus_per_sponsored: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      bonus_dibayar: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      }
    },
    {
      tableName: "bonus_unilevel",
    }
  );

module.exports = BonusUnilevel;
