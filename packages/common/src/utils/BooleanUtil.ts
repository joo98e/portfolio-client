export default class BooleanUtil {
  static isBlank(value: unknown) {
    return Boolean(value === "") || value === null || value === undefined;
  }
}
