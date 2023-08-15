const StockTransfer = (sequelize, Sequelize) =>
    sequelize.define('stok_transfer',{
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        public_id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, allowNull: false},
        no_transfer: {type: Sequelize.STRING, allowNull: false},
        tanggal: {type: Sequelize.DATE, allowNull:false},
        catatan: {type: Sequelize.STRING},
        gudang_id: {type: Sequelize.INTEGER, allowNull: false},
        gudang_id_asal: {type: Sequelize.INTEGER, allowNull: false},
        gudang_id_tujuan: {type: Sequelize.INTEGER, allowNull: false},
        relasi_id: {type: Sequelize.STRING, allowNull: false},
        type: {type : Sequelize.ENUM('in','out')},
        status: {type: Sequelize.ENUM('created','sent','received', 'rejected'), defaultValue: 'created', allowNull:'false'},
        created_by: {type: Sequelize.INTEGER, allowNull:false},
        sent_by: {type: Sequelize.INTEGER},
        received_by: {type: Sequelize.INTEGER},
        rejected_by: {type: Sequelize.INTEGER},
        sent_at: {type: Sequelize.DATE},
        received_at: {type: Sequelize.DATE},
        rejected_at: {type: Sequelize.DATE},
        print_counter: {type: Sequelize.INTEGER, defaultValue: 0},
    })

module.exports = StockTransfer
