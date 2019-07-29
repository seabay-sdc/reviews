const app = require('./app');
const PORT = process.env.SERVER_PORT || 3002
const HOST = process.env.SERVER_HOST || 'localhost'


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


