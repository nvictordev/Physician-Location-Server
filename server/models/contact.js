const mongoose = require('mongoose');

mongoose.connection.once('open', function callback() {
  let contactsSchema = mongoose.model({
    Physician_First_Name: {
      type: String,
      required: true,
      minlength: 1
    },
    Physician_Middle_Name: {
      type: String,
      minlength: 1 
    },
    Physician_Last_Name: {
      type: String,
      required: true,
      minlength: 1
    },
    Recipient_Primary_Business_Street_Address_Line1: {},
    Recipient_City: {},
    Recipient_State: {},
    Recipient_Zip_Code: {}
  });
  let contacts = mongoose.model('contacts', contactsSchema)
  return mongoose.connection.close();
})

module.exports = {contacts};