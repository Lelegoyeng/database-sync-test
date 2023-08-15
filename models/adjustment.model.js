const Adjustment = (sequelize, Sequelize) =>
  sequelize.define(
    'adjustment',
    {
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
      no_adjust: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_admin: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_gudang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      print_counter: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }
    }
  )

module.exports = Adjustment
