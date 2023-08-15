const Midtrans_paymethods = (sequelize, Sequelize) =>
    sequelize.define(
    'midtrans_paymethods',
    {
        public_id: {type: Sequelize.UUID,defaultValue: Sequelize.UUIDV4,allowNull: false},
        name: {type: Sequelize.STRING, allowNull: false, unique: true},
        label: {type: Sequelize.STRING, allowNull: false},
        group: {type: Sequelize.ENUM(
            'Virtual Account',
            'E-Wallet',
            'Kartu Kredit',
            'Gerai Ritel',
            'Pembayaran Instan',
            'Paylater & Cicilan',
            '-'
        ), allowNull: false},
        icon: {type: Sequelize.STRING, allowNull: false},
        fix_charge: {type: Sequelize.DOUBLE, defaultValue: 0},
        float_charge: {type: Sequelize.DOUBLE, defaultValue: 0},
        ppn: {type: Sequelize.DOUBLE, defaultValue: 0},
        expired_in: {type: Sequelize.INTEGER, defaultValue: 1440},
        is_active: {type: Sequelize.BOOLEAN, defaultValue: true},
        is_production: {type: Sequelize.BOOLEAN, defaultValue: true}
    }
)

module.exports = Midtrans_paymethods
