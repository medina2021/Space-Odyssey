// mongoose schema for mongoDB

const mongoose = require("mongoose");

// this is the schema model for mongo
const userSchema = mongoose.Schema({
  name: { type: String },
  password: { type: String },
  email: { type: String },
});
// setting use to a mongoose model to be exported
// "user" the collection name that will show up in mongo db
// userSchema refrences the schema model
const User = mongoose.model("User", userSchema);
// module exports allows to be used in other files
module.exports = User;
