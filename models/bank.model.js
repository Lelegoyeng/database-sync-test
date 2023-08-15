const Bank = (sequelize, Sequelize) =>
  sequelize.define(
    'banks',
    {
        kode: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        nama: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        umum: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    }
  )

module.exports = Bank
