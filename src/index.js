const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("cursorPosition", (position) => {
    io.emit("cursorPosition", position);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
