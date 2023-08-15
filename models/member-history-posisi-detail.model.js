const MemberHistoryPosisiDetail = (sequelize, Sequelize) =>
  sequelize.define(
    "member_history_posisi_detail",
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
      id_member_history_posisi: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_detail_kode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    },
    { tableName: "member_history_posisi_detail" }
  );

module.exports = MemberHistoryPosisiDetail;
