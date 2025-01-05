export default class BooleanUtil {
  static isBlank(value: unknown) {
    return (
      Boolean(typeof value === "string" && value.trim() === "") ||
      value === null ||
      value === undefined
    );
  }
}
