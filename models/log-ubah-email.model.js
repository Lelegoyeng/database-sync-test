const LogUbahEMail = (sequelize, Sequelize) =>
  sequelize.define("log_ubah_email", {
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
    id_admin: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    email_lama: {
      type: Sequelize.STRING,
    },
    email_baru: {
      type: Sequelize.STRING,
    },
    phone_lama: {
      type: Sequelize.STRING,
    },
    phone_baru: {
      type: Sequelize.STRING,
    },
    keterangan: {
      type: Sequelize.STRING,
    },
  });

module.exports = LogUbahEMail;
