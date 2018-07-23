    var person = {
        name: 'sangeetha',
        gender: 'female',
        hobbies: ['traveling','yoga','driving','singing','cooking'],
        belief: 'Life is just once, live life to the fullest!'
    }
   let arr = [];

  Object.keys(person).map( (key) => {
     arr.push(person[key]);
  })
  console.log(arr);
