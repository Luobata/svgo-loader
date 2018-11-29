const SVGO = require('svgo');
const fs = require('fs');
const path = require('path');
const svg = './file/email.svg';
const filePath = path.resolve(__dirname, svg);
svgo = new SVGO();

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    svgo.optimize(data).then(result => {
        console.log(result);
    });
});
