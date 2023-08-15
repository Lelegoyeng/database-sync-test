const ContactUs = (sequelize, Sequelize) =>
  sequelize.define(
    'contact_us',
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
      id_member : {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      page_visited: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
    }
  )

module.exports = ContactUs
