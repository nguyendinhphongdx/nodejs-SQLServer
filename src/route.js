const path = require('path'); 
const execSQL = require('./until/helper');
function Route(app) {

    app.get('/', (req, res) => {
        // res.json({success:'2000'})
        res.sendFile(path.join(__dirname, '../components', 'index.html'));
    })
    app.post('/upload', (req, res) => {
        const nameFile = new Date().getTime()+".sql";
        var file;
        if (!req.files) {
            res.send("File was not found");
            return;
        }
        file = req.files.sampleFile;  // here is the field name of the form
        file.mv(path.join(__dirname, '../public/script',nameFile))
        .then(() =>{
            if( execSQL(nameFile)){
                res.send("Excute success");
            }else{
                res.send("Excute failed");
            }
        })
        .catch(err=>{
            res.send("Upload failed");
        })
    })
}
module.exports = Route;