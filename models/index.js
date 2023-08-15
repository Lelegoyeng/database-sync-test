const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const ssl = () => {
  if (process.env.NODE_ENV === "production") {
    return {
      dialectOptions: {
        ssl: {
          require: true,
        },
      },
    };
  }
  return {};
};

try {
  const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
      timezone: "+07:00",
      host: dbConfig.HOST,
      port: dbConfig.PORT,
      dialect: dbConfig.dialect,
      // dialectOptions: ssl().dialectOptions,
      logging: false,
      operatorsAlises: false,
      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
      },
      define: {
        underscoredAll: true,
        underscored: true,
        timestamps: true,
        paranoid: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
      },
    }
  );

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.propinsi = require("./propinsi.model")(sequelize, Sequelize);
  db.kecamatan = require("./kecamatan.model")(sequelize, Sequelize);
  db.alamat_kirim = require("./alamat-kirim.model")(sequelize, Sequelize);
  db.kota = require("./kota.model")(sequelize, Sequelize);
  db.contact_us = require("./contact-us.model")(sequelize, Sequelize);
  db.admin = require("./admin.model")(sequelize, Sequelize);
  db.member = require("./member.model")(sequelize, Sequelize);
  db.member_rute = require("./member-rute.model")(sequelize, Sequelize);
  db.gudang = require("./gudang.model")(sequelize, Sequelize);

  db.order = require("./order.model")(sequelize, Sequelize);
  db.order_detail = require("./order-detail.model")(sequelize, Sequelize);
  db.order_detail_item = require("./order-detail-item.model")(
    sequelize,
    Sequelize
  );
  db.pembayaran = require("./pembayaran.model")(sequelize, Sequelize);
  db.barang = require("./barang.model")(sequelize, Sequelize);
  db.supplier = require("./supplier.model")(sequelize, Sequelize);
  db.gambar = require("./gambar.model")(sequelize, Sequelize);
  db.order_history = require("./order-history.model")(sequelize, Sequelize);
  db.setting_company = require("./setting-company.model")(sequelize, Sequelize);

  db.bonus = require("./bonus.model")(sequelize, Sequelize);
  db.bonus_pair = require("./bonus-pair.model")(sequelize, Sequelize);
  db.bonus_sponsor = require("./bonus-sponsor.model")(sequelize, Sequelize);

  db.log_upgrade = require("./log-upgrade.model")(sequelize, Sequelize);
  db.setting_posisi = require("./setting-posisi.model")(sequelize, Sequelize);
  db.detail_kode = require("./detil-kode.model")(sequelize, Sequelize);
  db.mutasi_kode = require("./mutasi-kode.model")(sequelize, Sequelize);
  db.registrasi_pending = require("./registrasi-pending.model")(
    sequelize,
    Sequelize
  );
  db.sponsor_pending = require("./sponsor-pending.model")(sequelize, Sequelize);
  db.berita = require("./berita.model")(sequelize, Sequelize);
  // db.log_proses_bonus = require('./log-proses-bonus.model')(sequelize, Sequelize);
  db.payout = require("./payout.model")(sequelize, Sequelize);
  db.item = require("./item.model")(sequelize, Sequelize);
  db.item_barang = require("./item_barang.model")(sequelize, Sequelize);
  db.item_category = require("./item_category.model")(sequelize, Sequelize);
  db.purchase_order = require("./purchase-order.model")(sequelize, Sequelize);
  db.detail_purchase_order = require("./detail-purchase-order.model")(
    sequelize,
    Sequelize
  );
  db.stok = require("./stok.model")(sequelize, Sequelize);
  db.stok_harian = require("./stok-harian.model")(sequelize, Sequelize);
  db.adjustment = require("./adjustment.model")(sequelize, Sequelize);
  db.detail_adjustment = require("./detail_adjustment.model")(
    sequelize,
    Sequelize
  );

  db.retur_jual = require("./retur_jual.model")(sequelize, Sequelize);
  db.retur_jual_detail = require("./retur_jual_detail.model")(
    sequelize,
    Sequelize
  );
  db.retur_jual_history = require("./retur_jual_history.model")(
    sequelize,
    Sequelize
  );

  db.setting_ro = require("./setting-ro.model")(sequelize, Sequelize);
  db.bonus_ro = require("./bonus-ro.model")(sequelize, Sequelize);
  db.ro_pending = require("./ro-pending.model")(sequelize, Sequelize);
  db.bonus_unilevel = require("./bonus-unilevel.model")(sequelize, Sequelize);
  db.setting_unilevel = require("./setting-unilevel.model")(
    sequelize,
    Sequelize
  );
  db.bonus_ro_sponsoring = require("./bonus-ro-sponsoring.model")(
    sequelize,
    Sequelize
  );

  db.bank = require("./bank.model")(sequelize, Sequelize);
  db.bank_account = require("./bank-account.model")(sequelize, Sequelize);
  db.setting = require("./setting.model")(sequelize, Sequelize);

  db.bonus_pass_up = require("./bonus-pass-up.model")(sequelize, Sequelize);
  db.member_history_posisi = require("./member-history-posisi.model")(
    sequelize,
    Sequelize
  );
  db.member_history_posisi_detail =
    require("./member-history-posisi-detail.model")(sequelize, Sequelize);
  db.renewal_pair = require("./renewal-pair.model")(sequelize, Sequelize);

  db.stok_transfer = require("./stok-transfer.model")(sequelize, Sequelize);
  db.stok_transfer_item = require("./stok-tranfer-item.model")(
    sequelize,
    Sequelize
  );
  db.admin_gudang = require("./admin-gudang.model")(sequelize, Sequelize);
  db.otp = require("./otp.model")(sequelize, Sequelize);

  db.member_suspend = require("./member-suspend.model")(sequelize, Sequelize);
  db.suspend_type = require("./suspend-type.model")(sequelize, Sequelize);
  db.midtrans_paymethod = require("./midtrans-paymethod.model")(
    sequelize,
    Sequelize
  );
  db.order.belongsTo(db.midtrans_paymethod, {
    foreignKey: "payment_method",
    targetKey: "name",
    as: "paymethod",
  });

  db.setting_unilevel_ro = require("./setting-unilevel-ro.model")(
    sequelize,
    Sequelize
  );
  db.bonus_unilevel_ro = require("./bonus-unilevel-ro.model")(
    sequelize,
    Sequelize
  );
  db.setting_bonus_annual_rank = require("./setting-bonus-annual-rank.model")(
    sequelize,
    Sequelize
  );
  db.bonus_annual_rank = require("./bonus-annual-rank.model")(
    sequelize,
    Sequelize
  );
  db.bonus_pair_reward = require("./bonus-pair-reward.model")(
    sequelize,
    Sequelize
  );
  db.bonus_annual_reward = require("./bonus-annual-reward.model")(
    sequelize,
    Sequelize
  );
  db.setting_bonus_annual_reward =
    require("./setting-bonus-annual-reward.model")(sequelize, Sequelize);
  db.bonus_unilevel_detail = require("./bonus-unilevel-detail.model")(
    sequelize,
    Sequelize
  );
  db.bonus_unilevel_detail_ro = require("./bonus-unilevel-detail-ro.model")(
    sequelize,
    Sequelize
  );
  db.setting_pair_bertingkat = require("./setting-pair-bertingkat.model")(
    sequelize,
    Sequelize
  );
  db.bonus_pair_details = require("./bonus-pair-details.model")(
    sequelize,
    Sequelize
  );
  db.pb = require("./penerimaan-barang.model")(sequelize, Sequelize);
  db.pb_detail = require("./penerimaan-barang-detail.model")(
    sequelize,
    Sequelize
  );
  db.stok_keep = require("./stok-keep.model")(sequelize, Sequelize);
  db.ekspedisi = require("./ekspedisi.model")(sequelize, Sequelize);
  db.npwp_pending = require("./npwp_pending.model")(sequelize, Sequelize);

  db.npwp_pending.belongsTo(db.member, { foreignKey: "id_member" });

  //db.retur_jual = require("./retur_jual.model")(sequelize, Sequelize);
  //db.retur_jual_detail = require("./retur_jual_detail.model")( sequelize,Sequelize);

  db.admin.hasMany(db.admin_gudang, { foreignKey: "admin_id" });
  db.admin_gudang.belongsTo(db.admin, { foreignKey: "admin_id" });
  db.gudang.hasMany(db.admin_gudang, { foreignKey: "gudang_id" });
  db.admin_gudang.belongsTo(db.gudang, { foreignKey: "gudang_id" });

  db.member.hasOne(db.contact_us, { foreignKey: "id_member" });
  db.contact_us.belongsTo(db.member, { foreignKey: "id_member" });

  db.gudang.hasMany(db.stok_transfer, {
    foreignKey: "gudang_id",
    as: "gudang",
  });
  db.stok_transfer.belongsTo(db.gudang, {
    foreignKey: "gudang_id",
    as: "gudang",
  });

  db.gudang.hasMany(db.stok_transfer, {
    foreignKey: "gudang_id_asal",
    as: "gudang_asal",
  });
  db.stok_transfer.belongsTo(db.gudang, {
    foreignKey: "gudang_id_asal",
    as: "gudang_asal",
  });
  db.gudang.hasMany(db.stok_transfer, {
    foreignKey: "gudang_id_tujuan",
    as: "gudang_tujuan",
  });
  db.stok_transfer.belongsTo(db.gudang, {
    foreignKey: "gudang_id_tujuan",
    as: "gudang_tujuan",
  });

  db.stok_transfer.belongsTo(db.admin, {
    foreignKey: "created_by",
    as: "dibuat_oleh",
  });
  db.stok_transfer.belongsTo(db.admin, {
    foreignKey: "sent_by",
    as: "dikirim_oleh",
  });
  db.stok_transfer.belongsTo(db.admin, {
    foreignKey: "received_by",
    as: "diterima_oleh",
  });
  db.stok_transfer.belongsTo(db.admin, {
    foreignKey: "rejected_by",
    as: "ditolak_oleh",
  });
  db.stok_transfer.hasMany(db.stok_transfer_item, {
    foreignKey: "stok_transfer_id",
  });
  db.stok_transfer_item.belongsTo(db.stok_transfer, {
    foreignKey: "stok_transfer_id",
  });
  db.item.hasMany(db.stok_transfer_item, { foreignKey: "item_id" });
  db.stok_transfer_item.belongsTo(db.item, { foreignKey: "item_id" });

  db.barang.hasMany(db.order_detail, { foreignKey: "id_barang" });
  db.order_detail.belongsTo(db.barang, { foreignKey: "id_barang" });

  db.retur_jual.hasMany(db.retur_jual_history, { foreignKey: "id_retur" });
  db.retur_jual_history.belongsTo(db.retur_jual, { foreignKey: "id_retur" });
  db.retur_jual_history.belongsTo(db.admin, { foreignKey: "id_admin" });

  db.retur_jual.hasMany(db.retur_jual_detail, { foreignKey: "id_retur" });
  db.retur_jual_detail.belongsTo(db.retur_jual, { foreignKey: "id_retur" });

  db.order.hasOne(db.retur_jual, { foreignKey: "id_order" });
  db.retur_jual.belongsTo(db.order, { foreignKey: "id_order" });
  db.order.hasOne(db.retur_jual, { foreignKey: "id_order" });
  db.retur_jual.belongsTo(db.order, { foreignKey: "id_order" });

  db.gudang.hasMany(db.retur_jual, { foreignKey: "id_gudang" });
  db.retur_jual.belongsTo(db.gudang, { foreignKey: "id_gudang" });

  db.kecamatan.hasMany(db.retur_jual, { foreignKey: "id_kecamatan" });
  db.retur_jual.belongsTo(db.kecamatan, { foreignKey: "id_kecamatan" });

  db.kota.hasMany(db.retur_jual, { foreignKey: "id_kota" });
  db.retur_jual.belongsTo(db.kota, { foreignKey: "id_kota", as: "kota" });

  db.propinsi.hasMany(db.retur_jual, { foreignKey: "id_propinsi" });
  db.retur_jual.belongsTo(db.propinsi, { foreignKey: "id_propinsi" });

  db.item.hasMany(db.retur_jual_detail, { foreignKey: "id_item" });
  db.retur_jual_detail.belongsTo(db.item, { foreignKey: "id_item" });
  // end retur

  db.barang.hasMany(db.item_barang, { foreignKey: "id_barang" });
  db.item_barang.belongsTo(db.barang, { foreignKey: "id_barang" });

  db.item.hasMany(db.item_barang, { foreignKey: "id_item" });
  db.item_barang.belongsTo(db.item, { foreignKey: "id_item" });

  db.item.hasMany(db.stok, { foreignKey: "id_item" });
  db.item.hasOne(db.stok, { foreignKey: "id_item", as: "stock" });
  db.stok.belongsTo(db.item, { foreignKey: "id_item" });

  db.gudang.hasMany(db.stok, { foreignKey: "id_gudang" });
  db.stok.belongsTo(db.gudang, { foreignKey: "id_gudang" });

  db.item.hasMany(db.stok_harian, { foreignKey: "id_item" });
  db.stok_harian.belongsTo(db.item, { foreignKey: "id_item" });
  db.gudang.hasMany(db.stok_harian, { foreignKey: "id_gudang" });
  db.stok_harian.belongsTo(db.gudang, { foreignKey: "id_gudang" });

  db.item_category.hasMany(db.item, { foreignKey: "id_category" });
  db.item.belongsTo(db.item_category, { foreignKey: "id_category" });

  db.adjustment.hasMany(db.detail_adjustment, { foreignKey: "id_adjust" });
  db.detail_adjustment.belongsTo(db.adjustment, { foreignKey: "id_adjust" });

  db.gudang.hasOne(db.adjustment, { foreignKey: "id_gudang" });
  db.adjustment.belongsTo(db.gudang, { foreignKey: "id_gudang" });

  db.stok.hasMany(db.detail_adjustment, { foreignKey: "id_stok" });
  db.detail_adjustment.belongsTo(db.stok, { foreignKey: "id_stok" });

  db.admin.hasMany(db.adjustment, { foreignKey: "id_admin" });
  db.adjustment.belongsTo(db.admin, { foreignKey: "id_admin" });

  db.supplier.hasMany(db.purchase_order, { foreignKey: "id_supplier" });
  db.purchase_order.belongsTo(db.supplier, { foreignKey: "id_supplier" });

  db.admin.hasMany(db.purchase_order, { foreignKey: "id_admin" });
  db.purchase_order.belongsTo(db.admin, { foreignKey: "id_admin" });

  db.gudang.hasMany(db.purchase_order, { foreignKey: "id_gudang" });
  db.purchase_order.belongsTo(db.gudang, { foreignKey: "id_gudang" });

  db.purchase_order.hasMany(db.detail_purchase_order, {
    foreignKey: "id_purchase_order",
    as: "details",
  });
  db.detail_purchase_order.belongsTo(db.purchase_order, {
    foreignKey: "id_purchase_order",
  });

  db.item.hasOne(db.detail_purchase_order, { foreignKey: "id_item" });
  db.item.hasMany(db.detail_purchase_order, {
    foreignKey: "id_item",
    as: "purchased_items",
  });
  db.detail_purchase_order.belongsTo(db.item, { foreignKey: "id_item" });

  db.item_category.hasMany(db.item, { foreignKey: "id_category" });
  db.item.belongsTo(db.item_category, {
    foreignKey: "id_category",
    as: "category",
  });

  db.admin_role = require("./admin-role.model")(sequelize, Sequelize);
  db.menu = require("./menu.model")(sequelize, Sequelize);
  db.menu_action = require("./menu-action.model")(sequelize, Sequelize);
  db.setting_poin = require("./setting_poin.model")(sequelize, Sequelize);

  db.bonus.hasMany(db.bonus_pass_up, { foreignKey: "id_bonus" });
  db.bonus_pass_up.belongsTo(db.bonus, { foreignKey: "id_bonus" });
  db.bonus.hasMany(db.bonus_unilevel, { foreignKey: "id_bonus" });
  db.bonus_unilevel.belongsTo(db.bonus, { foreignKey: "id_bonus" });
  db.bonus.hasMany(db.bonus_ro, { foreignKey: "id_bonus" });
  db.bonus_ro.belongsTo(db.bonus, { foreignKey: "id_bonus" });

  db.bonus.hasMany(db.bonus_ro_sponsoring, { foreignKey: "id_bonus" });
  db.bonus_ro_sponsoring.belongsTo(db.bonus, { foreignKey: "id_bonus" });

  db.bonus.hasMany(db.bonus_pair, { foreignKey: "id_bonus" });
  db.bonus.hasMany(db.bonus_sponsor, { foreignKey: "id_bonus" });
  // db.bonus_sponsor.belongsTo(db.member, {
  // foreignKey: "id_sponsor_pending",
  //   as: "sponsoring",
  // });
  db.bonus_sponsor.belongsTo(db.sponsor_pending, {
    foreignKey: "id_sponsor_pending",
    as: "sponsor_detail_rekrutan",
  });
  db.sponsor_pending.belongsTo(db.member, { foreignKey: "id_member" });
  db.bonus_pass_up.belongsTo(db.sponsor_pending, {
    foreignKey: "id_sponsor_pending",
    as: "passup_detail_rekrutan",
  });
  db.bonus.belongsTo(db.member, { foreignKey: "id_member" });
  // db.bonus_pair.belongsTo(db.registrasi_pending, {
  //   foreignKey: "id_pending",
  //   as: "reg_bonus_sumber",
  // });
  // db.bonus_pair.belongsTo(db.posisi_pending, {
  //   foreignKey: "id_pending",
  //   as: "upg_bonus_sumber",
  // });
  db.payout.hasMany(db.bonus, { foreignKey: "id_payout" });
  db.bonus.belongsTo(db.payout, { foreignKey: "id_payout" });
  db.member.hasMany(db.bonus, { foreignKey: "id_member" });
  db.member.hasMany(db.payout, { foreignKey: "id_member" });
  db.payout.belongsTo(db.member, { foreignKey: "id_member" });

  db.member.hasOne(db.member_rute, {
    foreignKey: "id_member",
    constraints: false,
  });
  db.member_rute.belongsTo(db.member, {
    foreignKey: "id_member",
    as: "member_rute",
    constraints: false,
  });

  db.member.hasMany(db.detail_kode, { foreignKey: "id_pemakai" });
  db.detail_kode.belongsTo(db.member, {
    foreignKey: "id_pemakai",
    as: "detail_kode_pemakai",
  });

  db.detail_kode.hasMany(db.mutasi_kode, { foreignKey: "id_kode" });
  db.mutasi_kode.belongsTo(db.detail_kode, { foreignKey: "id_kode" });

  db.barang.hasMany(db.gambar, { foreignKey: "id_barang" });
  db.gambar.belongsTo(db.barang, { foreignKey: "id_barang" });
  db.order.hasMany(db.order_detail, { foreignKey: "id_order" });
  db.order_detail.belongsTo(db.order, { foreignKey: "id_order" });
  db.order.hasMany(db.order_history, { foreignKey: "id_order" });
  db.order_detail.belongsTo(db.barang, { foreignKey: "id_barang" });
  db.order.belongsTo(db.member, {
    foreignKey: "id_member",
    constraints: false,
  });
  db.order.belongsTo(db.member, {
    foreignKey: "id_member_terbentuk",
    constraints: false,
    as: "member_terbentuk",
  });
  db.order.belongsTo(db.gudang, {
    foreignKey: "id_gudang",
    constraints: false,
  });
  db.order_history.belongsTo(db.admin, {
    foreignKey: "id_admin",
    constraints: false,
  });
  db.order.hasMany(db.detail_kode, { foreignKey: "id_order" });
  db.member.hasMany(db.order, { foreignKey: "id_member", constraints: false });
  db.member.hasMany(db.bonus, { foreignKey: "id_member" });

  db.order_detail.hasMany(db.order_detail_item, {
    foreignKey: "id_order_detail",
  });
  db.order_detail_item.belongsTo(db.order_detail, {
    foreignKey: "id_order_detail",
  });
  db.order_detail_item.belongsTo(db.item, { foreignKey: "id_item" });

  // db.member.hasOne(db.otp, {foreignKey: 'ext_id'});

  db.propinsi.hasMany(db.kota, { foreignKey: "id_kota" });
  db.propinsi.hasMany(db.kecamatan, { foreignKey: "id_kecamatan" });
  db.kota.hasMany(db.kecamatan, { foreignKey: "id_kecamatan" });
  db.kota.belongsTo(db.propinsi, { foreignKey: "id_propinsi" });
  db.kecamatan.belongsTo(db.kota, { foreignKey: "id_kota", as: "kota" });
  db.kecamatan.belongsTo(db.propinsi, {
    foreignKey: "id_propinsi",
    as: "propinsi",
  });

  db.member.belongsTo(db.kecamatan, {
    foreignKey: "id_kecamatan",
    as: "kecamatan",
    constraints: false,
  });
  db.member.belongsTo(db.kota, {
    foreignKey: "id_kota",
    as: "kota",
    constraints: false,
  });
  db.member.belongsTo(db.propinsi, {
    foreignKey: "id_propinsi",
    as: "propinsi",
    constraints: false,
  });
  db.member.belongsTo(db.member, {
    foreignKey: "id_sponsor",
    as: "sponsor",
    constraints: false,
  });
  db.member.belongsTo(db.member, {
    foreignKey: "id_upline",
    as: "upline",
    constraints: false,
  });

  db.member.hasOne(db.member, {
    foreignKey: "id_upline",
    as: "downline_kiri",
    constraints: false,
  });
  db.member.hasOne(db.member, {
    foreignKey: "id_upline",
    as: "downline_kanan",
    constraints: false,
  });

  db.order.belongsTo(db.propinsi, {
    foreignKey: "id_propinsi",
    as: "propinsi",
  });
  db.order.belongsTo(db.kota, { foreignKey: "id_kota", as: "kota" });
  db.order.belongsTo(db.kecamatan, {
    foreignKey: "id_kecamatan",
    as: "kecamatan",
  });

  db.order.belongsTo(db.propinsi, {
    foreignKey: "id_propinsi_kirim",
    as: "propinsi_kirim",
    constraints: false,
  });
  db.order.belongsTo(db.kota, {
    foreignKey: "id_kota_kirim",
    as: "kota_kirim",
    constraints: false,
  });
  db.order.belongsTo(db.kecamatan, {
    foreignKey: "id_kecamatan_kirim",
    as: "kecamatan_kirim",
    constraints: false,
  });
  db.order.hasOne(db.pembayaran, { foreignKey: "id_order" });
  db.pembayaran.belongsTo(db.order, { foreignKey: "id_order" });

  db.alamat_kirim.belongsTo(db.kecamatan, {
    foreignKey: "id_kecamatan",
    as: "kecamatan",
  });
  db.alamat_kirim.belongsTo(db.kota, { foreignKey: "id_kota", as: "kota" });
  db.alamat_kirim.belongsTo(db.propinsi, {
    foreignKey: "id_propinsi",
    as: "propinsi",
  });
  db.alamat_kirim.belongsTo(db.member, { foreignKey: "id_member" });

  db.menu.hasMany(db.menu_action, { foreignKey: "menu_id" });
  db.menu_action.belongsTo(db.menu, { foreignKey: "menu_id" });
  db.menu.hasMany(db.menu, {
    foreignKey: "parent_id",
    as: "children",
    constraints: false,
  });

  db.admin.hasMany(db.admin_role, { foreignKey: "admin_id" });
  db.admin_role.belongsTo(db.admin, { foreignKey: "admin_id" });

  db.menu.hasMany(db.admin_role, { foreignKey: "menu_id" });
  db.admin_role.belongsTo(db.menu, { foreignKey: "menu_id" });

  db.menu_action.hasMany(db.admin_role, { foreignKey: "menu_action_id" });
  db.admin_role.belongsTo(db.menu_action, { foreignKey: "menu_action_id" });

  db.registrasi_pending.belongsTo(db.member_rute, {
    foreignKey: "id_member",
    as: "registrasi_pending_rute",
    targetKey: "id_member",
    constraints: false,
  });

  db.sponsor_pending.belongsTo(db.member_rute, {
    foreignKey: "id_member",
    as: "sponsor_pending_rute",
    targetKey: "id_member",
    constraints: false,
  });

  db.member.belongsTo(db.setting_posisi, {
    foreignKey: "posisi",
    as: "member_posisi",
    targetKey: "posisi",
    constraints: false,
  });

  //db.ro_pending.belongsTo(db.member, {
  //  foreignKey: "id_member",
  //  as: "member_ro",
  //});

  //db.ro_pending.belongsTo(db.setting_posisi, {
  //  foreignKey: "posisi_member",
  //  targetKey: "posisi",
  //  as: "setting_posisi_ro",
  //});

  db.member.belongsTo(db.setting_posisi, {
    foreignKey: "posisi",
    targetKey: "posisi",
    as: "setting_posisi_direct_sponsor",
    constraints: false,
  });
  db.member.hasMany(db.member, {
    foreignKey: "id_sponsor",
    targetKey: "id",
    as: "downline_sponsorship",
    constraints: false,
  });
  db.member.belongsTo(db.member, {
    foreignKey: "id",
    targetKey: "id_sponsor",
    as: "downline",
    constraints: false,
  });
  db.member.hasMany(db.bank_account, {
    foreignKey: "id_member",
    targetKey: "id",
    as: "history_bank_account",
  });

  db.order.hasOne(db.ro_pending, { foreignKey: "id_order" });
  db.ro_pending.belongsTo(db.order, { foreignKey: "id_order" });
  db.payout.belongsTo(db.bank, { foreignKey: "kode_bank" });

  db.admin.hasMany(db.renewal_pair, {
    foreignKey: "user_create",
    as: "renewal_pair_admin_create",
  });
  db.renewal_pair.belongsTo(db.admin, {
    foreignKey: "user_create",
    as: "renewal_pair_admin_create",
  });

  db.admin.hasMany(db.renewal_pair, {
    foreignKey: "user_reset",
    as: "renewal_pair_admin_reset",
  });
  db.renewal_pair.belongsTo(db.admin, {
    foreignKey: "user_reset",
    as: "renewal_pair_admin_reset",
  });

  db.member.hasMany(db.member_suspend, {
    foreignKey: "id_member",
    as: "member_suspend",
  });
  db.member_suspend.belongsTo(db.member, {
    foreignKey: "id_member",
    as: "member_suspend",
  });

  db.member.hasOne(db.member_history_posisi, {
    foreignKey: "id_member",
    as: "member_history_posisi",
  });
  db.member_history_posisi.belongsTo(db.member, {
    foreignKey: "id_member",
    as: "member_history_posisi",
  });

  db.member.hasOne(db.bank_account, {
    foreignKey: "id_member",
    as: "member_bank_account",
  });
  db.bank_account.belongsTo(db.member, {
    foreignKey: "id_member",
    as: "member_bank_account",
  });

  db.admin.hasMany(db.member_suspend, {
    foreignKey: "user_create",
    as: "admin_suspend",
  });
  db.member_suspend.belongsTo(db.admin, {
    foreignKey: "user_create",
    as: "admin_suspend",
  });

  db.bonus_annual_reward.belongsTo(db.member, {
    foreignKey: "id_member",
    as: "member_reward",
  });

  db.bonus_ro.belongsTo(db.ro_pending, {
    foreignKey: "id_ro_pending",
    as: "sponsored_detail_ro",
  });
  db.bonus_ro.belongsTo(db.member, {
    foreignKey: "id_member",
    as: "sponsored_member",
  });
  db.bonus_ro_sponsoring.belongsTo(db.member, {
    foreignKey: "id_downline",
    as: "sponsored_member",
  });

  db.sim_upline = require("./sim-upline.model")(sequelize, Sequelize);

  db.setting_posisi.hasMany(db.setting_pair_bertingkat, {
    foreignKey: "setting_posisi_id",
  });
  db.setting_pair_bertingkat.belongsTo(db.setting_posisi, {
    foreignKey: "setting_posisi_id",
  });

  db.pb.hasMany(db.pb_detail, { foreignKey: "id_penerimaan_barang" });
  db.pb_detail.belongsTo(db.pb, { foreignKey: "id_penerimaan_barang" });
  db.purchase_order.hasMany(db.pb, { foreignKey: "id_purchase" });
  db.pb.belongsTo(db.purchase_order, { foreignKey: "id_purchase" });
  db.admin.hasMany(db.pb, { foreignKey: "id_admin" });
  db.pb.belongsTo(db.admin, { foreignKey: "id_admin" });
  db.gudang.hasMany(db.pb, { foreignKey: "id_gudang" });
  db.pb.belongsTo(db.gudang, { foreignKey: "id_gudang" });
  db.supplier.hasMany(db.pb, { foreignKey: "id_supplier" });
  db.pb.belongsTo(db.supplier, { foreignKey: "id_supplier" });
  db.detail_purchase_order.hasMany(db.pb_detail, {
    foreignKey: "id_purchase_detail",
  });
  db.pb_detail.belongsTo(db.detail_purchase_order, {
    foreignKey: "id_purchase_detail",
  });
  db.item.hasMany(db.pb_detail, { foreignKey: "id_item" });
  db.pb_detail.belongsTo(db.item, { foreignKey: "id_item" });

  db.stok_keep.belongsTo(db.order, { foreignKey: "id_order" });
  db.stok.hasMany(db.stok_keep, { foreignKey: "id_stok" });
  db.stok_keep.belongsTo(db.stok, { foreignKey: "id_stok" });

  // db.journal.hasMany(db.journal_detail, { foreignKey: "id_journal" });
  // db.journal_detail.belongsTo(db.journal, { foreignKey: "id_journal" });
  db.item_history = require("./item_history.model")(sequelize, Sequelize);

  db.retur_beli = require("./retur-pembelian.model")(sequelize, Sequelize);
  db.retur_beli_detail = require("./retur-pembelian-detail.model")(
    sequelize,
    Sequelize
  );
  db.hutang = require("./hutang.model")(sequelize, Sequelize);

  // retur beli
  db.retur_beli.hasMany(db.retur_beli_detail, {
    foreignKey: "id_retur_pembelian",
  });
  db.retur_beli_detail.belongsTo(db.retur_beli, {
    foreignKey: "id_retur_pembelian",
  });
  db.retur_beli.belongsTo(db.pb, { foreignKey: "id_penerimaan_barang" });
  db.pb.hasMany(db.retur_beli, { foreignKey: "id_penerimaan_barang" });

  db.retur_beli.belongsTo(db.supplier, { foreignKey: "id_supplier" });
  db.supplier.hasMany(db.retur_beli, { foreignKey: "id_supplier" });
  db.retur_beli.belongsTo(db.admin, { foreignKey: "id_admin" });
  db.admin.hasMany(db.retur_beli, { foreignKey: "id_admin" });
  db.retur_beli.belongsTo(db.gudang, { foreignKey: "id_gudang" });
  db.gudang.hasMany(db.retur_beli, { foreignKey: "id_gudang" });
  db.retur_beli_detail.belongsTo(db.item, { foreignKey: "id_item" });
  db.item.hasMany(db.retur_beli_detail, { foreignKey: "id_item" });

  db.hutang.belongsTo(db.supplier, { foreignKey: "id_supplier" });
  db.supplier.hasMany(db.hutang, { foreignKey: "id_supplier" });
  db.hutang.belongsTo(db.pb, {
    foreignKey: "id_penerimaan_barang",
    constraints: false,
  });
  db.pb.hasMany(db.hutang, {
    foreignKey: "id_penerimaan_barang",
    constraints: false,
  });

  db.hutang.hasMany(db.hutang, {
    foreignKey: "id_hutang",
    as: "has_returs",
    constraints: false,
  });
  db.hutang.hasMany(db.hutang, {
    foreignKey: "id_hutang",
    as: "has_bayars",
    constraints: false,
  });
  db.hutang.belongsTo(db.hutang, {
    foreignKey: "id_hutang",
    as: "retur_of",
    constraints: false,
  });
  db.hutang.belongsTo(db.hutang, {
    foreignKey: "id_hutang",
    as: "bayar_of",
    constraints: false,
  });

  db.pembayaran_hutang = require("./pembayaran-hutang.model")(
    sequelize,
    Sequelize
  );
  db.pembayaran_hutang_detail = require("./pembayaran-hutang-detail.model")(
    sequelize,
    Sequelize
  );

  db.pembayaran_hutang.hasMany(db.pembayaran_hutang_detail, {
    foreignKey: "id_pembayaran_hutang",
  });
  db.pembayaran_hutang_detail.belongsTo(db.pembayaran_hutang, {
    foreignKey: "id_pembayaran_hutang",
  });
  db.pembayaran_hutang_detail.belongsTo(db.pb, {
    foreignKey: "id_penerimaan_barang",
  });
  db.pb.hasMany(db.pembayaran_hutang_detail, {
    foreignKey: "id_penerimaan_barang",
  });

  db.pembayaran_hutang.belongsTo(db.supplier, { foreignKey: "id_supplier" });
  db.supplier.hasMany(db.pembayaran_hutang, { foreignKey: "id_supplier" });

  db.pembayaran_hutang.belongsTo(db.admin, { foreignKey: "id_admin" });
  db.admin.hasMany(db.pembayaran_hutang, { foreignKey: "id_admin" });

  db.retur_jual_file = require("./retur_jual_file.model")(sequelize, Sequelize);
  db.retur_jual_detail_item = require("./retur_jual_detail_item.model")(
    sequelize,
    Sequelize
  );
  db.retur_jual.hasMany(db.retur_jual_file, { foreignKey: "id_retur" });
  db.retur_jual_file.belongsTo(db.retur_jual, { foreignKey: "id_retur" });

  db.order_detail.hasOne(db.retur_jual_detail, {
    foreignKey: "id_order_detail",
  });
  db.retur_jual_detail.belongsTo(db.order_detail, {
    foreignKey: "id_order_detail",
  });

  db.retur_jual_detail.hasMany(db.retur_jual_detail_item, {
    foreignKey: "id_retur_jual_detail",
  });
  db.retur_jual_detail_item.belongsTo(db.retur_jual_detail, {
    foreignKey: "id_retur_jual_detail",
  });

  // db.order_detail_item.hasOne(db.retur_jual_detail_item, {foreignKey: 'id_order_detail_item'});
  // db.retur_jual_detail_item.belongsTo(db.order_detail_item, {foreignKey: 'id_order_detail_item'});
  db.item.hasMany(db.retur_jual_detail_item, { foreignKey: "id_item" });
  db.retur_jual_detail_item.belongsTo(db.item, { foreignKey: "id_item" });

  db.member.hasMany(db.retur_jual, {
    foreignKey: "id_member",
    constraints: false,
  });
  db.retur_jual.belongsTo(db.member, {
    foreignKey: "id_member",
    constraints: false,
  });
  db.barang.hasMany(db.retur_jual_detail, { foreignKey: "id_barang" });
  db.retur_jual_detail.belongsTo(db.barang, { foreignKey: "id_barang" });

  db.retur_jual.belongsTo(db.order, {
    foreignKey: "id_order_resend",
    as: "kirim_ulang",
    constraints: false,
  });

  db.modifikasi = require("./modifikasi.model")(sequelize, Sequelize);
  db.modifikasi_jadi = require("./modifikasi-jadi.model")(sequelize, Sequelize);
  db.modifikasi_jadi_asal = require("./modifikasi-jadi-asal.model")(
    sequelize,
    Sequelize
  );

  db.gudang.hasMany(db.modifikasi, { foreignKey: "id_gudang" });
  db.modifikasi.belongsTo(db.gudang, { foreignKey: "id_gudang" });

  db.modifikasi.hasMany(db.modifikasi_jadi, { foreignKey: "id_modifikasi" });
  db.modifikasi_jadi.belongsTo(db.modifikasi, { foreignKey: "id_modifikasi" });

  db.modifikasi_jadi.hasMany(db.modifikasi_jadi_asal, {
    foreignKey: "id_modifikasi_jadi",
  });
  db.modifikasi_jadi_asal.belongsTo(db.modifikasi_jadi, {
    foreignKey: "id_modifikasi_jadi",
  });

  db.modifikasi_jadi.belongsTo(db.item, { foreignKey: "id_item" });
  db.modifikasi_jadi_asal.belongsTo(db.item, { foreignKey: "id_item" });
  db.modifikasi.belongsTo(db.admin, { foreignKey: "id_admin" });

  db.midtrans_notif_log = require("./midtrans-notif-log.model")(
    sequelize,
    Sequelize
  );

  db.bonus_pair.hasMany(db.bonus_pair_details, { foreignKey: "bonus_pair_id" });

  db.pph_bonus = require("./pph-bonus")(sequelize, Sequelize);
  db.midtrans_paid = require("./midtrans-paid.model")(sequelize, Sequelize);
  db.order.belongsTo(db.midtrans_paid, {
    foreignKey: "midtrans_paid_id",
    constraints: false,
  });
  db.setting_pph_bonus = require("./setting-pph-bonus.model")(
    sequelize,
    Sequelize
  );

  db.testMidtrans = require("./test-midtrans.model")(sequelize, Sequelize);
  db.testPembayaran = require("./test-pembayaran.model")(sequelize, Sequelize);

  db.testMidtrans.hasOne(db.testPembayaran, { foreignKey: "id_order" });
  db.logUbahEmail = require("./log-ubah-email.model")(sequelize, Sequelize);
  db.logUbahEmail.belongsTo(db.admin, { foreignKey: "id_admin" });
  db.logUbahEmail.belongsTo(db.member, { foreignKey: "id_member" });
  db.subsidiOngkir = require("./subsidi-ongkir.model")(sequelize, Sequelize);

  db.npwpValid = require("./npwp-valid.model")(sequelize, Sequelize);
  db.itemKonversi = require("./item-konversi.model")(sequelize, Sequelize);
  db.itemKonversi.belongsTo(db.item, {
    foreignKey: "id_item_dari",
    as: "dari",
  });
  db.itemKonversi.belongsTo(db.item, {
    foreignKey: "id_item_tujuan",
    as: "tujuan",
  });

  db.item.hasMany(db.itemKonversi, {
    foreignKey: "id_item_dari",
    as: "konversi",
  });

  db.jual = require("./jual.model")(sequelize, Sequelize);
  db.jualDetail = require("./jual-detail.model")(sequelize, Sequelize);

  db.jual.hasMany(db.jualDetail, { foreignKey: "id_jual" });
  db.jual.belongsTo(db.gudang, { foreignKey: "id_gudang" });
  db.jualDetail.belongsTo(db.jual, { foreignKey: "id_jual" });
  db.jualDetail.belongsTo(db.item, { foreignKey: "id_item" });

  db.jual.belongsTo(db.admin, { foreignKey: "created_by", as: "dibuat" });
  db.jual.belongsTo(db.admin, { foreignKey: "paid_by", as: "dibayar" });
  db.jual.belongsTo(db.admin, { foreignKey: "done_by", as: "diselesaikan" });
  db.jual.belongsTo(db.admin, { foreignKey: "retur_by", as: "diretur" });

  db.shortLink = require("./short-link.model")(sequelize, Sequelize);

  db.member.belongsTo(db.kota, {
    foreignKey: "id_kota_domisili",
    as: "kota_domisili",
    constraints: false,
  });
  db.member.belongsTo(db.propinsi, {
    foreignKey: "id_propinsi_domisili",
    as: "propinsi_domisili",
    constraints: false,
  });

  db.order.belongsTo(db.propinsi, {
    foreignKey: "id_propinsi_domisili",
    as: "propinsi_domisili",
  });
  db.order.belongsTo(db.kota, {
    foreignKey: "id_kota_domisili",
    as: "kota_domisili",
  });

  module.exports = db;
} catch (error) {
  console.log(error);
}
