const PphBonus = (sequelize, Sequelize) =>
  sequelize.define(
  "pph_bonus",
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
    is_member_bu: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      comment: "Jenis npwp member pribadi atau badan usaha"
    },
    group: {
      type: Sequelize.STRING,
      comment: "Group akumulasi pph dan bonus"
    },
    npwp: {
      type: Sequelize.STRING,
      comment: "Jika diisi, Digunakan untuk hitung pph dengan npwp"
    },
    id_bonus: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tahun_pph: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tarif_dpp: {
      type: Sequelize.DOUBLE,
    },
    dpp: {
      type: Sequelize.DOUBLE,
    },
    tarif_pph: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    tarif_range: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    bonus_bruto_didapat: {
      type: Sequelize.DOUBLE,
    },
    bonus_terhitung: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    bonus_komulatif_setahun: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    pph_komulatif_setahun: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    pph: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    tarif_pph_tambahan: {
      type: Sequelize.DOUBLE,
      defaultValue: 0
    },
    pph_tambahan: {
      type: Sequelize.DOUBLE,
      defaultValue: 0
    },
  },
  {
  tableName: "pph_bonus",
});

module.exports = PphBonus;
