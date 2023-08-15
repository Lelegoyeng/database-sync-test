const RegistrasiPending = (sequelize, Sequelize) =>
  sequelize.define(
    'registrasi_pending',
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
        allowNull: false,
      },
      nama:{
        type: Sequelize.STRING,
      },
      id_upline: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_sponsor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sisi: {
        type: Sequelize.ENUM('L','R'),
        allowNull: false,
      },
      tgl_catat:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      status_proses:{
        type: Sequelize.ENUM('PENDING','PROCESSED')
      },
      tgl_proses:{
        type: Sequelize.DATE
      }
    },
    {tableName: 'registrasi_pending'}
  )

module.exports = RegistrasiPending
