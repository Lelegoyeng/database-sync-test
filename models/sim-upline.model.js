const SimUpline = (sequelize, Sequelize) =>
  sequelize.define(
    "sim_uplines",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_member: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sisi: {
        type: Sequelize.ENUM('L', 'R'),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('unused', 'used'),
        defaultValue: 'unused',
        allowNull: false,
      },
      
    }
);

module.exports = SimUpline;
