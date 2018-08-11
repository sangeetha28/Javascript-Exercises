(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**The Promise.all(iterable) method returns a single /**Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains
 no promises.**/

/**Promise.all will aggregate the promise results in the same order as we’ve given**/

/**Promise.all is used for making a list of promises and get the aggregated result.**/


// var promise1 = Promise.resolve(3);
// var promise2 = 42;
// var promise3 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 10000, 'foo');
// });
//
// Promise.all([promise1, promise2, promise3]).then(function(values) {
//     console.log(values);
// });

/*** Implement Promise.all by yourself **/


const PromiseAll = (arrayOfPromises) => {
    const length = arrayOfPromises.length;
    const result = [];
    let completedPromises= 0;
    return new Promise((resolve,reject)=> {
        arrayOfPromises.forEach((promise,index)=> {
            promise.then((value)=> {
        result[index] = value;
        completedPromises += 1;
        if(completedPromises === result.length){
            resolve(result)
        }
    }).catch(error => {
      reject(error)
    }); });


    });

}


const asynchronousFunction = (time) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(time),time);
    })
}

PromiseAll([asynchronousFunction(2000),asynchronousFunction(1000),asynchronousFunction(1000)]).then(res => console.log('result is',res))
},{}]},{},[1]);
