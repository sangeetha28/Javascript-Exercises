function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        var randomNumber = Math.floor(Math.random() * 5);
        if(randomNumber < 3)
         resolve(randomNumber);
        else
            reject(randomNumber);
        },10000);
});
};


for(var i = 0; i <= 10; i++) {
    getData().then(res => console.log('Promise is resolved',res)).catch((err)=> console.log('Promise is rejected',err));
}