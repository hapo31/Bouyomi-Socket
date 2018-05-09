import * as net from "net";
import express = require("express");
import { util } from "./utils/byte";
import {
  BouyomiParameter,
  VoiceType,
  Parameters
} from "./lib/BouyomiParameter";

const appPort = 8080;
const app = express();

const options = {
  host: "localhost",
  port: 50001
};

app.get("/talk.json", (req, res) => {
  const { message, voice, tone, speed, volume }: Parameters = req.query;
  if (!message) {
    res.status(400);
    res.send(`"message" parameter required.\r\n\r\n`);
    res.end();
    return;
  }

  const decodedMessage = decodeURIComponent(message);

  const bouyomiParam = new BouyomiParameter(
    decodedMessage,
    parseInt(voice!, 10),
    parseInt(tone!, 10),
    parseInt(speed!, 10),
    parseInt(volume!, 10)
  );
  const buffer = new Buffer(bouyomiParam.data);
  console.log(`message: ${decodedMessage}`);
  const bouyomiClient = net.connect(options);
  bouyomiClient.write(buffer);
  bouyomiClient.write(`${decodedMessage}\r\n\r\n`);
  bouyomiClient.end();

  res.status(200);
  res.send("ok");
  res.end();
});

app.listen(appPort);
console.log(`listen: ${appPort}`);
