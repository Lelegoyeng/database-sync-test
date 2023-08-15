const MemberSuspend = (sequelize, Sequelize) =>
  sequelize.define(
    'member_suspend',
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
      tanggal_suspend: {
        type: Sequelize.DATE,
      },
      type: {
        type: Sequelize.STRING,
      },
      is_suspended: {
        type: Sequelize.BOOLEAN,
      },
      user_create: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      keterangan: {
        type: Sequelize.TEXT
      }
    }
  )

module.exports = MemberSuspend