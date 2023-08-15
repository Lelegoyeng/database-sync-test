const BankAccount = (sequelize, Sequelize) =>
  sequelize.define(
    "bank_account",
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
      kode_bank: {
        type: Sequelize.STRING,
      },
      bank: {
        type: Sequelize.STRING,
      },
      cabang: {
        type: Sequelize.STRING,
      },
      nama_rekening: {
        type: Sequelize.STRING,
      },
      no_rekening: {
        type: Sequelize.STRING,
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    { tableName: "bank_account" }
  );

module.exports = BankAccount;
