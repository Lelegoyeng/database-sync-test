const MemberRute = (sequelize, Sequelize) =>
  sequelize.define(
    'member_rute',
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
      id_member :{
        type: Sequelize.STRING(10),
        allowNull:false,
      },
      rute: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    }
  )

module.exports = MemberRute
