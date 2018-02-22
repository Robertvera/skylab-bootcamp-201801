const fs = require('fs')

fs.createReadStream(process.argv[2]).pipe(fs.createWriteStream(`copy_${process.argv[2]}`));