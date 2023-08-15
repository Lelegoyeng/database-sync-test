const SettingRO = (sequelize, Sequelize) =>
  sequelize.define(
    "setting_ro",
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
      posisi: {
        type: Sequelize.ENUM("SILVER", "PLATINUM"),
        allowNull: false,
        comment: "Posisi member",
      },
      kelipatan_ro: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        comment: "Kelipatan RO untuk mendapatkan bonus, hitung akumulasi",
      },
      cashback_ro: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        comment: "Bonus cashback jika memenuhi RO dengan kelipatan bonus",
      },
      cashback_sponsoring: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        comment:
          "Bonus dibayar ke sponsorship jika yang di sponsori RO dan mencapai kelipatan bonus",
      },
    },
    {
      tableName: "setting_ro",
    }
  );

module.exports = SettingRO;
