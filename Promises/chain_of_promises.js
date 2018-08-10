const apiKey = '9ff39916eeff358ef6c6a80cd795f6ca';
//const apiKey = '815d7cd9989csdsb7a29e53d56599d769ad';
const corsProxy = 'https://cors-anywhere.herokuapp.com';
const axios = require('axios');


const rand = (arr) => Math.floor(Math.random() * arr.length)

const filterByPublisher = (data,publisher) =>  data.filter(el => el.publisher === publisher);

const getRecipeId = (data) =>  data[0].recipe_id;

const fetchRecipe = (id) => axios.get(`${corsProxy}/http://food2fork.com/api/get?key=${apiKey}&rId=${id}`);

const displayResponse = (data) => data.data.recipe;

const foodAPI = () => {
    return new Promise((resolve,reject) => {
        const response = axios.get(`${corsProxy}/http://food2fork.com/api/search?key=${apiKey}&q='pizza'`)
        resolve(response);
    if(response.status === 200){
        reject(response);
    }
});
}
/** .then can assign bothonFulfilled, onRejected handlers **/

foodAPI()
 .then(res =>
 {
     const a = ["101 Cookbooks",'Non-existent'];
 const index = rand(a);
 const filteredObject = filterByPublisher(res.data.recipes,a[index])
return new Promise((resolve,reject) => {
    if(filteredObject.length !== 0)
{
    resolve(filteredObject);
}
else
{
    reject('No Data Returned from the API');
}
});
 })
.then(res => {
    const recipe_id = getRecipeId(res)
    console.log('Recipe id:',recipe_id)
    return new Promise((resolve,reject) => {
    if(recipe_id === '47746')
    {
       resolve(recipe_id);
    }
    else
    {
        reject(recipe_id);
    }
});
})
.then(res => fetchRecipe(res))
.then(res => {
    console.log('fetch response is',res)
    return displayResponse(res)
})
.then(res => console.log('data is',res))
.catch(err => alert(err))
.finally(()=> console.log('A finally callback will not receive any argument, since there\'s no reliable means of determining if the promise was fulfilled or rejected'));