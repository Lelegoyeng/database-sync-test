const Member = (sequelize, Sequelize) =>
  sequelize.define("member", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    public_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    id_member: {
      type: Sequelize.STRING(10),
      unique: true,
      allowNull: false,
    },
    tgl_join: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.fn("NOW"),
    },
    id_sponsor: {
      type: Sequelize.INTEGER,
    },
    id_upline: {
      type: Sequelize.INTEGER,
    },
    sisi: {
      type: Sequelize.ENUM("L", "R"),
      allowNull: true,
    },
    jumlah_pair: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    jumlah_child_kiri: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    jumlah_child_kanan: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    tgl_catat_pair: {
      type: Sequelize.DATE,
    },
    jumlah_increment_kiri: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    jumlah_increment_kanan: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    posisi: {
      type: Sequelize.ENUM("BRONZE", "SILVER", "PLATINUM"),
      allowNull: false,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      is: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    nomor_identitas: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tgl_lahir: {
      type: Sequelize.DATEONLY,
    },
    jenis_kelamin: {
      type: Sequelize.ENUM("LAKI-LAKI", "PEREMPUAN"),
    },
    agama: {
      type: Sequelize.ENUM(
        "ISLAM",
        "KATOLIK",
        "PROTESTAN",
        "HINDU",
        "BUDHA",
        "KONGHUCU",
        "LAINNYA"
      ),
      allowNull: false,
      defaultValue: "LAINNYA",
    },
    phone: {
      type: Sequelize.STRING,
    },
    status_kawin: {
      type: Sequelize.ENUM("BELUM KAWIN", "KAWIN", "BERCERAI", "LAINNYA"),
      defaultValue: "LAINNYA",
    },
    alamat: {
      type: Sequelize.STRING(500),
    },
    id_kota: {
      type: Sequelize.INTEGER,
    },
    id_kecamatan: {
      type: Sequelize.INTEGER,
    },
    id_propinsi: {
      type: Sequelize.INTEGER,
    },
    negara: {
      type: Sequelize.STRING,
    },
    kode_pos: {
      type: Sequelize.STRING,
    },
    status_rekening: {
      type: Sequelize.ENUM("UNVERIFIED", "VERIFIED"),
      defaultValue: "UNVERIFIED",
      allowNull: false,
    },
    kode_bank: {
      type: Sequelize.STRING,
    },
    bank: {
      type: Sequelize.STRING,
    },
    cabang: {
      type: Sequelize.STRING,
    },
    nama_rekening: {
      type: Sequelize.STRING,
    },
    no_rekening: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_user_delete: {
      type: Sequelize.INTEGER,
    },
    deskripsi_delete: {
      type: Sequelize.STRING,
    },
    status_npwp: {
      type: Sequelize.ENUM("UNVERIFIED", "VERIFIED"),
      defaultValue: "UNVERIFIED",
      allowNull: false,
    },
    npwp: {
      type: Sequelize.STRING,
    },
    nama_pemegang_pajak: {
      type: Sequelize.STRING,
    },
    no_nik_passpor_penerima: {
      type: Sequelize.STRING,
    },
    nama_lengkap_pewaris: {
      type: Sequelize.STRING,
    },
    no_mobile_pewaris: {
      type: Sequelize.STRING,
    },
    hubungan_pewaris: {
      type: Sequelize.STRING,
    },
    status_kodeetik: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    expired_pair: {
      type: Sequelize.DATE,
    },
    poin_kiri: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    poin_kanan: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    is_member_bu: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    id_propinsi_domisili: {
      type: Sequelize.INTEGER,
    },
    id_kota_domisili: {
      type: Sequelize.INTEGER,
    },
  });

module.exports = Member;
