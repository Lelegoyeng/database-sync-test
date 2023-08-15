const SponsorPending = (sequelize, Sequelize) =>
  sequelize.define(
    "sponsor_pending",
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
      posisi_member: {
        type: Sequelize.ENUM("SILVER","PLATINUM"),
      },
      nama: {
        type: Sequelize.STRING,
      },
      id_sponsor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      posisi_sponsor: {
        type: Sequelize.STRING,
      },
      id_upline: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_pass_up: {
        type: Sequelize.INTEGER,
      },
      posisi_pass_up: {
        type: Sequelize.ENUM("SILVER","PLATINUM"),
      },
      jenis: {
        type: Sequelize.ENUM("REGISTRASI", "UPGRADE"),
      },
      qty_value: {
        type: Sequelize.INTEGER,
        comment:
          "Nilai dari jenis transaksinya, upgrade=1x registrasi=sesuai posisi",
      },
      nominal: {
        type: Sequelize.DOUBLE,
        comment: "Nominal bonus sponsorship",
      },
      status_proses: {
        type: Sequelize.ENUM("PENDING", "PROCESSED"),
      },
      tanggal_proses: {
        type: Sequelize.DATE,
      },
    },
    { tableName: "sponsor_pending" }
  );

module.exports = SponsorPending;
