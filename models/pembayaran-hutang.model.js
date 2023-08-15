const PembayaranHutang = (sequelize, Sequelize) =>
  sequelize.define(
    'pembayaran_hutang',
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
      id_akun: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      id_supplier: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_admin: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      no_pembayaran_hutang: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cara_bayar: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'tunai'
      },
      total_tagihan: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      total_dibayar: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      print_counter: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    }
  )

module.exports = PembayaranHutang
