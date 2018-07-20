
/***ES6***/
arr = [{ a: 1,test: () =>  console.log('test1')},{a: 2,test: () => console.log('test 2')}]
arr2 = arr.map(o => {return {...o,test: 2}})
arr2[0].test // 2
arr[0].test // test1


/****JS****/
arr = [{ a: 1,test: () =>  console.log('test1')},{a: 2,test: () => console.log('test 2')}]
arr2 = arr.map(o => {return Object.assign({},o,{test: 2})})
arr2[1].test // 2
arr[0].test // test1