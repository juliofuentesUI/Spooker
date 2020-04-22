const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// console.log('__dirname is');
// console.log(path.join(__dirname, '/../dist/index.html'));

// app.use('/', express.static(path.join(__dirname, '/../dist/index.html')));
app.use('/', express.static(path.join(__dirname, '/../dist')));
// app.use(express.static('./../dist/index.html'));
app.get('/items', (req, res) => {
    res.send('Hello World');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../dist/index.html'));
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));