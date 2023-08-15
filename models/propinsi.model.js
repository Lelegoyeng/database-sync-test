const Propinsi = (sequelize, Sequelize) =>
  sequelize.define(
    'propinsi',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
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
      }
    }
  )

module.exports = Propinsi
