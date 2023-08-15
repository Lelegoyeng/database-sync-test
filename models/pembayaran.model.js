const Pembayaran = (sequelize, Sequelize) =>
    sequelize.define(
    'pembayaran',
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
        id_order:{
            type: Sequelize.INTEGER,
            description: 'order primary key',
            allowNull:false
        },
        no:{
            type: Sequelize.STRING,
            description: 'order_id untuk midtrans, all',
            allowNull:false,
        },
        is_bca:{
            type: Sequelize.BOOLEAN,
            description: 'bca dewe only',
            defaultValue:false,
        },
        channel_type:{
            type: Sequelize.STRING,
            description: 'bca dewe only'
        },
        token:{
            type: Sequelize.STRING,
            description: 'midtran token'
        },
        request_id:{
            type: Sequelize.STRING,
            description: 'only BCA dewe. Catat RequestID dari BCA'
        },
        transaction_time:{
            type: Sequelize.DATE,
            description: 'all, waktu initial payment',
            defaultValue:  Sequelize.NOW
        },
        expired_time:{
            type: Sequelize.DATE,
            description: 'all',
        },
        status:{
            type: Sequelize.ENUM('PENDING','SETTLEMENT','CANCELED','FAILED'),
            description: 'all'
        },
        transaction_id:{
            type: Sequelize.STRING,
            description: 'all, untuk midtrans. Reference untuk BCA dewe'
        },
        payment_type:{
            type: Sequelize.STRING,
            description: 'all, va_bca untuk BCA dewe'
        },
        store: {
            type: Sequelize.STRING,
            description: 'Only if payment cstore (indomart/alfamart)'
        },
        gross_amount:{
            type: Sequelize.DOUBLE,
            description: 'all, TotalAmount untuk BCA dewe'
        },
        settlement_time:{
            type: Sequelize.DATE,
            description: 'waktu payment diterima, kecuali card, = TransactionDate untuk BCA dewe'
        },
        approval_code:{
            type: Sequelize.STRING,
            description: 'untuk BcaKlikpay,KlikBca,CimbClick,Danamon,Indomaret,Card,Brimo'
        },
        transaction_type:{
            type: Sequelize.STRING,
            description: 'Qris(gopay,shopeepay,ovo,dll)'
        },
        acquirer:{
            type: Sequelize.STRING,
            description: 'Qris(gopay,shopeepay,ovo,dll)'
        },
        issuer:{
            type: Sequelize.STRING,
            description: 'Qris(gopay,shopeepay,ovo,dll)'
        },
        payment_code:{
            type: Sequelize.STRING,
            description: 'idm/alfa'
        },
        va_number:{
            type: Sequelize.STRING,
            description: 'semua va: permata, bca, bni, bri, dan BCA dewe'
        },
        va_bank:{
            type: Sequelize.STRING,
            description: 'semua va: permata, bca, bni, bri, dan BCA dewe'
        },
        biller_code:{
            type: Sequelize.STRING,
            description: 'mandiri bill only'
        },
        bill_key:{
            type: Sequelize.STRING,
            description: 'mandiri bill only'
        },
        bank:{
            type: Sequelize.STRING,
            description: 'card only'
        },
        card_type:{
            type: Sequelize.STRING,
            description: 'card only'
        },
        channel_response_message:{
            type: Sequelize.STRING,
            description: 'card only'
        },
        channel_response_code:{
            type: Sequelize.STRING,
            description: 'card only'
        },
        eci:{
            type: Sequelize.STRING,
            description: 'card only'
        },
        masked_card:{
            type: Sequelize.STRING,
            description: 'card only'
        }        
    }
)

module.exports = Pembayaran
