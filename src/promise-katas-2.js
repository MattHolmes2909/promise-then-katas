const { fetch } = require("./fakeApi");
/* 

DO NOT change the import or names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

You can look at the fakeApi.js file to see the shape of the data that is returned from our fakeApi

We have imitated the fetch module for these katas. The fetch function takes two parameters, url and requestBody. 

For the first 3 exercises you will only need to provide the first parameter, url. For the last exercise you will
need to use the second parameter, requestBody.

An example of using the fetch function:

1 parameter
fetch("food").then(<insert your callback function>)

2 parameters
fetch("joke", "question").then(<insert your callback function>)

*/

// 1 Create a function that uses the fetch function to make a request to the "food" URL and returns
// the data - expected return value "Cheese" of type String

const food = () => {
    //dot notation to get data
    //fetch api
    return fetch("food").then((response) => response.data);
};

// 2 Create a function that uses the fetch function to make a request to the "cats" URL and returns
// a list of cats in alphabetical order - expected return value ["Bandit", "Berry", "Puss in boots", "Smokey"] of type Array

const cat = () => {
    //fetch cats api
    //arr.sort

    return fetch("cats").then((response) => response.data.cats.sort())
};

// 3 Create a function that uses the fetch function to make a request to the "dogs" URL and returns
// the naughtiest dog - expected return value {name: "Mutley", naughty: 10} of type Object

const dog = () => {
    // fetch dog api
    // arr reduce
    return fetch("dogs").then((response) => {
        const arr = response.data.dogs;
        const badDog = arr.reduce((previousDog, currentDog) => {
            if (previousDog.naughty > currentDog.naughty) {
                return previousDog;
            }
            return currentDog
        });
    return badDog
    });

    
};

// 4 Create a function that uses the fetch function to make requests to the "jokes" URL and returns
// a joke object with the key of question and answer - expected return { 
//     question: "Why did the scarecrow win the Nobel Prize?",
//     answer: "Because he was out-standing in his field."
// } of type Object
// You will have to make more than one request to our fakeApi to get all the data you need. 
// Be aware of nesting your calls (try to avoid callback hell). Take a look at Promise.all on MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
//

const joke = () => {
    // create question and answer object
    // fetch api to get joke
    // attach question to joke
    // fetch api to get answer
    // attach answer to laugh answer
    const laugh = { question: "", answer: "" };
    fetch("jokes", "question").then((response) => {
     laugh.question = response.joke
    });
    fetch("jokes", "answer").then((response) => {
    laugh.answer = response.answer
    });
    return laugh
};

module.exports = {
    food,
    cat,
    dog,
    joke
}