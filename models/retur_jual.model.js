const ReturJual = (sequelize, Sequelize) =>
  sequelize.define('retur_jual', {
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
    tanggal: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    tgl_received: {
      type: Sequelize.DATE,
    },
    no_retur: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_order: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_order_resend: {
      type: Sequelize.INTEGER,
    },
    id_member: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    deskripsi: {
      type: Sequelize.STRING,
    },
    id_gudang: {
      // id gudang tujuan retur ==> gudang 2 aka gudang rusak
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nama_kirim: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone_kirim: {
      type: Sequelize.STRING,
    },
    alamat_kirim: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_kecamatan: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_kota: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_propinsi: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    biaya_kirim: {
      type: Sequelize.DOUBLE,
    },
    ekspedisi: {
      type: Sequelize.STRING,
    },
    no_resi: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM(
        'PENDING',
        'APPROVED',
        'DELIVERY',
        'RECEIVED',
        'REJECTED',
        'DONE',
        'CANCEL'
      ),
      allowNull: false,
      defaultValue: 'PENDING',
    },
    total_hpp: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    total: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    total_akhir: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    alasan_ditolak: {
      type: Sequelize.TEXT,
    },
    resend: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

module.exports = ReturJual;
