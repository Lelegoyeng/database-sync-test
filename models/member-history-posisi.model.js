const MemberHistoryPosisi = (sequelize, Sequelize) =>
  sequelize.define(
    "member_history_posisi",
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
      type: {
        type: Sequelize.ENUM("REGISTRASI","UPGRADE"),
      },
      id_member: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      posisi_lama: {
        type: Sequelize.ENUM("SILVER","PLATINUM")
      },
      posisi_baru: {
        type: Sequelize.ENUM("SILVER","PLATINUM")
      },
    },
    { tableName: "member_history_posisi" }
  );

module.exports = MemberHistoryPosisi;
