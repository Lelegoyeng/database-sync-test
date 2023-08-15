const ItemKonversi = (sequelize, Sequelize) =>
  sequelize.define("item_konversi", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    public_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    id_item_dari: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_item_tujuan: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

module.exports = ItemKonversi;
