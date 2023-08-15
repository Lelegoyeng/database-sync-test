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
      no_pembayaran: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      token_pembayaran : {
        type: Sequelize.STRING,
      },
      midtrans_transaction_id : {
        type: Sequelize.STRING,
      },
      id_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tgl_pembayaran: {
        type: Sequelize.DATE,
      },
      tgl_max_pembayaran: {
        type: Sequelize.DATE,
      },
      referensi: {
        type: Sequelize.STRING,
      },
      channel: {
        type: Sequelize.STRING,
      },
      channel_type: {
        type: Sequelize.STRING,
      },
      no_va: {
        type: Sequelize.STRING,
        description: 'no_va untuk pembayaran BCA VA'
      },
      status_pembayaran: {
        type: Sequelize.ENUM('PENDING','SUCCESS','CANCELED','FAILED'),
        allowNull: false,
      }
    }
  )

module.exports = Pembayaran
