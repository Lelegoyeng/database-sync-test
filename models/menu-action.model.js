const MenuAction = (sequelize, Sequelize) =>
    sequelize.define(
        'menu_actions',
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
            menu_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        }
    )

module.exports = MenuAction
