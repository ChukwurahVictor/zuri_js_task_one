const http = require('http');
const fs = require('fs');
const port=4000;
const hostname='localhost';

const app = http.createServer((req, res) => {

   if(req.url === "/") {
      fs.readFile("./index.html", (error, page) => {
         if(error) {
            res.writeHead(404);
            res.write('Page not found');
         } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(page);
         }

         res.end();
      })
   }
})

//Port listener
app.listen(port, hostname, () => {
   console.log(`Server running on ${hostname}:${port}`);
});
