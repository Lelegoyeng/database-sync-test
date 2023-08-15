const ShortLink = (sequelize, Sequelize) =>
  sequelize.define("short_links", {
    short: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    original: {
      type: Sequelize.TEXT,
    },
  });

module.exports = ShortLink;
