const SettingPosisi = (sequelize, Sequelize) =>
  sequelize.define(
    "setting_posisi",
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
      posisi: {
        type: Sequelize.ENUM("SILVER", "PLATINUM"),
        allowNull: false,
        unique: "posisi",
        comments: "Posisi member",
      },
      pair_maksimal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comments: "Pair maksimal harian untuk mendapat bonus pairing",
      },
      transaksi_minimal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comments: "Minimal transaksi untuk mencapai posisi",
      },
      bonus_sponsor: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        comments:
          "Nilai bonus yang di berikan jika ada member merekrut member - sponsorship",
      },
      bonus_pair: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        comments: "Bonus yang di berikan jika member mendapat pairing",
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        comments: "Value untuk perkalian bonus",
      },
      minimal_posisi_downline_member_ro: {
        type: Sequelize.ENUM("SILVER", "PLATINUM"),
        allowNull: false,
        comments:
          "Downline langsung dengan minimal posisi setara atau lebih tinggi, Untuk syarat mendapatkan bonus RO",
      },
      minimal_posisi_downline_sponsorship_ro: {
        type: Sequelize.ENUM("SILVER", "PLATINUM"),
        allowNull: false,
        comments:
          "Downline langsung dengan minimal posisi setara atau lebih tinggi, Untuk syarat mendapatkan bonus RO dari downline yang di sponsori",
      },
      minimal_jumlah_downline_member_ro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comments:
          "Minimal jumlah downline member yang RO untuk mendapat cashback dari RO",
      },
      minimal_jumlah_downline_sponsorship_member_ro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comments:
          "Minimal jumlah downline member yang mensponsori member yang RO untuk mendapat cashback dari RO-nya downline",
      },
    },
    {
      tableName: "setting_posisi",
    }
  );

module.exports = SettingPosisi;
