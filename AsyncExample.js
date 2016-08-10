///<reference path="typings/globals/node/index.d.ts"/>
/**
 * Created by debdeep.chaudhuri on 7/14/2016.
 */
///<reference path="typings/index.d.ts" />
var deb;
(function (deb) {
    var app;
    (function (app) {
        var AsyncExample;
        (function (AsyncExample) {
            class Test {
                constructor() {
                    this.async = GetFileData(message, string);
                    this.async = TestRun(x, number, y, number);
                }
                Promise() {
                    var fs = require('fs');
                    return new Promise((resolve, reject) => {
                        fs.readFile(message, (e, d) => {
                            if (e)
                                reject(e);
                            //resolve(d.toString());
                            return d.toString();
                        });
                    });
                }
                ;
            }
            AsyncExample.Test = Test;
            {
                for (var i = x; i++; i <= y) {
                    var myPromise = this.GetSquare(i, 500);
                    myPromise.then((data) => {
                        console.log('Number is:' + data.toString());
                    }).catch((error) => {
                        console.log(error.toString());
                    });
                    console.log('Before Promise is resolved');
                    await;
                    myPromise;
                    console.log('After Promise is resolved');
                }
            }
            async;
            GetSquare(i, number, timeOut, number);
            Promise < number > {
                var: myPromise = new Promise((resolve, reject) => {
                    if (i > 10)
                        reject('Value is too large');
                    setTimeout(() => {
                        resolve(i * i);
                    }, timeOut);
                }),
                return: myPromise
            };
        })(AsyncExample = app.AsyncExample || (app.AsyncExample = {}));
    })(app = deb.app || (deb.app = {}));
})(deb || (deb = {}));
async;
function main() {
    var logger = new AsyncExample.Test();
    //var data = await logger.GetFileData('promise.js');
    // console.log(data);
    await;
    logger.TestRun(1, 110);
}
main();
//# sourceMappingURL=AsyncExample.js.map