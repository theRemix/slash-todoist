var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema	= new Schema({
  slack_id: {type: String },
  todoist_oauth_token: {type: String }
});

module.exports = mongoose.model('Users', UsersSchema);