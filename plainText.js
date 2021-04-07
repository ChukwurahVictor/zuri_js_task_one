const http = require('http');
const port=4000;
const hostname='localhost';

const app = http.createServer((req, res) => {

   res.writeHead(200, {"Content-Type": "text/plain"});
   res.write('This is the plain text. \n'); //Plain text
   res.end();
})

//Port listener
app.listen(port, hostname, () => {
   console.log(`Server running on ${hostname}:${port}`);
});
