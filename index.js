console.log("Test");

const express = require("express");
const app = express();
const port = 8000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get("/hello-world", (req, res) => {
    res.send("Hello...");
  });
  
app.get("/Name", (req, res) => {
    res.send(`
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
        <body>
          <div class="name">Pajongsak <br> Wirithpon</div>
        </body>
      </html>
    `);
  });

  app.get("/Day", (req, res) => {
    res.send("ดีง้าบบบ วันศุกร์...");
  });
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});