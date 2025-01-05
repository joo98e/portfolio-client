import StringUtil from "./StringUtil";

describe("StringUtil", () => {
  it("comma 로 감싸기 테스트", () => {
    const result = StringUtil.commaWrapping("안녕하세요.");

    console.log({ result });
  });
});
