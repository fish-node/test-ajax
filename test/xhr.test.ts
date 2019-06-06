import mock from "xhr-mock";

import xhrRequest from "../src/xhr";

describe("测试xhr请求", () => {
    // replace the real XHR object with the mock XHR object before each test
    beforeEach(() => mock.setup());

    // put the real XHR object back and clear the mocks after each test
    afterEach(() => mock.teardown());

    test("post请求", async () => {
        mock.post("/api/user", {
            status: 201,
            body: '{"data":{"id":"abc-123"}}',
        });

        const res = await xhrRequest("POST", "/api/user");
        console.log(res);
    });

    test("get请求并发生异常", async () => {
        mock.get("/api/user", {
            status: 400,
            body: JSON.stringify({message: "参数格式错误"}),
        });

        try {
            const res = await xhrRequest("get", "/api/user");
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    });
});
