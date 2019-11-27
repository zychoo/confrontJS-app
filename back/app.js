const express = require('express');

const app = express();
const port = 3000;

app.get('/api/foo', (req, res, next) => {

    const value = 'Endpoint FOO says HELLO WORLD';
    console.log(`Responding from foo`);
    
    res
        .header({ 'Access-Control-Allow-Origin': '*' })
        .send(value);
});

app.get('/api/bar', (req, res, next) => {

    const value = 'Endpoint BAR says HELLO WORLD';
    console.log(`Responding from bar`);
    res
        .header({ 'Access-Control-Allow-Origin': '*' })
        .send(value);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});