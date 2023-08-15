const ItemHistory = (sequelize, Sequelize) =>
  sequelize.define(
    'item_history',
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
      tanggal: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      id_item: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_gudang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jenis: {
        type: Sequelize.ENUM('pembelian', 'penjualan', 'retur_jual', 'retur_beli', 'penyesuaian', 'transfer'),
        allowNull: false,
      },
      qty: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      qty_awal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      hpp_awal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      hpp: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
    }
  )

module.exports = ItemHistory;
