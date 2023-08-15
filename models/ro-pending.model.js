const ROPending = (sequelize, Sequelize) =>
  sequelize.define(
    "ro_pending",
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
      id_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_member: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      posisi_member: {
        type: Sequelize.ENUM("SILVER", "PLATINUM"),
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING,
      },
      id_sponsor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      posisi_sponsor: {
        type: Sequelize.ENUM("SILVER", "PLATINUM"),
        allowNull: false,
      },
      status_proses: {
        type: Sequelize.ENUM("PENDING", "PROCESSED", "CANCELED"),
      },
      nominal_ro: {
        type: Sequelize.DOUBLE,
      },
      notes: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: "ro_pending",
    }
  );

module.exports = ROPending;
