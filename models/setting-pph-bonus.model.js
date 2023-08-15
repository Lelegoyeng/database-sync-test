const SettingPphBonus = (sequelize, Sequelize) =>
  sequelize.define(
    "setting_pph_bonus",
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
      range_maksimal: {
        type: Sequelize.DOUBLE,
        min: 0,
        allowNull: false,
        comment: "Range akumulasi pajak dalam satu tahun"
      },
      tarif_dpp: {
        type: Sequelize.DOUBLE,
        min: 0,
        allowNull: false,
        comment: "Tarif prosentase dpp"
      },
      tarif_pph: {
        type: Sequelize.DOUBLE,
        min: 0,
        allowNull: false,
        comment: "Tarif prosentase pajak"
      },
      tarif_pph_tambahan: {
        type: Sequelize.DOUBLE,
        min: 0,
        allowNull: false,
        comment: "Tarif prosentase pajak tambahan"
      },
      tarif_pph_bu: {
        type: Sequelize.DOUBLE,
        min: 0,
        allowNull: false,
        comment: "Tarif prosentase pajak badan usaha"
      },
      tarif_pph_non_npwp_bu: {
        type: Sequelize.DOUBLE,
        min: 0,
        allowNull: false,
        comment: "Tarif prosentase pajak non npwp badan usaha"
      },
    },
    {
      tableName: "setting_pph_bonus",
    }
  );

module.exports = SettingPphBonus;
