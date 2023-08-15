const TestMidtrans = (sequelize, Sequelize) =>
  sequelize.define(
    'test-midtrans',
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

      no: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },

      name : {
        type : Sequelize.STRING,
      },
      email : {
        type : Sequelize.STRING,
      },
      phone : {
        type : Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM(
          'PENDING',
          'PAID',
          'CANCEL',
          'EXPIRED'
        ),
        allowNull: false,
        defaultValue: 'PENDING',
      },
      total:{
        type : Sequelize.DOUBLE,
        allowNull:false,
        defaultValue: 0
      },
      payment_method: {
        type: Sequelize.STRING,
      },
    }
  )

module.exports = TestMidtrans
