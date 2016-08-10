///<reference path="typings/globals/node/index.d.ts"/>
/**
 * Created by debdeep.chaudhuri on 7/14/2016.
 */
///<reference path="typings/index.d.ts" />
module deb.app.AsyncExample {
    export class Test {

        async  GetFileData(message: string): Promise<string> {
            var fs = require('fs');
            return new Promise<string>((resolve, reject) => {
                fs.readFile(message, (e, d) => {
                    if (e) reject(e);
                    //resolve(d.toString());
                    return d.toString();
                })
            })
        };

        async TestRun(x:number,y:number){
            for(var i=x;i++;i<=y){
                var myPromise = this.GetSquare(i,500);
                myPromise.then((data)=>{
                    console.log('Number is:' + data.toString());                    
                }).catch((error)=>{
                    console.log(error.toString());   
                })
                console.log('Before Promise is resolved');
                await myPromise;
                console.log('After Promise is resolved');
            }
                
                
        }
        async GetSquare(i:number,timeOut:number):Promise<number>{
            var myPromise = new Promise<number>((resolve,reject)=>{
                if(i>10) reject('Value is too large');
                setTimeout(()=>{
                        resolve(i*i);
                },timeOut)
                
            });
            return myPromise;
        }
    }
    async function main() {
        var logger = new AsyncExample.Test();
        //var data = await logger.GetFileData('promise.js');
       // console.log(data);
       await logger.TestRun(1,110);
    }

    main();
}
