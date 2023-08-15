const Menu = (sequelize, Sequelize) =>
    sequelize.define(
        'menus',
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
            parent_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            
            label: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            path: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            icon: {
                type: Sequelize.STRING,
            },
            heading: {
                type: Sequelize.STRING,
            },
            devider: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            order : {
                type: Sequelize.STRING
            },
            sidebar : {
                type: Sequelize.BOOLEAN
            }
        }
    )

module.exports = Menu
