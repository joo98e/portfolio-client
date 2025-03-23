import BooleanUtil from "./BooleanUtil";
import { faker } from "@faker-js/faker";

describe("StringUtil", () => {
  it("빈 문자열, NULL, undefined 는 비어있는 값으로 간주한다", () => {
    const blankCases = [
      BooleanUtil.isBlank(""), //
      BooleanUtil.isBlank("  "), //
      BooleanUtil.isBlank(null),
      BooleanUtil.isBlank(undefined),
    ];

    blankCases.forEach((val) => {
      expect(val).toBeTruthy();
    });
  });
  it("유효한 문자열, 모든 숫자, boolean 은 비어있는 값으로 간주하지 않는다", () => {
    const notBlankCases = [
      BooleanUtil.isBlank(faker.string.sample()), //
      BooleanUtil.isBlank(faker.string.numeric()),
      BooleanUtil.isBlank(faker.string.uuid()),

      BooleanUtil.isBlank(faker.number.int()),
      BooleanUtil.isBlank(0),

      BooleanUtil.isBlank(true),
      BooleanUtil.isBlank(false),
    ];

    notBlankCases.forEach((val) => {
      expect(val).toBeFalsy();
    });
  });

  it("test", async () => {
    expect(5).toEqual(5);

    console.log("start");
    await ApiService.makeRequest(1).then(console.log);
    await ApiService.makeRequest(2).then(console.log);
    await ApiService.makeRequest(3).then(console.log);
    console.log("end");
  });
});

function Consoler(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log({
    target,
    propertyKey,
    descriptor,
  });

  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log("Consoler");
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class ApiService {
  static readonly BASE_URL = "https://jsonplaceholder.typicode.com";

  @Consoler
  static async makeRequest(postNum: number) {
    return new Promise((resolve) => {
      const base = this.BASE_URL;

      fetch(`${base}/posts/${postNum}`)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
  }
}