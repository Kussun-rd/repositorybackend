require('dotenv').config();
const http = require('http');

function requestController(req, res) {
  console.log('Bienvenidos al curso');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Bienvenidos al curso desde Render!');
}

const server = http.createServer(requestController);

const PORT = process.env.PORT || 4000;

server.listen(PORT, function() {
  console.log("Aplicacion corriendo en: " + PORT);
});