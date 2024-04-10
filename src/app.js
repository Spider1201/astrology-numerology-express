const express = require('express')
const app = express();

app.get('/' , (req, res) => {
    res.send ('hello Spider');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log ('Server running on https://localhost:${port}' );
});