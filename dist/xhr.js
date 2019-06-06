"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function xhrRequest(method, url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status <= 399) {
                resolve(this.responseText);
            }
            else {
                reject(this.responseText);
            }
        };
        xhr.send(data);
    });
}
exports.default = xhrRequest;
