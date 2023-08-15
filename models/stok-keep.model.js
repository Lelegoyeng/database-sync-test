const StokKeep = (sequelize, Sequelize) =>
  sequelize.define(
    'stok_keep',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_order : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_stok : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      expired: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }
  )

module.exports = StokKeep;