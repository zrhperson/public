const http = require('http');
const fs = require('fs');
const unzip = require('unzipper')

const server = http.createServer((req, res) => {
    // let writeStream = fs.createWriteStream('../server/public/filename')

    let writeStream = unzip.Extract({path: '../server/public'})

    req.pipe(writeStream);

    // req.on('data', thunk => {
    //     writeStream.write(thunk)
    // })
    // req.on('end', thunk => {
    //     writeStream.end(thunk)
    // })

    req.on('end', () => {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('okay')
    })
 
});

server.listen(888);