const SubsidiOngkir = (sequelize, Sequelize) =>
  sequelize.define("subsidi_ongkir", {
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
    jenis: {
      type: Sequelize.ENUM("PERSENTASE", "FIX"),
      allowNull: false,
      defaultValue: "PERSENTASE",
    },
    values: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    deskripsi: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });

module.exports = SubsidiOngkir;
