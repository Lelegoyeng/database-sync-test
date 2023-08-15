const SettingPoin = (sequelize, Sequelize) =>
  sequelize.define(
    'setting_poin',
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
      posisi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sp_poin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      dl_poin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      max_poin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
    }
  )

module.exports = SettingPoin
