const fs = require('fs');
const http = require('http');
const archiver = require('archiver');

const options = {
    host: 'localhost',
    port: 888,
    path: '/?filename=package.zip',
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream',
    }
}

const req = http.request(options, (res) => {

})
req.on('error', (e) => {
    console.error('req', e);
})

const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

archive.directory('./package', false)

archive.finalize();

archive.pipe(req)

archive.on('end', () => {
    req.end()
    console.log('archive->end')
})

