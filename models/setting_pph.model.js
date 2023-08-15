const SettingPph = (sequelize, Sequelize) =>
  sequelize.define(
    'setting_pph',
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
      dpp: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      tarif_pph: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      range: {
        type: Sequelize.DOUBLE,
        allowNull: false.valueOf,
        min: 0,
      },
      tarif_pph_tambahan: {
        type: Sequelize.DOUBLE,
        allowNull: false
      }
    }
  )

module.exports = SettingPph
