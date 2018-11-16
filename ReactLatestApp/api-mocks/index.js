// api.js
var API = require("api-stub");
var config = [
  {
    path: "/api/post?userName=accion&password=success",
    data: { token: "12345", userName: "accion", userId: "12345" }
  },
  {
    path: "/api/post?userName=vinay&password=success",
    data: { token: "12345", userName: "vinay", userId: "12346" }
  }
];
var server = new API(config);

server.start(5000);

//then run the script `node api.js`
