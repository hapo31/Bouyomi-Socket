export namespace util {
  export function uint32ToUint8(chunk: number, truncateChunks = 0) {
    const i32 = chunk & 0xffffffff;
    const result = new Uint8Array(4 - truncateChunks);
    for (let i = 0; i < 4 - truncateChunks; ++i) {
      result[i] = (i32 >> (i * 8)) & 0xff;
    }
    return result;
  }
}
