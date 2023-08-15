const BonusRO = (sequelize, Sequelize) =>
  sequelize.define(
    "bonus_ro",
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
      id_member: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_bonus: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_ro_pending: {
        type: Sequelize.INTEGER,
      },
      posisi: {
        type: Sequelize.STRING,
      },
      nominal_ro: {
        type: Sequelize.DOUBLE,
      },
      akumulasi_ro: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      jumlah_sponsored: {
        type: Sequelize.INTEGER,
      },
      minimal_sponsored: {
        type: Sequelize.INTEGER,
      },
      bonus_akumulasi: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      bonus_dibayar: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    },
    {
      tableName: "bonus_ro",
    }
  );

module.exports = BonusRO;
