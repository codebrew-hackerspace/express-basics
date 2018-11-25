const mongoose = require("mongoose");
const uri = "mongodb://aria:malkani28@ds155243.mlab.com:55243/hackerspace-demo"; //replace with your own mlab uri
const db = mongoose.createConnection(uri);

const schema = mongoose.Schema({ name: "string" });
const Item = db.model("Item", schema);

module.exports = Item;
