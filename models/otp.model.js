const Otp = (sequelize, Sequelize) =>
    sequelize.define(
        'otps',
        {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
            public_id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, allowNull: false},
            type:{type: Sequelize.ENUM('bank_validation', 'phone_validation', 'email_validation', 'reset_password', 'npwp_validation'), allowNull: false},
            status: {type: Sequelize.ENUM('unused', 'used', 'canceled'), allowNull: false, defaultValue: 'unused'},
            ext_id: {type: Sequelize.INTEGER, allowNull: false},
            code: {type: Sequelize.TEXT, allowNull: false},
            expire_at: {type: Sequelize.DATE, allowNull: false},
            last_sent: {type: Sequelize.DATE, allowNull: false},
            is_admin: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue:false},
        }
    )

module.exports = Otp
