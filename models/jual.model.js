const Jual = (sequelize, Sequelize) =>
  sequelize.define("jual", {
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
    jenis: {
      type: Sequelize.ENUM("karyawan", "sampel"),
      allowNull: false,
    },
    id_gudang: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    no_pesanan: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    no_invoice: {
      type: Sequelize.STRING,
      unique: true,
    },
    tgl_pesanan: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    tgl_invoice: {
      type: Sequelize.DATE,
    },
    kode_karyawan: {
      type: Sequelize.STRING,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      is: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    phone: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM("PENDING", "PAID", "DONE", "RETUR"),
      allowNull: false,
      defaultValue: "PENDING",
    },
    total_qty: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    total_item: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    total_dpp: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    total_ppn: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    total_diskon_item: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    diskon_global: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    total_akhir: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    total_hpp: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    print_pesanan_counter: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    print_invoice_counter: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    jumlah_bayar: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
    kembali: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
    is_ppn: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    created_by: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    paid_by: {
      type: Sequelize.INTEGER,
    },
    done_by: {
      type: Sequelize.INTEGER,
    },
    retur_by: {
      type: Sequelize.INTEGER,
    },
    paid_at: {
      type: Sequelize.DATE,
    },
    done_at: {
      type: Sequelize.DATE,
    },
    retur_at: {
      type: Sequelize.DATE,
    },
    cara_bayar: {
      type: Sequelize.ENUM("cash", "transfer"),
    },
  });

module.exports = Jual;
