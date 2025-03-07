console.log("Test");

const express = require("express");
const app = express();
const port = 8000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get("/hello-world", (req, res) => {
    res.send("Hello...");
  });
  
app.get("/name", (req, res) => {
    res.send(`
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
        <body>
          <h1>
            <div>Pajongsak</div>
            <div>Wirithpon</div>
            <a href="/dashboard">Dashboard</a>
            <a href="/Day">Day</a>
          </h1>
        </body>
      </html>
    `);
  });

app.get("/Day", (req, res) => {
    res.send(`
        <html>
          <head>
            <link rel="stylesheet" type="text/css" href="/style.css">
          </head>
          <body>
            <h1>
              <div>ดีง้าบบบวันศุกร์น้าาา อยากกลับบ้านน ขับรถ 100+โล</div>
            </h1>
          </body>
        </html>
      `);
    });

app.get("/dashboard", (req, res) => {
    res.send(`
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
        <body class="dashboard">
          <header>
            <h1>Dashboard</h1>
          </header>
          <main>
            <section class="card">
              <h2>ชื่อ</h2>
              <p>Pajongsak.</p>
            </section>
            <section class="card">
              <h2>ชื่อ</h2>
              <p>Wirithpon</p>
            </section>
            <section class="card">
              <h2>Card 3</h2>
              <p>Content for card 3.</p>
            </section>
          </main>
        </body>
      </html>
    `);
  });
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});