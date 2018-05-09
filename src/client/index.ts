import * as net from "net";
import { util } from "./utils/byte";
import { BouyomiParameter, VoiceType } from "./parameters";

const options = {
  host: "localhost",
  port: 50001
};

const text = "ほげほげほげほげ";

const bouyomiParam = new BouyomiParameter(text, VoiceType.Robot, 255, 5, 50);

const client = net.connect(options);
const buffer = new Buffer(bouyomiParam.data);

client.on("error", e => {
  console.error("connection error:", e);
});

client.on("connect", e => {
  console.log(`connected: ${options.host}:${options.port}`);
  console.log("send buffer...", buffer);
  client.write(buffer);
  client.write(text);
  client.end();
});

client.on("data", data => {
  process.stdout.write(data.toString());
});
