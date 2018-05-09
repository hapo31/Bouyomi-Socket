import { util } from "../utils/byte";

/**
 * 棒読みちゃんに送るパラメーター
 */
export class BouyomiParameter {
  public message: string = "";
  public voice: VoiceType;
  public tone: number;
  public speed: number;
  public volume: number;
  public command: number;

  constructor(
    message: string,
    voice?: VoiceType,
    tone?: number,
    speed?: number,
    volume?: number,
    command?: number
  ) {
    this.message = message;
    this.voice = voice || VoiceType.Default;
    this.tone = tone || -1;
    this.speed = speed || -1;
    this.volume = volume || -1;
    this.command = command || 1;
  }

  public get data() {
    return new Uint8Array([
      ...util.uint32ToUint8(this.command, 2),
      ...util.uint32ToUint8(this.speed, 2),
      ...util.uint32ToUint8(this.tone, 2),
      ...util.uint32ToUint8(this.volume, 2),
      ...util.uint32ToUint8(this.voice, 2),
      0x00,
      ...util.uint32ToUint8(Buffer.byteLength(this.message, "utf-8"))
    ]);
  }
}

export type Parameters = {
  message: string;
  voice?: string;
  tone?: string;
  speed?: string;
  volume?: string;
};

export enum VoiceType {
  Default,
  Women1,
  Women2,
  Man1,
  Man2,
  Mid,
  Robot,
  Mecha1,
  Mecha2
}
