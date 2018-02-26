import * as net from "net";
import { util } from "../utils/byte";

const options = {
  host: "localhost",
  port: 50001
};

const text =
  "止まるんじゃねえぞ止まるんじゃねえぞ止まるんじゃねえぞ止まるんじゃねえぞ止まるんじゃねえぞ";

const client = net.connect(options);
const arr = new Uint8Array([
  0x01,
  0x00, // コマンド
  0xff,
  0xff, // speed
  0xff,
  0xff, // tone
  0xff,
  0xff, // volume
  0x00,
  0x00, // voice
  0x00, // character encode
  ...util.uint32ToUint8(Buffer.byteLength(text, "utf-8"))
]);

const buffer = new Buffer(arr);

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
