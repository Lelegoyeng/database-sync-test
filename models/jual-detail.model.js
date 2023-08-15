const JualDetail = (sequelize, Sequelize) =>
  sequelize.define("jual_detail", {
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
    id_jual: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_item: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    harga: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    hpp: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    qty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    diskon: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    persen_ppn: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    ppn: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    dpp: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  });

module.exports = JualDetail;
