import xhrRequest from "../dist/xhr";

let url = "https://api.github.com/repos/axios/axios/issues";

(async () => {
    let res = await xhrRequest("get", url);
    console.log(res);
})();
