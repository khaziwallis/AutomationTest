var API = require("api-stub");
var config = [
  {
    path: "/api/post?userName=accion&password=success",
    data: {
      token: "12345",
      userName: "accion",
      userId: "12345"
    }
  },
  {
    path: "/api/post?userName=vinay&password=success",
    data: { token: "12345", userName: "vinay", userId: "12346" }
  },
  {
    path: "/api/data",
    data: {
      userInfo: [
        {
          id: 1,
          name: "Khazi",
          city: "Bengaluru",
          gender: "Male",
          favFoods: ["Indian", "Continental"]
        },
        {
          id: 2,
          name: "Vinay",
          city: "Mumbai",
          gender: "Male",
          favFoods: ["Indian", "Chinese"]
        },
        {
          id: 3,
          name: "Shanth",
          city: "Delhi",
          gender: "Male",
          favFoods: ["Indian", "Italian"]
        }
      ]
    }
  }
];
var server = new API(config);

server.start(5000);
