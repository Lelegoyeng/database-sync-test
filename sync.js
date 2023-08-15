const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const db2 = new Sequelize(process.env.DB2_NAME, process.env.DB2_USER, process.env.DB2_PASSWORD, {
    host: process.env.DB2_HOST,
    port: process.env.DB2_PORT,
    dialect: 'mysql',
    logging: false,  // Turn off logging
});

// Membaca direktori models dan mengimpor semua model
const modelsDir = path.join(__dirname, 'models'); // Pastikan ini sesuai dengan lokasi folder models
fs.readdirSync(modelsDir).forEach(file => {
    if (file.endsWith('.model.js')) {
        const modelPath = path.join(modelsDir, file);
        const defineModel = require(modelPath);
        defineModel(db2, Sequelize); // Panggil fungsi untuk mendefinisikan model dengan sequelize
    }
});

// Menjalankan migrasi untuk membuat tabel di database
(async () => {
    try {
        await db2.authenticate(); // Menghubungkan ke database
        await db2.sync({ force: true }); // force: true akan menghapus tabel yang ada dan membuat ulang sesuai model
        console.log('Tabel berhasil di-migrate');
    } catch (error) {
        console.error('Gagal melakukan migrate:', error);
    }
})();
