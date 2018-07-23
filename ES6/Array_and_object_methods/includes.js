// Check if Array contains a certain value. It's similar to .some() but instead of checking for a condition to pass, it looks if the
// array contains a specific value

// Find how many occurence of a specific word

const quote = ['Its','not','gonna','be','easy','Its','gonna','be','really','hard','But','I','am','gonna','work','at','this','everyday']

function check(arr,word){
    return arr.includes(word)
}

check(quote,'hard')