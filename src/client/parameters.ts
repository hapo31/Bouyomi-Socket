import { util } from "./utils/byte";

/**
 * 棒読みちゃんに送るパラメーター
 */
export class BouyomiParameter {
  constructor(
    public message: string = "",
    public voice: VoiceType = VoiceType.Default,
    public tone: number = -1,
    public speed: number = -1,
    public volume: number = -1,
    public command: number = 1
  ) {}

  public get data() {
    const arr = [
      ...util.uint32ToUint8(this.command, 2),
      ...util.uint32ToUint8(this.speed, 2),
      ...util.uint32ToUint8(this.tone, 2),
      ...util.uint32ToUint8(this.volume, 2),
      ...util.uint32ToUint8(this.voice, 2),
      0x00,
      ...util.uint32ToUint8(Buffer.byteLength(this.message, "utf-8"))
    ];
    console.log(arr);
    return arr;
  }
}

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
