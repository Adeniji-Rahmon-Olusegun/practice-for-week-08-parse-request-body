const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');

let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
server = http.createServer((req, res) => {

    let streamData = '';

    console.log(req.method, req.url);

    req.on('data', (data) => {
        streamData += data;
    });

    req.on('end', () => {
        req.body = parseBody(streamData);
        sendFormPage(req, res);
    });
    
});

const port = 5000;

server.listen(port, () => console.log("Successfully started the server on port", port));


/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };