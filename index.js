const Sequelize = require('sequelize');
require('dotenv').config();

const db1 = new Sequelize(process.env.DB1_NAME, process.env.DB1_USER, process.env.DB1_PASSWORD, {
    host: process.env.DB1_HOST,
    port: process.env.DB1_PORT,
    dialect: 'mysql',
    logging: false  // Turn off logging

});

const db2 = new Sequelize(process.env.DB2_NAME, process.env.DB2_USER, process.env.DB2_PASSWORD, {
    host: process.env.DB2_HOST,
    port: process.env.DB2_PORT,
    dialect: 'mysql',
    logging: false  // Turn off logging

});

// Test the connection
(async () => {
    try {
        const Model1DB1 = db1.define('kota', {
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
            id_propinsi: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            nama: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
            }
        }, {
            timestamps: false,
        });

        const Model1DB2 = db2.define('kota', {
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
            id_propinsi: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            nama: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
            }
        }, {
            timestamps: false,
        });

        const syncData = async () => {
            try {
                // Loop through all models and sync data
                const models = [Model1DB1, /* Add more models */];

                for (const ModelDB1 of models) {
                    const dataFromDB1 = await ModelDB1.findAll();
                    for (const data of dataFromDB1) {
                        await Model1DB2.upsert(data.toJSON());
                    }
                    console.log(`Data for model ${ModelDB1.name} synced successfully.`);
                }

            } catch (error) {
                console.error('Data sync error:', error.message);
            }
        };

        syncData();
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
})();