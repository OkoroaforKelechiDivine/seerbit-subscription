const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 'https://okoroaforkelechidivine.github.io/seerbit-subscription';

app.use(express.json()); // Parse JSON request body

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/api/v2/virtual-accounts', async (req, res) => {
    try {
        const response = await axios.post(
            'https://seerbitapi.com/api/v2/virtual-accounts/',
            req.body, {
                headers: req.headers
            }
        );
        res.json(response.data);
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status) {
            res.status(error.response.status).json({
                error: error.response.data || 'Internal Server Error'
            });
        } else {
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
