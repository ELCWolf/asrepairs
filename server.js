const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { deviceInfo, imei, phoneNumber, email, name } = req.body;
    // Save data to database
    res.send('Data received');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
