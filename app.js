const express = require('express');
const app = express();


app.get('/health-check', (req, res) => {
    res.status(200).send('OK Nice!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;