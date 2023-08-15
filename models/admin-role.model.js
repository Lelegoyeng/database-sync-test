const AdminRole = (sequelize, Sequelize) =>
  sequelize.define(
    'admin_roles',
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
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      menu_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      menu_action_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    }
  )

module.exports = AdminRole
