const BonusROSponsoring = (sequelize, Sequelize) =>
  sequelize.define(
    "bonus_ro_sponsoring",
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
      id_bonus_ro: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_member: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_downline: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      posisi: {
        type: Sequelize.STRING
      },
      total_order: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      bonus_akumulasi: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      bonus_dibayar: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM("PENDING","PROCESSED","CANCELED"),
      },
      issued_at: {
        type: Sequelize.DATE,
      },
      issued_id_order: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: "bonus_ro_sponsoring",
    }
  );

module.exports = BonusROSponsoring;
