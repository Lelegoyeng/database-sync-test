const NpwpValid = (sequelize, Sequelize) =>
  sequelize.define("npwp_valids", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    npwp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nama: {
      type: Sequelize.STRING,
    },
  });

module.exports = NpwpValid;
