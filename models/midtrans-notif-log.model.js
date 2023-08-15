const MidtransNotifLog = (sequelize, Sequelize) =>
    sequelize.define(
    'midtrans_notif_logs',
    {
        log: {type: Sequelize.TEXT},
    }
)

module.exports = MidtransNotifLog
