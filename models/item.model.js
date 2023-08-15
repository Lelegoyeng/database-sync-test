const Item = (sequelize, Sequelize) =>
  sequelize.define("item", {
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
    id_category: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    merk: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hpp: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    harga: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    stok_minimal: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    deskripsi: {
      type: Sequelize.STRING,
    },
    jenis: {
      type: Sequelize.ENUM("mlm", "sampel", "karyawan"),
      allowNull: false,
      defaultValue: "mlm",
    },
    harga_jual: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
  });

module.exports = Item;
