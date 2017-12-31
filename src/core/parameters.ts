/**
 * 棒読みちゃんに送るパラメーター
 */
export class BouyomiParameter {
    message: string = "デフォルトのメッセージ";
    voice: VoiceType = VoiceType.Default;
    volume: number = -1;
    speed: number = -1;
    tone: number = -1;
    command: number = 0;

    data() {
        let data = new Uint8Array(15);
        data[0] = this.command;
        data[2] = this.speed;
        data[4] = this.tone;
        data[6] = this.volume;
        data[8] = this.voice;
        data[10] = 0;
        const len = this.message.length;
        data[11] = (len & 0xF000) >> 24;
        data[12] = (len & 0xF00) >> 16;
        data[13] = (len & 0xF0) >> 8;
        data[14] = (len & 0xF);

        return data;
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
