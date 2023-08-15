const PurchaseOrder = (sequelize, Sequelize) =>
  sequelize.define(
    'purchase_order',
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
      id_supplier: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_admin: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_gudang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      no_purchase_order: {
        type: Sequelize.STRING,
      },
      no_referensi: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      total_ppn: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      total_akhir: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      print_counter: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    }
  )

module.exports = PurchaseOrder
