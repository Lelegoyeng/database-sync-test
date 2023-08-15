const Stok = (sequelize, Sequelize) =>
  sequelize.define("stok", {
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
    id_item: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_gudang: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    qty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    hpp: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
  });

module.exports = Stok;
