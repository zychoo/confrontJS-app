const express = require('express');

const app = express();
const port = 3000;

app.get('/api/foo', (req, res, next) => {

    //Complicated business logic happens here...
    const value = 'Hello World from FOO!';
   
    res
        .header({ 'Access-Control-Allow-Origin': '*' })
        .send(value);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});