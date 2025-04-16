// server.js

const cors_proxy = require('cors-anywhere');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhitelist: [], // Permitir todas as origens
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2'],
    redirectSameOrigin: true,
    headers: {
        'access-control-allow-origin': '*'
    }
}).listen(port, host, () => {
    console.log(`CORS Anywhere proxy running on ${host}:${port}`);
});   
