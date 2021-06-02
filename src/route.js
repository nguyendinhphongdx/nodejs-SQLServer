const path = require('path'); 
function Route(app) {

    app.get('/', (req, res) => {
        // res.json({success:'2000'})
        res.sendFile(path.join(__dirname, '../components', 'index.html'));
    })
    app.post('/upload', (req, res) => {
        console.log(req.files)
        var file;
        if (!req.files) {
            res.send("File was not found");
            return;
        }
        file = req.files.sampleFile;  // here is the field name of the form
        file.mv(path.join(__dirname, '../public/script','myScript.sql'))
        
        res.send("File Uploaded");
    })
}
module.exports = Route;