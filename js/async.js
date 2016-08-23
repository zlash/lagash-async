/*********************************************************************************

MIT License

Copyright (c) 2016 - Pablo Zaidenvoren

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*********************************************************************************/
"use strict";
class Async {
    static promise(func, thisObj) {
        return Async.promiseInternal(func, thisObj);
    }
    static promiseSpread(func, thisObj) {
        return Async.promiseInternalSpread(func, thisObj);
    }
    static promiseInternal(func, thisObj) {
        return ((...params) => {
            return new Promise((resolve, reject) => {
                let handleResult = (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                };
                params.push(handleResult);
                func.apply(thisObj, params);
            });
        });
    }
    static promiseInternalSpread(func, thisObj) {
        return ((...params) => {
            return new Promise((resolve, reject) => {
                let handleResult = (err, ...results) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(results);
                    }
                };
                params.push(handleResult);
                func.apply(thisObj, params);
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Async;
//# sourceMappingURL=async.js.map