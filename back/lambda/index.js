exports.handler = async (event) => {

    //Complicated business logic happens here...
    const value = 'Hello World from FOO!';

    const response = {
        statusCode: 200,
        body: value,
        headers: { 'Access-Control-Allow-Origin': '*' }
    };
    return response;
};