const MidtransPaid = (sequelize, Sequelize) =>
  sequelize.define(
    'midtrans_paid',
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
      paidBy: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tanggal : {
        type: Sequelize.DATE,
        allowNull: false,
      },
      total: {
        type: Sequelize.DOUBLE,
        allowNull:false
      },
      no_ref: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      keterangan: {
        type: Sequelize.STRING,
      },      
    }
  )

module.exports = MidtransPaid
