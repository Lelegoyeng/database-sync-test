const BonusPair = (sequelize, Sequelize) =>
  sequelize.define(
    'bonus_pair',
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
      id_bonus: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_member: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      posisi: {
        type: Sequelize.STRING,
      },
      jumlah_pair: {
        type: Sequelize.INTEGER,
      },
      jumlah_increment_pair: {
        type: Sequelize.INTEGER,
      },
      pair_maksimal: {
        type: Sequelize.INTEGER,
      },
      jumlah_increment_child_kiri: {
        type: Sequelize.INTEGER,
      },
      jumlah_increment_child_kanan: {
        type: Sequelize.INTEGER,
      },
      jumlah_child_kiri: {
        type: Sequelize.INTEGER,
      },
      jumlah_child_kanan: {
        type: Sequelize.INTEGER,
      },
      bonus_dibayar: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    }
  )

module.exports = BonusPair
