var express = require('express');
var app = express();
var port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});