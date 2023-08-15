const express = require('express');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();

const db1 = new Sequelize(process.env.DB1_NAME, process.env.DB1_USER, process.env.DB1_PASSWORD, {
    host: process.env.DB1_HOST,
    port: process.env.DB1_PORT,
    dialect: 'mysql',
    logging: false,
});

// Tes Connection Backend
app.get('/', async (req, res) => {
    try {
        res.json('API IS CONNECTED');
    } catch (error) {
        console.error('Connection Failed', error);
    }
});

// Endpoint untuk mendapatkan daftar tabel dalam database
app.get('/api/tables', async (req, res) => {
    try {
        const tables = await db1.showAllSchemas();
        res.json(tables);
    } catch (error) {
        console.error('Gagal mendapatkan daftar tabel:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat mendapatkan daftar tabel.' });
    }
});

// Endpoint untuk mendapatkan isi tabel berdasarkan nama tabel
app.get('/api/table/:tableName', async (req, res) => {
    const tableName = req.params.tableName;
    try {
        const tableData = await db1.query(`SELECT * FROM ${tableName}`);
        res.json(tableData[0]);
    } catch (error) {
        console.error(`Gagal mendapatkan isi tabel ${tableName}:`, error);
        res.status(500).json({ message: `Terjadi kesalahan saat mendapatkan isi tabel ${tableName}.` });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});