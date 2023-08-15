const { Sequelize, DataTypes } = require('sequelize');
const axios = require('axios');
require('dotenv').config();

const db2 = new Sequelize(process.env.DB2_NAME, process.env.DB2_USER, process.env.DB2_PASSWORD, {
    host: process.env.DB2_HOST,
    port: process.env.DB2_PORT,
    dialect: 'mysql',
    logging: false,
});

// Import model
const defineKotaModel = require('./models/kota.model'); // Sesuaikan path impor

// Definisikan model
const Kota = defineKotaModel(db2, DataTypes); // Gunakan DataTypes

const syncdata = async () => {
    try {
        // Mendapatkan data JSON dari URL
        await db2.sync({ force: true }); // force: true akan menghapus tabel yang ada dan membuat ulang sesuai model
        const response = await axios.get('http://localhost:3000/api/table/kota');
        const jsonData = response.data;

        // Upsert data JSON ke tabel di db2
        for (const item of jsonData) {
            await Kota.upsert(item); // Gunakan seluruh item dari JSON
        }

        console.log('Data berhasil diambil dan diupsert ke tabel di db2.');
    } catch (error) {
        console.error('Gagal mengambil dan mengupsert data:', error);
    }
}

syncdata();
