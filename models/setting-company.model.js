const SettingCompany = (sequelize, Sequelize) =>
  sequelize.define(
    'setting_company',
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
      tgl_renewal: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tgl_awal: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tgl_akhir: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    },{
      tableName: 'setting_company'
    }
  )

module.exports = SettingCompany
