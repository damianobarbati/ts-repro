// import log from '#decorator/log.ts';

export default class Foe {
  // @log => we'll have to wait for decorators to land in v8
  bar(x: number) {
    return x;
  }
}
