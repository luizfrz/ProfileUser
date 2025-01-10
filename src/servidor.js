require('dotenv').config({ path: './src/.env' }); 

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());

const STEAM_KEY = process.env.STEAM_KEY;
const STEAM_ID = process.env.STEAM_ID;

app.get('/steam/activities', async (req, res) => {
    try {
        const { data } = await axios.get('https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/', {
            params: {
                key: STEAM_KEY,
                steamid: STEAM_ID
            }
        });ss

        res.json(data.response);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao obter as atividades da Steam.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
