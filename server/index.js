import express from 'express'
import React from 'react';
import path from 'path'
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import fs from 'fs'
import dotenv from 'dotenv';
import Api from '../src/utils/api';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3001;


const getCarrouselData = (query, ip) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY,
        ...(ip && { 'ip-locate': ip })
    };

    return Api.Get(query, { method: 'GET', headers })
        .catch(err => {
            console.error("Error getting carousel data:", err.message);
            return [];
        });
};

app.get("/", async (req, res) => {
    
    const indexFile = path.resolve('./server/public/index.html')
    try{
        const geoIp = await Api.DefaultGet('https://api.ipify.org?format=json') 

        const ip = geoIp.ip || process.env.DEFAULT_IP_BUENOS_AIRES
      

        const firstCarrousel = await getCarrouselData('/api/accounts?tagname=Turismo%20en%20Buenos%20Aires&limit=4',ip);
        const secondCarrousel = await getCarrouselData('/api/accounts?haveVoucher=true&limit=4&orderBy=ASC&pages=1');

        const serverData = {
            firstCarrousel,
            secondCarrousel
        }

        const html = renderToString(<App serverData={serverData} />)
        fs.readFile(indexFile, 'utf8', (err, data) => {
            if (err) {
                console.error("an error has occurred")
                return res.status(500).send("an error has occurred")
            }
            return res.send(
                data.replace('<div id="root"></div>', `<div id="root">${html}</div>
                    <script>
                        window.__INITIAL_DATA__ = ${JSON.stringify({
                            serverData: serverData
                    })};
                    </script>
                `)
            )
        })

    }catch(err){
        console.log("error to get data of server")

        return res.status(500).send("an error has occurred")
    }
    
})

app.use(express.static('./server/public'))

app.listen(PORT, () => {
    console.log(`Running server in: http://localhost:${PORT}`)
})