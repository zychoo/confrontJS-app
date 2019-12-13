/*
 * This is lambda that is reflecting our app.js business
 */
exports.handler = async (event) => {

    //Complicated business logic happens here...
    const now = new Date();
    const value = `Hello World from ConFrontJS! <hr> Time is: ${now}`;

    const response = {
        statusCode: 200,
        body: value,
        headers: { 'Access-Control-Allow-Origin': '*' }
    };
    return response;
};