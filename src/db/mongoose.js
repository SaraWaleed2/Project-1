const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Mobile-Store")
    .then(() => {
        console.log("DB Connected successfully");
    })
    .catch((e) => {
        console.log(e.message);
    })