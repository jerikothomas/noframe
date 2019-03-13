const hostname='127.0.0.1';
const port='3000';
const server= require('./kontroler.js');

server.listen(port,hostname,()=>{
    console.log(`Test Server at http://${hostname}:${port}`);
}
);