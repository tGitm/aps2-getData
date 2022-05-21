const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.raw({ inflate: true, limit: '700kb', type: '*/*' }));

app.get('/get', (req, res) => {
    console.log("--> Request");
    console.log(req.headers["xxx-header-down"]);
    let s = "";
    s += req.headers["xxx-header-great"];
    if (req.headers["xxx-header-great-two"] !== undefined) {
        s += req.headers["xxx-header-great-two"];
    }
    if (req.headers["xxx-header-great-three"] !== undefined) {
        s += req.headers["xxx-header-great-three"];
    }
    console.log(s);
    res.sendStatus(200);
});

app.listen(8081, () => console.log("Ready"));