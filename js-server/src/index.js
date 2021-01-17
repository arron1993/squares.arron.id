const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  socket.on("updatePosition", (position) => {
    console.log("update position", socket.id, position.roomId);
    io.to(position.roomId).emit("updatedPosition", position);
  });

  socket.on("createRoom", (data) => {
    console.log("createRoom");
    const roomId = Math.floor(Math.random() * Math.floor(100000000));
    socket.join(roomId);
    io.emit("createdRoom", { roomId: roomId });
  });

  socket.on("joinRoom", (data) => {
    console.log("User joined room", socket.id, data.roomId);

    socket.join(data.roomId);
    io.to(data.roomId).emit("joinedRoom", {
      roomId: data.roomId,
      message: "User joined room",
    });
  });

  socket.on("disconnecting", () => {
    console.log("A user disconnected", socket.rooms); // the Set contains at least the socket ID
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
