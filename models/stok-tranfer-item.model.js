const StockTransferItem = (sequelize, Sequelize) =>
    sequelize.define('stok_transfer_item',{
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        public_id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, allowNull: false},
        stok_transfer_id: {type: Sequelize.INTEGER, allowNull: false},
        item_id: {type: Sequelize.INTEGER, allowNull: false},
        qty: {type: Sequelize.INTEGER, allowNull: false},
        stok_awal: {type: Sequelize.INTEGER, allowNull: false},
        hpp: {type: Sequelize.DOUBLE, defaultValue: 0, allowNull: false}
    })

module.exports = StockTransferItem
