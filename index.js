require('dotenv').config();
const http = require('http');

function requestController(req, res) {
  console.log('Bienvenidos al curso');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Bienvenido</title>
      <style>
        h1 {
          color: navy;
          text-align: center;
        }
        p {
          color: green;
        }
      </style>
    </head>
    <body>
      <h1>¡Bienvenidos al curso desde Render!</h1>
      <p>Este es un texto con un poco de estilo.</p>
    </body>
    </html>
  `);
}

const server = http.createServer(requestController);

const PORT = process.env.PORT || 4000;

server.listen(PORT, function() {
  console.log("Aplicacion corriendo en: " + PORT);
});
