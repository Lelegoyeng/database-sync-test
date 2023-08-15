const DetailKode = (sequelize, Sequelize) =>
  sequelize.define(
    'detail_kode',
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
      id_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kode: {
        type: Sequelize.STRING,
        allowNull: false,
        unique : true,
      },
      status: {
        type: Sequelize.ENUM("READY", "USED"),
        allowNull: false,
      },
      status_terpakai: {
        type: Sequelize.STRING,
      },
      tgl_terpakai : {
        type: Sequelize.DATE,
      },
      id_pemilik : {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      id_pemakai : {
        type: Sequelize.INTEGER,
      }
    }
  )

module.exports = DetailKode