import * as Byte from "../byte";

const t = [0xffffffff, 0xff];

const r = t.map(v => Byte.util.uint32ToUint8(v));

console.log(r[0]);

assert(r[0][0] === 0xff, "全部0xF");
assert(r[0][1] === 0xff, "全部0xF");
assert(r[0][2] === 0xff, "全部0xF");
assert(r[0][3] === 0xff, "全部0xF");

console.log(r[1]);

assert(r[1][0] === 255, "114514");
assert(r[1][1] === 0, "114514");
assert(r[1][2] === 0, "114514");
assert(r[1][3] === 0, "114514");

function assert(
  cond: boolean,
  description: string,
  msg = `faild: ${description}`
) {
  if (!cond) {
    console.error(msg);
  }
}
