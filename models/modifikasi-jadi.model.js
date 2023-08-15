const ModifikasiJadi = (sequelize, Sequelize) =>
  sequelize.define(
    'modifikasi_jadi',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_modifikasi : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_item : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      hpp: {
        type: Sequelize.DOUBLE,
        allowNull:false,
      },
      total: {
        type: Sequelize.DOUBLE,
        allowNull:false,
      },
    }
  )

module.exports = ModifikasiJadi;