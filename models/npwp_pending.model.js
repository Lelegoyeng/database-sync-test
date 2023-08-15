const NpwpPending = (sequelize, Sequelize) =>
  sequelize.define(
    'npwp_pending',
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
      npwp: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      nama_pemegang_pajak:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      status: {
        type: Sequelize.ENUM('UNVERIFIED', 'VERIFIED', 'APPLIED', 'CANCEL'),
        allowNull:false,
        defaultValue: 'UNVERIFIED'
      },
    }
  )

module.exports = NpwpPending
