const Order = (sequelize, Sequelize) =>
  sequelize.define("order", {
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
    nomor_identitas: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    id_member: {
      type: Sequelize.INTEGER,
    },
    id_gudang: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    no_order: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    no_invoice: {
      type: Sequelize.STRING,
      unique: true,
    },
    tgl_order: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    tgl_invoice: {
      type: Sequelize.DATE,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    alamat: {
      type: Sequelize.TEXT,
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
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    kode_pos: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      is: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    jenis_kelamin: {
      type: Sequelize.STRING,
    },
    agama: {
      type: Sequelize.STRING,
    },
    tgl_lahir: {
      type: Sequelize.DATEONLY,
    },
    status_kawin: {
      type: Sequelize.STRING,
    },
    negara: {
      type: Sequelize.STRING,
    },
    total_qty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    join_member: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    upgrade_member: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    sisi: {
      type: Sequelize.ENUM("R", "L"),
    },
    posisi: {
      type: Sequelize.ENUM("SILVER", "PLATINUM"),
    },
    status_order: {
      type: Sequelize.ENUM(
        "PENDING",
        "PAID",
        "DELIVERY",
        "PICKUPABLE",
        "RECEIVED",
        "DONE",
        "RETUR",
        "CANCEL",
        "EXPIRED"
      ),
      allowNull: false,
      defaultValue: "PENDING",
    },
    pickup_store: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    nama_kirim: {
      type: Sequelize.STRING,
    },
    alamat_kirim: {
      type: Sequelize.STRING,
    },
    id_kecamatan_kirim: {
      type: Sequelize.INTEGER,
    },
    id_kota_kirim: {
      type: Sequelize.INTEGER,
    },
    id_propinsi_kirim: {
      type: Sequelize.INTEGER,
    },
    kode_pos_kirim: {
      type: Sequelize.STRING,
    },
    phone_kirim: {
      type: Sequelize.STRING,
    },
    biaya_kirim: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    asuransi_kirim: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    diskon_biaya_kirim: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    ekspedisi: {
      type: Sequelize.STRING,
    },
    no_resi: {
      type: Sequelize.STRING,
    },
    total_value: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    total_ro: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    biaya_pembayaran: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },

    payment_method: {
      type: Sequelize.STRING,
    },
    total_barang: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    total_dpp: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    total_ppn: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    total_harga: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    total_hpp: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    berat: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    received_at: {
      type: Sequelize.DATE,
    },
    received_by: {
      type: Sequelize.STRING,
    },
    midtrans_paid_at: {
      type: Sequelize.DATE,
    },
    midtrans_paid_id: {
      type: Sequelize.INTEGER,
    },
    print_pesanan_counter: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    print_invoice_counter: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    print_jalan_counter: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    pickup_store: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    dibayar: {
      type: Sequelize.DOUBLE,
    },
    pickup_code: {
      type: Sequelize.STRING,
    },
    is_ppn: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    username: {
      type: Sequelize.STRING,
    },
    subsidi_ongkir_id: {
      type: Sequelize.INTEGER,
    },
    id_member_terbentuk: {
      type: Sequelize.INTEGER,
    },
    id_propinsi_domisili: {
      type: Sequelize.INTEGER,
    },
    id_kota_domisili: {
      type: Sequelize.INTEGER,
    },
  });

module.exports = Order;
