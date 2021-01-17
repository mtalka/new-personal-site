const express = require("express");

const path = __dirname + '/dist/';
const app = express();

app.use(function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
});

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

app.use(express.static(path));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});