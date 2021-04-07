const http = require('http');
const port=3000;
const hostname='localhost';

const app = http.createServer((req, res) => {
   
   const data = JSON.stringify({
      name: "Chukwurah Victor",
      country: "Nigeria",
      hobby: "Playing video games"
   })

   res.writeHead(200, {"Content-Type": "application/json"});
   res.write(data);
   res.end();
})

//Port listener
app.listen(port, hostname, () => {
   console.log(`Server running on ${hostname}:${port}`);
});
