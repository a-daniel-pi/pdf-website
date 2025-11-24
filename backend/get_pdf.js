const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

pdf_location = path.join(__dirname, 'pdfs');

router.get('/:name', (req, res, callback) => {
    try {
        const filePath = path.join(pdf_location, req.params.name)
        const stats = fs.statSync(filePath);
        const fileSize = stats.size;
    
        // tell the client the file size
        res.setHeader('Content-Length', fileSize);
    
        // tell the client the file format
        res.setHeader('Content-Type', 'application/pdf');
    
        // Give the client a file name
        res.setHeader('Content-Disposition', 'filename="Cells.pdf"');
    
        res.sendFile(filePath, (err) => {
            if(err) {
                res.send("File not found");
            }
        });
    }
    catch (error) {
        // Pass it on to the 404 handler
        callback();
    }
});

module.exports = router;