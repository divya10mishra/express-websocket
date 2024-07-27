import express from "express";
import { WebSocketServer, WebSocket } from "ws";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi Hello");
});

let httpServer = app.listen(8080);

const wss = new WebSocketServer({ noServer: true });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data, isBinary) {
    console.log("recieved", data);
  });
});
