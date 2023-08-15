const Bonus = (sequelize, Sequelize) =>
  sequelize.define(
    "bonus",
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
      id_payout:{
        type: Sequelize.INTEGER,
      },
      tanggal: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      jenis_bonus: {
        type: Sequelize.ENUM("RO-SPONSOR","SPONSOR", "PAIR", "RO", "PASSUP", "ANNUAL-RANK"),
        allowNull: false,
      },
      id_member: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bonus_bruto: {
        type: Sequelize.DOUBLE,
        min: 0,
        allowNull: false,
      },
      bonus_dibayar: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        min: 0,
      },
      status_transfer: {
        type: Sequelize.ENUM("PENDING", "PROCESSED", "CANCELED"),
        defaultValue: "PENDING",
      },
      tgl_transfer: {
        type: Sequelize.DATE,
      },
      notes: {
        type: Sequelize.STRING,
      }
    },
    { 
      tableName: "bonus",
      hooks: {
        beforeValidate : (value, options) => {
          if (value.bonus_dibayar >= value.bonus_bruto || value.bonus_dibayar < 0) {
            value.notes = value.bonus_dibayar;
            value.bonus_dibayar = 0;
          }
        }
      }
    },
  );

module.exports = Bonus;
