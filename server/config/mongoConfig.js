const mongoose = require("mongoose");

const connect = () => {
    const url = process.env.MONGO_CONNECTION_STRING;
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on("error", (err) => {
        console.error("ERROR: ", err);
    });
};

const disconnect = () => {
    if (!mongoose.connection) {
        return;
    }

    mongoose.disconnect();
};

module.exports = {
    connect,
    disconnect
};
