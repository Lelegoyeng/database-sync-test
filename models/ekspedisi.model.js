const Ekspedisi = (sequelize, Sequelize) =>
  sequelize.define("ekspedisi", {
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
    kode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    logo: {
      type: Sequelize.STRING,
    },
    wajib_asuransi: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    asuransi_persen: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    asuransi_fix: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    gudangs: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });

module.exports = Ekspedisi;
