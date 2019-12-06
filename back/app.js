const express = require('express');

const app = express();
const port = 3000;

/*
 * This is node app that is doing some serious business stuff
 */
app.get('/api/foo', (req, res, next) => {

    //Complicated business logic happens here...
    const now = new Date();
    const value = `Hello World from ConFrontJS! <hr> Time is: ${now}`;
   
    res
        .header({ 'Access-Control-Allow-Origin': '*' })
        .send(value);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});