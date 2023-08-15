const Barang = (sequelize, Sequelize) =>
  sequelize.define("barang", {
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
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: Sequelize.STRING,
    },
    harga: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    harga_nonmember: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    hpp: {
      type: Sequelize.DOUBLE,
    },
    persen_ppn: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    berat: {
      type: Sequelize.DOUBLE,
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    aktif: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    id_admin: {
      type: Sequelize.INTEGER,
    },
  });

module.exports = Barang;
