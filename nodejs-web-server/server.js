const http = require('http');
const requestListener = (request, response)=>{
    response.setHeader('Content-Type', 'text/html');
    response.statusCode=200;
    
    const {method}=request;
    if(method === 'GET'){
        response.end('<h1> hell-o !</h1>');
    }
    if(method === 'POST'){
        response.end('<h2>haii ... </h2>')
    }
    if(method === 'PUT'){
        response.end('<h1> salam ...</h1>');
    }
    if(method === 'DELETE'){
        response.end('<h2>kratos ?</h2>');
    }
};
const server = http.createServer(requestListener);
const port = 5000;
const host='localhost';
server.listen(port,host, ()=>{
    console.log(`server berjalan pada http://${host}:${port}`);
});