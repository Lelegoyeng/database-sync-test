const AdminGudang = (sequelize, Sequelize) =>
  sequelize.define(
    'admin_gudang',
    {
      id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
      public_id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, allowNull: false},
      gudang_id: {type: Sequelize.INTEGER, allowNull: false},
      admin_id: {type: Sequelize.INTEGER, allowNull: false}
    }

  )

module.exports = AdminGudang
