const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
function execSQL(nameFile){
    const pathFile = process.cwd() +'/public/script/'+nameFile;
    console.log(pathFile);
    console.log(fs.existsSync(pathFile));
    try {
        if (fs.existsSync(pathFile)) {
            const output = execSync(`sqlcmd -S HAINTN -i ${pathFile} -o out.rpt`, { encoding: 'utf-8' });
            console.log('The output is:');
            console.log(output);
            return true;
        }
      } catch(err) {
        console.error(err)
        return false;
      }
  
}
module.exports = execSQL;