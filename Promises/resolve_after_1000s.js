
const doSomething = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        resolve('You are learning JS Promises...!');
    }, 1000)
})
}


// Just Appending today's Date with the resolved Promise Response
doSomething().then(res => console.log('Promise is resolved successfully',res+' from '+new Date())).catch(err => console.log('Promise is rejected!',err) );