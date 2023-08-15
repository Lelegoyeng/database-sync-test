const Payout = (sequelize, Sequelize) =>
  sequelize.define(
    'payouts',
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

      id_member: {
        type: Sequelize.INTEGER,
      },

      no: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },

      referensi: {
        type: Sequelize.STRING,
        description: "No ref dari midtrans"
      },      

      nama_rekening : {
        type : Sequelize.STRING,
      },
      no_rekening : {
        type : Sequelize.STRING,
      },
      kode_bank : {
        type : Sequelize.STRING,
      },
      email : {
        type : Sequelize.STRING,
      },
     
      notes : {
        type : Sequelize.TEXT,
      },

      status: {
        type: Sequelize.ENUM('queued','processed','completed', 'rejected', 'failed'),
        allowNull: false,
      },
      total_bonus:{
        type : Sequelize.DOUBLE,
        allowNull:false,
        defaultValue: 0
      },
      admin_fee:{
        type : Sequelize.DOUBLE,
        allowNull:false,
        defaultValue: 0
      },
      nominal: {
        type : Sequelize.DOUBLE,
        allowNull:false,
        defaultValue: 0
      },
      queued_by : {
          type: Sequelize.INTEGER,
          allowNull:false,
      },
      processed_by :{
        type: Sequelize.INTEGER,
      },
      rejected_by :{
        type: Sequelize.INTEGER,
      },
      processed_at :{
        type: Sequelize.DATE,
      },
      rejected_at :{
        type: Sequelize.DATE,
      },
      reject_reason :{
        type: Sequelize.STRING,
      },
      completed_by :{
        type: Sequelize.INTEGER,
      },
      completed_at :{
        type: Sequelize.DATE,
      },
      failed_at :{
        type: Sequelize.DATE,
      },
      failed_reason :{
        type: Sequelize.STRING,
      },
      print_counter: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    }
  )

module.exports = Payout
