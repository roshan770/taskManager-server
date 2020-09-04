const mongoose = require("mongoose");

const connection =
  "mongodb+srv://servertaskmanager:servertaskmanager@server-taskmanager.z0h8k.mongodb.net/server-Task-manager?retryWrites=true&w=majority";

mongoose.connect(connection, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
