const http = require('http');

const hostname = '127.0.0.1'
const port = 5000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('content-type', 'text/plain')
    res.end("hello  broo")
})

server.listen(port, hostname, ()=>{
    console.log(`Server run : https://${hostname}:${port}/`)
})