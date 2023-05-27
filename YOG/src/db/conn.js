const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/yogDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log(`Connection Successful`);
}).catch((e) => {
    console.log(e);
})