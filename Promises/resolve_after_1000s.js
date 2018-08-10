/**The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.**/

/*** Callbacks will never be called before the completion of the current run of the JavaScript event loop.
 Callbacks added with then() even after the success or failure of the asynchronous operation, will be called, as above.
 Multiple callbacks may be added by calling then() several times. Each callback is executed one after another, in the order in which they were inserted.**/

const doSomething = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        resolve('You are learning JS Promises...!');
    }, 1000)
})
}


// Just Appending today's Date with the resolved Promise Response
doSomething().then(res => console.log('Promise is resolved successfully',res+' from '+new Date())).catch(err => console.log('Promise is rejected!',err) );