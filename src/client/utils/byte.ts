export namespace util {
  export function uint32ToUint8(chunk: number) {
    chunk &= 0xffffffff;
    const result = new Uint8Array(4);
    for (let i = 0; i < 4; ++i) {
      result[i] = (chunk >> (i * 8)) & 0xff;
    }
    return result;
  }
}
