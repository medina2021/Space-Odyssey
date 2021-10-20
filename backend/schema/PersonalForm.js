const mongoose = require("mongoose");

// this is the schema model for mongo
const PersonalSchema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  address: { type: String },
  emailAddress: { type: String },
  areacode: { type: String },
  state: { type: String },
  PhoneNumber: { type: String },
});
// setting use to a mongoose model to be exported
// "user" the collection name that will show up in mongo db
// userSchema refrences the schema model
const Form = mongoose.model("PersonalSchema", PersonalSchema);
// module exports allows to be used in other files
module.exports = Form;
