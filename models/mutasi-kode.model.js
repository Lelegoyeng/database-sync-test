const MutasiKode = (sequelize, Sequelize) =>
  sequelize.define(
    'mutasi_kode',
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
      tgl_mutasi: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      id_kode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_pemilik_lama: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_pemilik_baru: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    },
    {
      tableName: 'mutasi_kode'
    }
  )

module.exports = MutasiKode
