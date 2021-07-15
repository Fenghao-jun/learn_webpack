const path = require('path');

module.exports={
    entry:'./src/index.js',//入口
    output:{
        path:path.resolve(__dirname,"./build"),
        filename:'bundle.js'
    }
}