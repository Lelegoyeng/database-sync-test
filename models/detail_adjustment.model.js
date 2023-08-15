const DetailAdjustment = (sequelize, Sequelize) =>
  sequelize.define(
    'detail_adjustment',
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
      id_adjust: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_stok: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deskripsi: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      qty_awal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qty_actual: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qty_selisih: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hpp: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      }
    }
  )

module.exports = DetailAdjustment
