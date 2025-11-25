const fs = require('fs');
const path = require('path');

pdf_location = path.join(__dirname, 'pdfs');
meta_location = path.join(__dirname, 'meta');

function findPdfs() {
    // Read the directory of pdfs
    files = fs.readdirSync(pdf_location);
    file_data = [];
    files.forEach(file => {
        // Get metdata
        json = fs.readFileSync(path.join(meta_location, file)+'.json');
        data = JSON.parse(json);
        // Add the file location with the metadata
        data.file = file;
        file_data.push(data);
    });
    return file_data;
}

module.exports = findPdfs;