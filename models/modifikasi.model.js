const Modifikasi = (sequelize, Sequelize) =>
  sequelize.define("modifikasi", {
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
    no_modifikasi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: Sequelize.STRING,
    },
    jenis: {
      type: Sequelize.STRING,
      defaultValue: "modifikasi",
    },
    id_gudang: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_admin: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    print_counter: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

module.exports = Modifikasi;
