const express = require('express');
const path = require('path');
const app = express();
const MOCK_DATA = require('./MockData.json');

console.log(MOCK_DATA);

const PORT = 8080;

app.use('/', express.static(path.join(__dirname, '/../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../dist/index.html'));
});

app.get('/featuredClothes', (req, res) => {
    res.status(200).send(MOCK_DATA); 
});

app.get('/floatGalleryModels', (req, res) => {
    res.status(200).send(MOCK_DATA);
});

app.get('/frontPageContent', (req, res) => {
    res.status(200).send(MOCK_DATA);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));